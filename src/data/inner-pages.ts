import type { ProductDetailPageProps } from '@/components/ProductDetailPage';

/* ─── Shared Related Products ─── */
const TEXTILE_RELATED = [
  {
    title: 'Towels',
    image: '/images/products/textile-towels.png',
    imageAlt: 'High quality towels, bath towels, and hand towels',
    href: '/textile/towels',
  },
  {
    title: 'Bedding',
    image: '/images/products/textile-bedding.png',
    imageAlt: 'Premium cotton bedding sets',
    href: '/textile/bedding',
  },
  {
    title: 'Bed Sheets',
    image: '/images/products/textile-bed-sheets.png',
    imageAlt: 'Fitted bed sheets and waterproof protection',
    href: '/textile/bed-sheets',
  },
  {
    title: 'Fabrics',
    image: '/images/products/textile-fabrics.png',
    imageAlt: 'Knitted and woven fabrics',
    href: '/textile/fabrics',
  },
  {
    title: 'Garments',
    image: '/images/products/textile-garments.png',
    imageAlt: 'OEM apparel and garments',
    href: '/textile/garments',
  },
  {
    title: 'Baby Textiles',
    image: '/images/products/textile-baby-textiles.png',
    imageAlt: 'Soft muslin baby swaddles and bedding',
    href: '/textile/baby-textiles',
  },
  {
    title: 'Yarns',
    image: '/images/products/textile-yarns.png',
    imageAlt: 'Cotton, lyocell, and dyed yarns',
    href: '/textile/yarns',
  },
  {
    title: 'Institutional Textiles',
    image: '/images/products/textile-institutional-textiles.png',
    imageAlt: 'Hospital and hotel institutional textiles',
    href: '/textile/institutional-textiles',
  },
];

const TIMBER_RELATED = [
  {
    title: 'Softwood Sawn Timber',
    image: '/images/products/timber-softwood.png',
    imageAlt: 'Kiln dried softwood sawn timber planks',
    href: '/timber/softwood-sawn-timber',
  },
  {
    title: 'Hardwood Sawn Timber',
    image: '/images/products/timber-hardwood.png',
    imageAlt: 'Kiln dried hardwood sawn timber',
    href: '/timber/hardwood-sawn-timber',
  },
  {
    title: 'Logs',
    image: '/images/products/timber-logs.png',
    imageAlt: 'Round logs in a timber yard',
    href: '/timber/logs',
  },
  {
    title: 'Plywood',
    image: '/images/products/timber-plywood.png',
    imageAlt: 'Sheets of plywood stacked at a warehouse',
    href: '/timber/plywood',
  },
  {
    title: 'Veneer',
    image: '/images/products/timber-veneer.png',
    imageAlt: 'Wood veneer sheets showing natural grain',
    href: '/timber/veneer',
  },
];

