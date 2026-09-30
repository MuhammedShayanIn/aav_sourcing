import type { ProductDetailPageProps } from '@/components/ProductDetailPage';

/* ─── Shared Related Products ─── */
const TEXTILE_RELATED = [
  {
    title: 'Bedding',
    image: '/images/products/cat-bedding.png',
    imageAlt: 'Complete bedding sets crafted in a range of fabrics and finishes',
    href: '/textile/bedding',
  },
  {
    title: 'Bed Sheets',
    image: '/images/products/cat-bedsheets.png',
    imageAlt: 'Fitted and flat sheets tailored to your specification',
    href: '/textile/bed-sheets',
  },
  {
    title: 'Fabrics',
    image: '/images/products/cat-fabrics.png',
    imageAlt: 'Greige, dyed, and finished fabrics sourced to technical specifications',
    href: '/textile/fabrics',
  },
  {
    title: 'Garments',
    image: '/images/products/cat-garments.png',
    imageAlt: 'Apparel sourcing for OEM and private-label orders',
    href: '/textile/garments',
  },
  {
    title: 'Towels',
    image: '/images/products/cat-towels.png',
    imageAlt: 'Premium terry towels for retail, hospitality, and institutional use',
    href: '/textile/towels',
  },
  {
    title: 'Baby Textiles',
    image: '/images/products/cat-baby.png',
    imageAlt: 'Soft, safe textiles designed for baby comfort and care',
    href: '/textile/baby-textiles',
  },
  {
    title: 'Yarns',
    image: '/images/products/cat-yarns.png',
    imageAlt: 'A wide range of yarns across counts and blends',
    href: '/textile/yarns',
  },
  {
    title: 'Institutional Textiles',
    image: '/images/products/cat-institutional.png',
    imageAlt: 'Reliable textiles for hospitality, healthcare, and institutional needs',
    href: '/textile/institutional-textiles',
  },
];

