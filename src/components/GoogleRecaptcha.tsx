'use client';

import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement | string,
        parameters: {
          sitekey: string;
          callback: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
          theme?: 'light' | 'dark';
        }
      ) => number;
      reset: (widgetId?: number) => void;
      ready: (callback: () => void) => void;
    };
    onGoogleRecaptchaLoad?: () => void;
  }
}

export interface GoogleRecaptchaRef {
  reset: () => void;
}

interface GoogleRecaptchaProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  siteKey?: string;
  className?: string;
}

// Production Google reCAPTCHA v2 Site Key for aavsourcing.com
const PRODUCTION_SITE_KEY = '6LdtQNstAAAAAKSfsJCEMM4BL44o_rO5ypR39Jll';

const GoogleRecaptcha = forwardRef<GoogleRecaptchaRef, GoogleRecaptchaProps>(
  ({ onVerify, onExpire, onError, siteKey, className = '' }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<number | null>(null);

    const activeSiteKey = siteKey || process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || PRODUCTION_SITE_KEY;

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (typeof window !== 'undefined' && window.grecaptcha && widgetIdRef.current !== null) {
          try {
            window.grecaptcha.reset(widgetIdRef.current);
          } catch {
            // Ignore reset error
          }
        }
      },
    }));

    useEffect(() => {
      const renderWidget = () => {
        if (!containerRef.current || !window.grecaptcha) return;
        // Prevent duplicate renders inside the container
        if (widgetIdRef.current !== null || containerRef.current.hasChildNodes()) return;

        try {
          const id = window.grecaptcha.render(containerRef.current, {
            sitekey: activeSiteKey,
            callback: (token: string) => {
              onVerify(token);
            },
            'expired-callback': () => {
              if (onExpire) onExpire();
            },
            'error-callback': () => {
              if (onError) onError();
            },
            theme: 'light',
          });
          widgetIdRef.current = id;
        } catch (err) {
          console.warn('[reCAPTCHA Render Error]:', err);
        }
      };

      if (typeof window === 'undefined') return;

      const existingScript = document.getElementById('google-recaptcha-script');

      if (!existingScript) {
        window.onGoogleRecaptchaLoad = () => {
          if (window.grecaptcha) {
            window.grecaptcha.ready(renderWidget);
          }
        };

        const script = document.createElement('script');
        script.id = 'google-recaptcha-script';
        script.src = 'https://www.google.com/recaptcha/api.js?onload=onGoogleRecaptchaLoad&render=explicit';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      } else if (window.grecaptcha) {
        window.grecaptcha.ready(renderWidget);
      }
    }, [activeSiteKey, onVerify, onExpire, onError]);

    return (
      <div className={`recaptcha-wrapper ${className}`}>
        <div ref={containerRef} className="min-h-[78px] w-full max-w-[304px]" />
      </div>
    );
  }
);

GoogleRecaptcha.displayName = 'GoogleRecaptcha';

export default GoogleRecaptcha;