/* ─── Textile Inner Pages Data ─── */
export const TEXTILE_INNER_PAGES: Record<string, ProductDetailPageProps> = {
  towels: {
    category: 'Textile',
    categoryHref: '/textile',
    title: 'Towels',
    subtitle:
      'Bath, hand, kitchen, and baby towels in ring spun, zero twist, and jacquard constructions.',
    tags: ['Ring spun', 'Zero twist', 'Dobby / jacquard'],
    products: [
      {
        title: 'Bath towels',
        image: '/images/products/stacked-white-bath-towels.png',
        imageAlt: 'Stacked white bath towels',
      },
      {
        title: 'Hand towels',
        image: '/images/products/folded-hand-towels-near-plants.png',
        imageAlt: 'Folded hand towels near plants',
      },
      {
        title: 'Kitchen towels',
        image: '/images/products/kitchen-textile-accessories.png',
        imageAlt: 'Kitchen textile accessories',
      },
      {
        title: 'Bar mops',
        image: '/images/products/white-quilted-cleaning-cloth.png',
        imageAlt: 'White quilted cleaning cloth',
      },
      {
        title: 'Zero twist towels',
        image: '/images/products/soft-fluffy-towels-stacked.png',
        imageAlt: 'Soft fluffy towels stacked',
      },
      {
        title: 'Baby bath towels',
        image: '/images/products/child-wrapped-in-hooded-bath-towel.png',
        imageAlt: 'Child wrapped in hooded bath towel',
      },
    ],
    ctaText: 'Enquire about Towels',
    relatedProducts: TEXTILE_RELATED.filter((p) => p.href !== '/textile/towels'),
  },

  bedding: {
    category: 'Textile',
    categoryHref: '/textile',
    title: 'Bedding',
    subtitle:
      'Complete bedding sets in jersey, flannel, cotton, sateen, muslin, and more.',
    tags: ['Sateen / percale', 'Cotton', 'Muslin'],
    products: [
      {
        title: 'Bedding sets',
        image: '/images/products/white-bed-with-pillow-set.png',
        imageAlt: 'White bed with pillow set',
      },
      {
        title: 'Jersey bedding sets',
        image: '/images/products/hotel-bed-with-white-jersey-linen.png',
        imageAlt: 'Hotel bed with white jersey linen',
      },
      {
        title: 'Flannel bedding sets',
        image: '/images/products/cozy-flannel-textile-on-couch.png',
        imageAlt: 'Cozy flannel textile on couch',
      },
      {
        title: 'Cotton bedding sets',
        image: '/images/products/white-cotton-bed-linen.png',
        imageAlt: 'White cotton bed linen',
      },
      {
        title: 'Sateen & percale sets',
        image: '/images/products/smooth-white-sateen-duvet.png',
        imageAlt: 'Smooth white sateen duvet',
      },
      {
        title: 'Muslin bedding sets',
        image: '/images/products/soft-muslin-cloth-texture.png',
        imageAlt: 'Soft muslin cloth texture',
      },
      {
        title: 'Duvet cover sets',
        image: '/images/products/white-duvet-cover-on-wooden-table.png',
        imageAlt: 'White duvet cover on wooden table',
      },
      {
        title: 'Pillows',
        image: '/images/products/quilted-white-pillow-protector.png',
        imageAlt: 'Quilted white pillow protector',
      },
      {
        title: 'Throws & blankets',
        image: '/images/products/throw-blanket-draped-on-sofa.png',
        imageAlt: 'Throw blanket draped on sofa',
      },
    ],
    ctaText: 'Enquire about Bedding',
    relatedProducts: TEXTILE_RELATED.filter((p) => p.href !== '/textile/bedding'),
  },

  'bed-sheets': {
    category: 'Textile',
    categoryHref: '/textile',
    title: 'Bed Sheets',
    subtitle:
      'Fitted and flat sheets in a wide range of fabrics including waterproof and TENCEL™ options.',
    tags: ['TENCEL™', 'Waterproof laminated', 'Cotton'],
    products: [
      {
        title: 'Fitted sheets',
        image: '/images/products/neatly-fitted-white-bed-sheet.png',
        imageAlt: 'Neatly fitted white bed sheet',
      },
      {
        title: 'Muslin fitted sheets',
        image: '/images/products/soft-muslin-fitted-sheet-fabric.png',
        imageAlt: 'Soft muslin fitted sheet fabric',
      },
      {
        title: 'Jersey / terry / jacquard / molton',
        image: '/images/products/soft-jersey-bed-sheet-on-mattress.png',
        imageAlt: 'Soft jersey bed sheet on mattress',
      },
      {
        title: 'Waterproof laminated fitted',
        image: '/images/products/quilted-waterproof-mattress-sheet.png',
        imageAlt: 'Quilted waterproof mattress sheet',
      },
      {
        title: 'Polycotton fitted sheets',
        image: '/images/products/crisp-polycotton-bed-sheet.png',
        imageAlt: 'Crisp polycotton bed sheet',
      },
      {
        title: 'TENCEL™ Lyocell fitted sheets',
        image: '/images/products/smooth-tencel-lyocell-bed-linen.png',
        imageAlt: 'Smooth TENCEL Lyocell bed linen',
      },
      {
        title: 'Stretch jersey bed sheets',
        image: '/images/products/stretch-jersey-sheet-on-bed.png',
        imageAlt: 'Stretch jersey sheet on bed',
      },
    ],
    ctaText: 'Enquire about Bed Sheets',
    relatedProducts: TEXTILE_RELATED.filter((p) => p.href !== '/textile/bed-sheets'),
  },

  fabrics: {
    category: 'Textile',
    categoryHref: '/textile',
    title: 'Fabrics',
    subtitle:
      'Greige, dyed, printed, laminated, and knitted fabrics sourced to technical specifications.',
    tags: ['Greige', 'Laminated', 'Knitted / denim'],
    products: [
      {
        title: 'Greige fabrics',
        image: '/images/products/undyed-greige-fabric-rolls.png',
        imageAlt: 'Undyed greige fabric rolls',
      },
      {
        title: 'PU & PVC laminated',
        image: '/images/products/laminated-waterproof-fabric-surface.png',
        imageAlt: 'Laminated waterproof fabric surface',
      },
      {
        title: 'Printed fabrics',
        image: '/images/products/colorful-printed-textile-patterns.png',
        imageAlt: 'Colorful printed textile patterns',
      },
      {
        title: 'White & solid dyed',
        image: '/images/products/white-and-solid-dyed-fabric.png',
        imageAlt: 'White and solid dyed fabric',
      },
      {
        title: 'Garment washed fabrics',
        image: '/images/products/washed-garment-fabric-texture.png',
        imageAlt: 'Washed garment fabric texture',
      },
      {
        title: 'Knitted fabrics',
        image: '/images/products/knitted-fabric-closeup.png',
        imageAlt: 'Knitted fabric closeup',
      },
      {
        title: 'Denim fabrics',
        image: '/images/products/blue-denim-twill-weave-fabric-closeup.png',
        imageAlt: 'Blue denim twill weave fabric closeup',
      },
    ],
    ctaText: 'Enquire about Fabrics',
    relatedProducts: TEXTILE_RELATED.filter((p) => p.href !== '/textile/fabrics'),
  },

  garments: {
    category: 'Textile',
    categoryHref: '/textile',
    title: 'Garments',
    subtitle:
      'Apparel from t-shirts to denim, available for OEM and private label orders.',
    tags: ['Denim', 'OEM / private label', 'Cotton'],
    products: [
      {
        title: 'T-shirts & polo shirts',
        image: '/images/products/stacked-white-cotton-t-shirts-garments.png',
        imageAlt: 'Stacked white cotton t-shirts',
      },
      {
        title: 'Hoodies',
        image: '/images/products/white-hoodie-and-jeans-hanging-on-rope.png',
        imageAlt: 'White hoodie and jeans hanging on rope',
      },
      {
        title: 'Denim jeans',
        image: '/images/products/blue-denim-jeans-fabric-weave.png',
        imageAlt: 'Blue denim jeans fabric weave',
      },
      {
        title: 'Cotton chinos & shorts',
        image: '/images/products/cotton-chino-fabric-folded.png',
        imageAlt: 'Cotton chino fabric folded',
      },
      {
        title: 'Underwear',
        image: '/images/products/white-cotton-jersey-fabric.png',
        imageAlt: 'White cotton jersey fabric',
      },
      {
        title: 'Gloves & socks',
        image: '/images/products/white-cotton-gloves-pair.png',
        imageAlt: 'White cotton gloves pair',
      },
    ],
    ctaText: 'Enquire about Garments',
    relatedProducts: TEXTILE_RELATED.filter((p) => p.href !== '/textile/garments'),
  },

  'baby-textiles': {
    category: 'Textile',
    categoryHref: '/textile',
    title: 'Baby Textiles',
    subtitle:
      'Soft, safe baby bedding, swaddles, sleeping bags, and hooded towels.',
    tags: ['Muslin', 'Waterproof', 'Cotton'],
    products: [
      {
        title: 'Baby bedding sets',
        image: '/images/products/baby-lying-on-white-bedding.png',
        imageAlt: 'Baby lying on white bedding',
      },
      {
        title: 'Crib & cot fitted sheets',
        image: '/images/products/baby-in-grey-onesie-on-crib-sheet.png',
        imageAlt: 'Baby in grey onesie on crib sheet',
      },
      {
        title: 'Moses basket sheets',
        image: '/images/products/soft-white-muslin-baby-sheet.png',
        imageAlt: 'Soft white muslin baby sheet',
      },
      {
        title: 'Waterproof sheets',
        image: '/images/products/white-waterproof-laminated-sheet.png',
        imageAlt: 'White waterproof laminated sheet',
      },
      {
        title: 'Muslin swaddles',
        image: '/images/products/soft-white-muslin-swaddle.png',
        imageAlt: 'Soft white muslin swaddle',
      },
      {
        title: 'Baby sleeping bags',
        image: '/images/products/infant-in-sleeping-bag.png',
        imageAlt: 'Infant in sleeping bag',
      },
      {
        title: 'Blankets & flannel receiving',
        image: '/images/products/soft-flannel-receiving-blanket.png',
        imageAlt: 'Soft flannel receiving blanket',
      },
      {
        title: 'Burp cloths',
        image: '/images/products/white-muslin-burp-cloth.png',
        imageAlt: 'White muslin burp cloth',
      },
      {
        title: 'Hooded terry towels',
        image: '/images/products/baby-wrapped-in-hooded-terry-towel.png',
        imageAlt: 'Baby wrapped in hooded terry towel',
      },
    ],
    ctaText: 'Enquire about Baby Textiles',
    relatedProducts: TEXTILE_RELATED.filter((p) => p.href !== '/textile/baby-textiles'),
  },

  yarns: {
    category: 'Textile',
    categoryHref: '/textile',
    title: 'Yarns',
    subtitle:
      'Cotton, lyocell, polyester, and blended yarns across a wide count range.',
    tags: ['Lyocell', 'Mélange / dyed', 'Cotton'],
    products: [
      {
        title: 'Cotton yarn (Ne 10s–80s)',
        image: '/images/products/cotton-yarn-spools.png',
        imageAlt: 'Cotton yarn spools',
      },
      {
        title: 'Lyocell yarn',
        image: '/images/products/lyocell-yarn-thread.png',
        imageAlt: 'Lyocell yarn thread',
      },
      {
        title: 'Polyester viscose (PV)',
        image: '/images/products/polyester-viscose-yarn.png',
        imageAlt: 'Polyester viscose yarn',
      },
      {
        title: 'Polyester yarn',
        image: '/images/products/polyester-yarn-spool.png',
        imageAlt: 'Polyester yarn spool',
      },
      {
        title: 'Polyester cotton (PC)',
        image: '/images/products/polyester-cotton-blend-yarn.png',
        imageAlt: 'Polyester cotton blend yarn',
      },
      {
        title: 'Mélange yarn',
        image: '/images/products/melange-twisted-yarn.png',
        imageAlt: 'Mélange twisted yarn',
      },
      {
        title: 'Dyed yarn',
        image: '/images/products/dyed-coloured-yarn-spools.png',
        imageAlt: 'Dyed coloured yarn spools',
      },
    ],
    ctaText: 'Enquire about Yarns',
    relatedProducts: TEXTILE_RELATED.filter((p) => p.href !== '/textile/yarns'),
  },

  'institutional-textiles': {
    category: 'Textile',
    categoryHref: '/textile',
    title: 'Institutional Textiles',
    heroTitle: 'Institutional\nTextiles',
    subtitle:
      'Hotel, hospital, and institutional bedding, gowns, uniforms, and laundry bags.',
    tags: ['Hotel', 'Hospital', 'Commercial wash'],
    products: [
      {
        title: 'Hotel bedding',
        image: '/images/products/inst-hotel-bedding.png',
        imageAlt: 'Hotel bedding — stacked white folded sheets',
      },
      {
        title: 'Hospital bedding',
        image: '/images/products/inst-hospital-bedding.png',
        imageAlt: 'Hospital bedding — clean white sheets on table',
      },
      {
        title: 'Waterproof bedding',
        image: '/images/products/inst-waterproof-bedding.png',
        imageAlt: 'Waterproof bedding — folded white duvet and pillow',
      },
      {
        title: 'Patient & medical gowns',
        image: '/images/products/inst-patient-gowns.png',
        imageAlt: 'Patient & medical gowns — cream folded gown',
      },
      {
        title: 'Uniforms & institutional',
        image: '/images/products/inst-uniforms.png',
        imageAlt: 'Uniforms & institutional — stack of olive and grey shirts',
      },
      {
        title: 'Institutional bedding',
        image: '/images/products/inst-institutional-bedding.png',
        imageAlt: 'Institutional bedding — cream folded sheets by window',
      },
      {
        title: 'Laundry bags',
        image: '/images/products/inst-laundry-bags.png',
        imageAlt: 'Laundry bags — stack of textured laundry bags on table',
      },
    ],
    ctaText: 'Enquire about Institutional Textiles',
    relatedProducts: TEXTILE_RELATED.filter(
      (p) => p.href !== '/textile/institutional-textiles'
    ),
  },
};

