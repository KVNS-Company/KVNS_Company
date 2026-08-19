import { ProductInfo, ProcessStep, StatItem, PrincipleItem, LegacyMilestone } from '../types';
import cottonImg from '../assets/images/cotton_seed_macro_1787152312707.jpg';
import sesameImg from '../assets/images/sesame_seed_macro_1787152325265.jpg';

export const COMPANY_DETAILS = {
  name: 'KVNS Company',
  founder: 'Natarajan Rajesekaran',
  foundedYear: 1997,
  location: 'Virudhunagar, Tamil Nadu, India',
  phone: '94438 73424',
  phoneDisplay: '+91 94438 73424',
  phoneRaw: '919443873424',
  tagline: 'Seed Processing & Wholesale Supply',
  whatsappMessage: 'Hello KVNS Company, I would like to enquire about your wholesale seed products.',
  googleMapsUrl: 'https://maps.app.goo.gl/e2UpHpGZEVAAbVRTA?g_st=ac',
  monthlyVolume: '3,000–5,000 bags',
  annualVolume: '45,000–50,000 bags',
  marketReach: 'South India Wholesale Market',
  sourcingOrigin: 'Gujarat',
  processingHub: 'Virudhunagar, Tamil Nadu',
} as const;

export const PRODUCTS: ProductInfo[] = [
  {
    id: 'cotton-seeds',
    number: '01',
    name: 'Cotton Seeds',
    tagline: 'Precision-processed and graded for industrial & agricultural wholesale supply',
    description:
      'Processed and supplied for wholesale distribution, with attention to cleaning, drying, grading and packing. Sourced directly from premier growing regions in Gujarat and processed in our Virudhunagar facility.',
    details: [
      'Thorough foreign matter extraction & cleaning',
      'Controlled moisture drying for shelf stability',
      'Consistent mechanical grading',
      'Durable sack packaging tailored for bulk transport'
    ],
    packaging: 'High-density wholesale bags / sacks',
    imageSrc: cottonImg,
    accentColor: '#c4d7cc'
  },
  {
    id: 'sesame-seeds',
    number: '02',
    name: 'Sesame Seeds',
    tagline: 'Cleaned, dried, and graded through established processing workflows',
    description:
      'Processed and prepared for wholesale supply through KVNS’s established seed-processing workflow. Sourced from trusted Gujarat agricultural sources and graded for high-standard wholesale buyers.',
    details: [
      'Advanced multi-stage seed cleaning',
      'Even drying & moisture management',
      'Precision size and purity grading',
      'Secure bulk bagging ready for buyer pickup'
    ],
    packaging: 'High-density wholesale bags / sacks',
    imageSrc: sesameImg,
    accentColor: '#e0c58e'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Raw Seed',
    description: 'Raw agricultural seed material sourced directly from Gujarat.',
    detail: 'Carefully received at our Virudhunagar processing facility for intake inspection.',
    iconName: 'Sprout'
  },
  {
    step: '02',
    title: 'Cleaning',
    description: 'Mechanical separation to extract chaff, husk, and extraneous matter.',
    detail: 'Multi-deck seed cleaning machinery ensures pure seed density.',
    iconName: 'Filter'
  },
  {
    step: '03',
    title: 'Drying',
    description: 'Moisture reduction under controlled ambient and processing conditions.',
    detail: 'Stabilizes the seed structure for extended storage and transport durability.',
    iconName: 'Sun'
  },
  {
    step: '04',
    title: 'Grading',
    description: 'Systematic classification by seed size, purity, and quality grade.',
    detail: 'Delivers uniformity according to wholesale buyer specifications.',
    iconName: 'Layers'
  },
  {
    step: '05',
    title: 'Packing',
    description: 'Standardized filling into robust, tear-resistant wholesale sacks.',
    detail: 'Sealed and labeled for secure handling and transit across South India.',
    iconName: 'Package'
  },
  {
    step: '06',
    title: 'Storage',
    description: 'Organized warehousing in well-ventilated dry storage bays.',
    detail: 'Maintains optimal quality while awaiting scheduled pickup.',
    iconName: 'Warehouse'
  },
  {
    step: '07',
    title: 'Buyer Pickup',
    description: 'Seamless dispatch coordination for wholesale buyer transport.',
    detail: 'Buyers arrange logistics for direct loading from our Virudhunagar facility.',
    iconName: 'Truck'
  }
];


export const STATS: StatItem[] = [
  {
    value: '1997',
    label: 'Established Year',
    sublabel: 'Formally founded in Virudhunagar'
  },
  {
    value: '3,000–5,000',
    label: 'Bags Per Month',
    sublabel: 'Approximate wholesale output'
  },
  {
    value: '45,000–50,000',
    label: 'Bags Per Year',
    sublabel: 'Annual processing capacity'
  },
  {
    value: 'South India',
    label: 'Market Reach',
    sublabel: 'Wholesale supply network'
  }
];

export const PRINCIPLES: PrincipleItem[] = [
  {
    title: 'QUALITY',
    tagline: 'Uncompromising standard',
    description: 'Careful processing from raw seed to packed product, ensuring clean, high-grade commodity supply.'
  },
  {
    title: 'CONSISTENCY',
    tagline: 'Dependable wholesale scale',
    description: 'A structured processing workflow designed for dependable wholesale supply month after month.'
  },
  {
    title: 'EXPERIENCE',
    tagline: 'Deep generational discipline',
    description: 'Generations of knowledge in the seed business, combined with decades of formal operational mastery.'
  },
  {
    title: 'PRECISION',
    tagline: 'Detail at every step',
    description: 'Attention to processing, grading, packing and order handling tailored for discerning bulk buyers.'
  }
];

export const LEGACY_MILESTONES: LegacyMilestone[] = [
  {
    era: 'Generations Past',
    title: 'Family Seed Heritage',
    description: 'Generations of family experience laid the core foundation, discipline, and practical knowledge in the seed business.'
  },
  {
    era: '1997',
    title: 'KVNS Company Established',
    description: 'Formally founded in Virudhunagar by Natarajan Rajesekaran to establish dedicated processing and wholesale operations.',
    highlight: true
  },
  {
    era: 'Operational Growth',
    title: 'Facility Expansion & Machineries',
    description: 'Invested in specialized seed-processing machinery, standardizing cleaning, drying, and grading workflows.'
  },
  {
    era: 'Present Day',
    title: 'Modern Wholesale Hub',
    description: 'Supplying 45,000–50,000 bags annually to wholesale buyers across South India with unwavering reliability.',
    highlight: true
  }
];