const TIMBER_RELATED = [
  {
    title: 'Softwood Sawn Timber',
    image: '/images/products/timber-card-softwood.png',
    imageAlt: 'Kiln dried softwood sawn timber planks',
    href: '/timber/softwood-sawn-timber',
  },
  {
    title: 'Hardwood Sawn Timber',
    image: '/images/products/timber-card-hardwood.png',
    imageAlt: 'Kiln dried hardwood sawn timber',
    href: '/timber/hardwood-sawn-timber',
  },
  {
    title: 'Plywood',
    image: '/images/products/timber-card-plywood.png',
    imageAlt: 'Sheets of plywood stacked at a warehouse',
    href: '/timber/plywood',
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
        image: '/images/products/towel-bath.png',
        imageAlt: 'Stacked white bath towels',
      },
      {
        title: 'Hand towels',
        image: '/images/products/towel-hand.png',
        imageAlt: 'Folded hand towels near plants',
      },
      {
        title: 'Kitchen towels',
        image: '/images/products/towel-kitchen.png',
        imageAlt: 'Kitchen textile accessories',
      },
      {
        title: 'Bar mops',
        image: '/images/products/towel-barmops.png',
        imageAlt: 'White ribbed bar mops with blue center stripe',
      },
      {
        title: 'Zero twist towels',
        image: '/images/products/towel-zerotwist.png',
        imageAlt: 'Soft fluffy towels stacked',
      },
      {
        title: 'Baby bath towels',
        image: '/images/products/towel-baby.png',
        imageAlt: 'Tan folded hooded baby bath towel with ears',
      },
      {
        title: 'Jacquard towels',
        image: '/images/products/towel-jacquard.png',
        imageAlt: 'Navy jacquard patterned woven towels',
      },
      {
        title: 'Beach towels',
        image: '/images/products/towel-beach.png',
        imageAlt: 'Plush peach and tan beach towels',
      },
      {
        title: 'Cabana towels',
        image: '/images/products/towel-cabana.png',
        imageAlt: 'Navy and white striped cabana pool towels',
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
    tags: ['Cotton', 'Flannel', 'Sateen / percale'],
    products: [
      {
        title: 'Bedding sets',
        image: '/images/products/bedding-image-bedding-sets.png',
        imageAlt: 'Bedding sets — white bed with pillow set',
      },
      {
        title: 'Jersey bedding sets',
        image: '/images/products/bedding-image-jersey.png',
        imageAlt: 'Jersey bedding sets — hotel bed with white jersey linen',
      },
      {
        title: 'Flannel bedding sets',
        image: '/images/products/bedding-image-flannel.png',
        imageAlt: 'Flannel bedding sets — cozy flannel textile on couch',
      },
      {
        title: 'Cotton bedding sets',
        image: '/images/products/bedding-image-cotton.png',
        imageAlt: 'Cotton bedding sets — white cotton bed linen',
      },
      {
        title: 'Sateen & percale sets',
        image: '/images/products/bedding-image-sateen.png',
        imageAlt: 'Sateen & percale sets — smooth white sateen duvet',
      },
      {
        title: 'Muslin bedding sets',
        image: '/images/products/bedding-image-muslin.png',
        imageAlt: 'Muslin bedding sets — soft muslin cloth texture',
      },
      {
        title: 'Duvet cover sets',
        image: '/images/products/bedding-image-duvet.png',
        imageAlt: 'Duvet cover sets — white duvet cover on wooden table',
      },
      {
        title: 'Pillows',
        image: '/images/products/bedding-image-pillows.png',
        imageAlt: 'Pillows — quilted white pillow protector',
      },
      {
        title: 'Throws & blankets',
        image: '/images/products/bedding-image-throws.png',
        imageAlt: 'Throws & blankets — throw blanket draped on sofa',
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
    tags: ['Cotton', 'TENCEL™', 'Waterproof laminated'],
    products: [
      {
        title: 'Fitted sheets',
        image: '/images/products/sheet-fitted.png',
        imageAlt: 'Neatly fitted white bed sheet',
      },
      {
        title: 'Muslin fitted sheets',
        image: '/images/products/sheet-muslin.png',
        imageAlt: 'Soft muslin fitted sheet fabric',
      },
      {
        title: 'Jersey / terry / jacquard / molton',
        image: '/images/products/sheet-jersey-terry.png',
        imageAlt: 'Soft jersey bed sheet on mattress',
      },
      {
        title: 'Waterproof laminated Sheets',
        image: '/images/products/sheet-waterproof.png',
        imageAlt: 'Quilted waterproof mattress sheet',
      },
      {
        title: 'Polycotton fitted sheets',
        image: '/images/products/sheet-polycotton.png',
        imageAlt: 'Crisp polycotton bed sheet',
      },
      {
        title: 'TENCEL™ Lyocell fitted sheets',
        image: '/images/products/sheet-tencel.png',
        imageAlt: 'Smooth TENCEL Lyocell bed linen',
      },
      {
        title: 'Stretch jersey bed sheets',
        image: '/images/products/sheet-stretch-jersey.png',
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
        image: '/images/products/fabrics-image-undyed-greige-fabric-rolls.png',
        imageAlt: 'Undyed greige fabric rolls',
      },
      {
        title: 'PU & PVC laminated',
        image: '/images/products/fabrics-image-laminated-waterproof-fabric-surface.png',
        imageAlt: 'Laminated waterproof fabric surface',
      },
      {
        title: 'Printed fabrics',
        image: '/images/products/fabrics-image-colorful-printed-textile-patterns.png',
        imageAlt: 'Colorful printed textile patterns',
      },
      {
        title: 'White & solid dyed',
        image: '/images/products/fabrics-image-white-and-solid-dyed-fabric.png',
        imageAlt: 'White and solid dyed fabric',
      },
      {
        title: 'Pre-washed fabrics',
        image: '/images/products/fabrics-image-washed-garment-fabric-texture.png',
        imageAlt: 'Washed garment fabric texture',
      },
      {
        title: 'Knitted fabrics',
        image: '/images/products/fabrics-image-knitted-fabric-closeup.png',
        imageAlt: 'Knitted fabric closeup',
      },
      {
        title: 'Denim fabrics',
        image: '/images/products/fabrics-image-blue-denim-twill-weave-fabric-closeup.png',
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
    tags: ['Cotton', 'Denim', 'OEM / private label'],
    products: [
      {
        title: 'T-shirts & polo shirts',
        image: '/images/products/garments-image-stacked-white-cotton-t-shirts.png',
        imageAlt: 'Stacked white cotton t-shirts',
      },
      {
        title: 'Hoodies',
        image: '/images/products/garments-image-white-hoodie-and-jeans-hanging-on-rope.png',
        imageAlt: 'White hoodie and jeans hanging on rope',
      },
      {
        title: 'Denim jeans',
        image: '/images/products/garments-image-blue-denim-jeans-fabric-weave.png',
        imageAlt: 'Blue denim jeans fabric weave',
      },
      {
        title: 'Cotton chinos & shorts',
        image: '/images/products/garments-image-cotton-chino-fabric-folded.png',
        imageAlt: 'Cotton chino fabric folded',
      },
      {
        title: 'Under Garments',
        image: '/images/products/garments-image-white-cotton-jersey-fabric.png',
        imageAlt: 'White cotton jersey fabric',
      },
      {
        title: 'Gloves & socks',
        image: '/images/products/garments-image-white-cotton-gloves-pair.png',
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
    tags: ['Muslin', 'Flannel', 'Waterproof'],
    products: [
      {
        title: 'Baby bedding sets',
        image: '/images/products/baby-textiles-image-baby-lying-on-white-bedding.png',
        imageAlt: 'Baby lying on white bedding',
      },
      {
        title: 'Crib & cot fitted sheets',
        image: '/images/products/baby-textiles-image-baby-in-grey-onesie-on-crib-sheet.png',
        imageAlt: 'Baby in grey onesie on crib sheet',
      },
      {
        title: 'Moses basket sheets',
        image: '/images/products/baby-textiles-image-soft-white-muslin-baby-sheet.png',
        imageAlt: 'Soft white muslin baby sheet',
      },
      {
        title: 'Waterproof sheets',
        image: '/images/products/baby-textiles-image-white-waterproof-laminated-sheet.png',
        imageAlt: 'White waterproof laminated sheet',
      },
      {
        title: 'Muslin swaddles',
        image: '/images/products/baby-textiles-image-soft-white-muslin-swaddle.png',
        imageAlt: 'Soft white muslin swaddle',
      },
      {
        title: 'Baby sleeping bags',
        image: '/images/products/baby-textiles-image-infant-in-sleeping-bag.png',
        imageAlt: 'Infant in sleeping bag',
      },
      {
        title: 'Flannel receiving Blankets',
        image: '/images/products/baby-textiles-image-soft-flannel-receiving-blanket.png',
        imageAlt: 'Soft flannel receiving blanket',
      },
      {
        title: 'Burp cloths',
        image: '/images/products/baby-textiles-image-white-muslin-burp-cloth.png',
        imageAlt: 'White muslin burp cloth',
      },
      {
        title: 'Hooded terry towels',
        image: '/images/products/baby-textiles-image-baby-wrapped-in-hooded-terry-towel.png',
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
    tags: ['Cotton', 'Lyocell', 'Mélange / dyed'],
    products: [
      {
        title: 'Cotton yarn (Ne 10s–80s)',
        image: '/images/products/yarns-image-cotton-yarn-spools.png',
        imageAlt: 'Cotton yarn spools',
      },
      {
        title: 'Lyocell yarn',
        image: '/images/products/yarns-image-lyocell-yarn-thread.png',
        imageAlt: 'Lyocell yarn thread',
      },
      {
        title: 'Polyester viscose (PV)',
        image: '/images/products/yarns-image-polyester-viscose-yarn.png',
        imageAlt: 'Polyester viscose yarn',
      },
      {
        title: 'Polyester yarn',
        image: '/images/products/yarns-image-polyester-yarn-spool.png',
        imageAlt: 'Polyester yarn spool',
      },
      {
        title: 'Polyester cotton (PC)',
        image: '/images/products/yarns-image-polyester-cotton-blend-yarn.png',
        imageAlt: 'Polyester cotton blend yarn',
      },
      {
        title: 'Mélange yarn',
        image: '/images/products/yarns-image-m-lange-twisted-yarn.png',
        imageAlt: 'Mélange twisted yarn',
      },
      {
        title: 'Dyed yarn',
        image: '/images/products/yarns-image-dyed-coloured-yarn-spools.png',
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
        image: '/images/products/institutional-textiles-image-white-hotel-bed-linen.png',
        imageAlt: 'Hotel bedding — stacked white folded sheets',
      },
      {
        title: 'Hospital bedding',
        image: '/images/products/institutional-textiles-image-clean-white-hospital-bed.png',
        imageAlt: 'Hospital bedding — clean white hospital bed',
      },
      {
        title: 'Waterproof bedding',
        image: '/images/products/institutional-textiles-image-waterproof-quilted-bedding.png',
        imageAlt: 'Waterproof bedding — waterproof quilted bedding',
      },
      {
        title: 'Patient & medical gowns',
        image: '/images/products/institutional-textiles-image-hospital-bed-and-medical-linen.png',
        imageAlt: 'Patient & medical gowns — hospital linen',
      },
      {
        title: 'Uniforms & institutional clothing',
        image: '/images/products/institutional-textiles-image-folded-institutional-uniforms.png',
        imageAlt: 'Uniforms & institutional clothing — folded garments',
      },
      {
        title: 'Jersey fitted sheets',
        image: '/images/products/institutional-textiles-image-institutional-white-bed-linen.png',
        imageAlt: 'Jersey fitted sheets — white linen',
      },
      {
        title: 'Laundry bags',
        image: '/images/products/institutional-textiles-image-white-institutional-laundry-bag-fabric.png',
        imageAlt: 'Laundry bags — durable institutional fabric',
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
        image: '/images/products/softwood-sawn-timber-image-pine-lumber-planks-stacked-at-a-mill.png',
        imageAlt: 'Pine lumber planks stacked at a mill',
        description:
          'Suitable for furniture components, packaging, joinery, and general manufacturing. Available in buyer specified sizes and grades.',
      },
      {
        title: 'Kiln dried rough sawn spruce',
        image: '/images/products/softwood-sawn-timber-image-spruce-timber-planks-stacked.png',
        imageAlt: 'Spruce timber planks stacked',
        description:
          'A versatile option for construction, furniture frames, packaging, and other timber applications.',
      },
      {
        title: 'Kiln dried S4S spruce',
        image: '/images/products/softwood-sawn-timber-image-smooth-planed-spruce-timber.png',
        imageAlt: 'Smooth planed spruce timber',
        description:
          'Planed on all four sides for a smooth, consistent finish. Suitable for furniture, interior fittings, and components requiring accurate dimensions.',
      },
    ],
    ctaText: 'Enquire about Softwood Sawn Timber',
    relatedProducts: [
      {
        title: 'Hardwood Sawn Timber',
        image: '/images/products/timber-card-hardwood.png',
        imageAlt: 'Quality hardwood timber for furniture, flooring, and joinery',
        href: '/timber/hardwood-sawn-timber',
      },
      {
        title: 'Plywood',
        image: '/images/products/timber-card-plywood.png',
        imageAlt: 'Sheets of plywood stacked at a warehouse',
        href: '/timber/plywood',
      },
    ],
  },

  'hardwood-sawn-timber': {
    category: 'Timber',
    categoryHref: '/timber',
    title: 'Hardwood Sawn Timber',
    heroTitle: 'Hardwood Sawn\nTimber',
    subtitle:
      'Oak, beech, and ash in edged or unedged form for furniture, flooring, and joinery.',
    tags: ['Oak', 'Beech', 'Ash'],
    products: [
      {
        title: 'Oak',
        image: '/images/products/hardwood-sawn-timber-image-oak-wood-grain-surface.png',
        imageAlt: 'Oak wood grain surface',
        description:
          'Available for furniture, flooring, joinery, and interior applications.',
      },
      {
        title: 'Beech',
        image: '/images/products/hardwood-sawn-timber-image-beech-wood-board-surface.png',
        imageAlt: 'Beech wood board surface',
        description:
          'Suitable for furniture, cabinetry, and machined components.',
      },
      {
        title: 'Ash',
        image: '/images/products/hardwood-sawn-timber-image-ash-wood-texture-close-up.png',
        imageAlt: 'Ash wood texture close up',
        description:
          'Used for furniture, flooring, joinery, and other applications where a distinctive grain is desired.',
      },
    ],
    notice:
      'Hardwood can be sourced in edged or unedged form, subject to species and supplier availability.',
    ctaText: 'Enquire about Hardwood Sawn Timber',
    relatedProducts: [
      {
        title: 'Plywood',
        image: '/images/products/timber-card-plywood.png',
        imageAlt: 'Sheets of plywood stacked at a warehouse',
        href: '/timber/plywood',
      },
      {
        title: 'Softwood sawn timber',
        image: '/images/products/timber-card-softwood.png',
        imageAlt: 'Kiln-dried softwood in rough sawn and planed forms',
        href: '/timber/softwood-sawn-timber',
      },
    ],
  },

  plywood: {
    category: 'Timber',
    categoryHref: '/timber',
    title: 'Plywood',
    heroTitle: 'Plywood',
    subtitle:
      'Panels for furniture, cabinetry, interiors, packaging, and construction.',
    tags: ['Furniture grade', 'Construction', 'Custom spec'],
    products: [],
    notice:
      'Plywood panels can be sourced for furniture, cabinetry, interiors, packaging, and construction applications. Available specifications may include different thicknesses, sizes, face grades, and core types.',
    ctaText: 'Enquire about Plywood',
    relatedProducts: [
      {
        title: 'Softwood Sawn Timber',
        image: '/images/products/timber-card-softwood.png',
        imageAlt: 'Kiln-dried softwood in rough sawn and planed forms',
        href: '/timber/softwood-sawn-timber',
      },
      {
        title: 'Hardwood Sawn Timber',
        image: '/images/products/timber-card-hardwood.png',
        imageAlt: 'Quality hardwood for furniture, flooring, and joinery',
        href: '/timber/hardwood-sawn-timber',
      },
    ],
  },
};