/* ─── Timber Inner Pages Data ─── */
export const TIMBER_INNER_PAGES: Record<string, ProductDetailPageProps> = {
  'softwood-sawn-timber': {
    category: 'Timber',
    categoryHref: '/timber',
    title: 'Softwood Sawn Timber',
    heroTitle: 'Softwood Sawn\nTimber',
    subtitle:
      'Kiln dried pine and spruce in rough sawn and S4S planed forms, to buyer specified sizes.',
    tags: ['Pine', 'Spruce', 'S4S planed'],
    products: [
      {
        title: 'Kiln dried rough sawn pine',
        image: '/images/products/softwood-card-1.png',
        imageAlt: 'Kiln dried rough sawn pine lumber planks',
        description:
          'Suitable for furniture components, packaging, joinery, and general manufacturing. Available in buyer specified sizes and grades.',
      },
      {
        title: 'Kiln dried rough sawn spruce',
        image: '/images/products/softwood-card-2.png',
        imageAlt: 'Kiln dried rough sawn spruce timber planks',
        description:
          'A versatile option for construction, furniture frames, packaging, and other timber applications.',
      },
      {
        title: 'Kiln dried S4S spruce',
        image: '/images/products/softwood-card-3.png',
        imageAlt: 'Kiln dried S4S smooth planed spruce timber',
        description:
          'Planed on all four sides for a smooth, consistent finish. Suitable for furniture, interior fittings, and components requiring accurate dimensions.',
      },
    ],
    ctaText: 'Enquire about Softwood Sawn Timber',
    relatedProducts: TIMBER_RELATED.filter(
      (p) => p.href !== '/timber/softwood-sawn-timber'
    ),
  },

  'hardwood-sawn-timber': {
    category: 'Timber',
    categoryHref: '/timber',
    title: 'Hardwood Sawn Timber',
    heroTitle: 'Hardwood \n Sawn Timber',
    subtitle:
      'Oak, beech, and ash in edged or unedged form for furniture, flooring, and joinery.',
    tags: ['Oak', 'Beech', 'Ash'],
    products: [
      {
        title: 'Oak',
        image: '/images/products/hardwood-card-1.png',
        imageAlt: 'Oak hardwood sawn timber planks',
        description:
          'Available for furniture, flooring, joinery, and interior applications.',
      },
      {
        title: 'Beech',
        image: '/images/products/hardwood-card-2.png',
        imageAlt: 'Beech hardwood board surface',
        description:
          'Suitable for furniture, cabinetry, and machined components.',
      },
      {
        title: 'Ash',
        image: '/images/products/hardwood-card-3.png',
        imageAlt: 'Ash hardwood planks with distinct grain',
        description:
          'Used for furniture, flooring, joinery, and other applications where a distinctive grain is desired.',
      },
    ],
    notice:
      'Hardwood can be sourced in edged or unedged form, subject to species and supplier availability.',
    ctaText: 'Enquire about Hardwood Sawn Timber',
    relatedProducts: TIMBER_RELATED.filter(
      (p) => p.href !== '/timber/hardwood-sawn-timber'
    ),
  },

  logs: {
    category: 'Timber',
    categoryHref: '/timber',
    title: 'Logs',
    subtitle:
      'Softwood and hardwood logs for sawmills, veneer production, and further processing.',
    tags: ['Softwood', 'Hardwood', 'Sawmill / veneer'],
    products: [],
    notice:
      'Softwood and hardwood logs can be sourced for sawmills, veneer production, and further processing. Enquiries should specify the species, diameter range, length, grade, and destination.',
    ctaText: 'Enquire about Logs',
    relatedProducts: TIMBER_RELATED.filter((p) => p.href !== '/timber/logs'),
  },

  plywood: {
    category: 'Timber',
    categoryHref: '/timber',
    title: 'Plywood',
    subtitle:
      'Panels for furniture, cabinetry, interiors, packaging, and construction.',
    tags: ['Furniture grade', 'Construction', 'Custom spec'],
    products: [],
    notice:
      'Plywood panels can be sourced for furniture, cabinetry, interiors, packaging, and construction applications. Available specifications may include different thicknesses, sizes, face grades, and core types.',
    ctaText: 'Enquire about Plywood',
    relatedProducts: TIMBER_RELATED.filter((p) => p.href !== '/timber/plywood'),
  },

  veneer: {
    category: 'Timber',
    categoryHref: '/timber',
    title: 'Veneer',
    subtitle:
      'Natural wood veneer for furniture, doors, wall panels, and decorative surfaces.',
    tags: ['Natural veneer', 'Furniture', 'Decorative'],
    products: [],
    notice:
      'Natural wood veneer can be sourced for furniture, doors, wall panels, and decorative surfaces. Species, cut, thickness, and grading can be matched to project requirements.',
    ctaText: 'Enquire about Veneer',
    relatedProducts: TIMBER_RELATED.filter((p) => p.href !== '/timber/veneer'),
  },
};
