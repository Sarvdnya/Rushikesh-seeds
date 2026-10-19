import aboutImage from '../assets/images/about.jpg';
import cottonImage from '../assets/images/introduction-cotton.jpg';
import indiaMap from '../assets/images/india-map.svg';
import distributionImage from '../assets/images/offering-distribution.jpg';
import farmerCtaImage from '../assets/images/farmer-cta.jpg';
import farmerSupportImage from '../assets/images/offering-farmer-support.jpg';
import fieldCropImage from '../assets/images/offering-field-crop.jpg';
import heroImage from '../assets/images/hero.jpg';
import packagingImage from '../assets/images/offering-packaging.jpg';
import productionImage from '../assets/images/offering-production.jpg';
import vegetableImage from '../assets/images/offering-vegetable.jpg';
import worldMap from '../assets/images/world-map.svg';

export const images = {
  hero: heroImage,
  about: aboutImage,
  farmerCta: farmerCtaImage,
  vegetable: vegetableImage,
  fieldCrop: fieldCropImage,
  production: productionImage,
  packaging: packagingImage,
  farmerSupport: farmerSupportImage,
  distribution: distributionImage,
  cotton: cottonImage,
  worldMap,
  indiaMap,
};

export const company = {
  name: 'Rushikesh Seeds',
  legalName: 'Rushikesh Seeds Jalna',
  tagline: 'Quality, Purity & Performance in Every Seed',
  establishedYear: 2022,
  city: 'Jalna',
  state: 'Maharashtra',
  country: 'India',
  shortIntro:
    'Rushikesh Seeds is an emerging agricultural seed company established in 2022 and headquartered in Jalna, Maharashtra, focused on the manufacturing, processing and packaging of quality vegetable and field crop seeds.',
  footerIntro:
    'A young, quality-focused seed company from Jalna, Maharashtra — working on vegetable and field crop seeds, careful processing, dependable packaging and closer support for farmers.',
  phone: {
    display: '+91 74472 99519',
    tel: '+917447299519',
  },
  email: 'rushikeshseeds2022@gmail.com',
  address: {
    line1: 'Kailash Vidhya Residency, Mahalaxmi Nagar',
    line2: 'Mantha Chowfully, Jalna – 431203',
    line3: 'Maharashtra, India',
    full: 'Kailash Vidhya Residency, Mahalaxmi Nagar, Mantha Chowfully, Jalna – 431203, Maharashtra, India',
  },
  mission:
    'To provide high-quality seeds with advanced farming solutions that help farmers improve productivity and achieve sustainable agricultural growth.',
  vision:
    'To become a trusted and leading seed company by delivering innovative, reliable, and quality agricultural products to farmers.',
};

export function mapLink(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Solutions', href: '#seeds' },
  { label: 'Quality', href: '#offerings' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export type Offering = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

export const offerings: Offering[] = [
  {
    id: 'vegetable-seeds',
    title: 'Vegetable Seeds',
    description:
      'Quality vegetable seeds developed to meet the requirements of modern farming practices, with attention to purity and consistent field performance.',
    image: images.vegetable,
    alt: 'Rows of healthy vegetable plants growing in a cultivated garden',
    href: '#offerings',
  },
  {
    id: 'field-crop-seeds',
    title: 'Field Crop Seeds',
    description:
      'Field crop seeds prepared for dependable performance across seasons, supporting the day-to-day needs of farmers and farming communities.',
    image: images.fieldCrop,
    alt: 'Ripening field crop ready for harvest under an open sky',
    href: '#offerings',
  },
  {
    id: 'seed-production',
    title: 'Seed Production & Processing',
    description:
      'Scientific seed production, cleaning, grading and processing carried out with quality-focused controls for consistent seed quality.',
    image: images.production,
    alt: 'A hand holding freshly harvested seeds above green foliage',
    href: '#offerings',
  },
  {
    id: 'packaging',
    title: 'Packaging Solutions',
    description:
      'Quality packaging that protects seed condition, supports safe storage and helps seeds stay reliable until they reach the farmer.',
    image: images.packaging,
    alt: 'Stacked sacks of grain in a busy Indian agricultural market',
    href: '#offerings',
  },
  {
    id: 'farmer-support',
    title: 'Farmer Support & Guidance',
    description:
      'Crop guidance and quality seeds shared with farmers to support better farming decisions and stronger productivity on the ground.',
    image: images.farmerSupport,
    alt: 'Farmers working together in a field in Gujarat, India',
    href: '#contact',
  },
  {
    id: 'distribution',
    title: 'Distribution Network',
    description:
      'A growing dealer and distributor network built to keep seeds available on time across different regions and seasons.',
    image: images.distribution,
    alt: 'Labourers unloading fresh produce from trucks at an Indian market',
    href: '#contact',
  },
];

export type WhyItem = {
  title: string;
  description: string;
  icon: 'sprout' | 'check' | 'users' | 'package';
};

export const whyChoose: WhyItem[] = [
  {
    title: 'Quality-Focused Seed Production',
    description:
      'Attention stays on producing premium vegetable and field crop seeds — with care for germination, genetic purity and dependable performance in the field.',
    icon: 'sprout',
  },
  {
    title: 'Processing & Quality Control',
    description:
      'Scientific seed processing, grading and testing practices are followed to keep quality consistent and give crops a reliable start.',
    icon: 'check',
  },
  {
    title: 'Farmer-Centric Solutions',
    description:
      'Quality seeds, guidance and practical support are shared with farmers so they can improve productivity and achieve better farming outcomes.',
    icon: 'users',
  },
  {
    title: 'Reliable Packaging & Distribution',
    description:
      'Packaging and distribution are planned to protect seeds in storage, preserve shelf life and support timely availability across regions.',
    icon: 'package',
  },
];

export type Challenge = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: 'shield-check' | 'users' | 'truck' | 'calendar-range';
};

export const challenges: Challenge[] = [
  {
    id: 'seed-quality',
    number: '01',
    title: 'Maintaining Seed Quality & Genetic Purity',
    description:
      'Ensuring consistent quality, high germination rates, and genetic purity during seed processing and packaging is a major challenge. Strict quality control is required to maintain farmer trust and product reliability.',
    icon: 'shield-check',
  },
  {
    id: 'farmer-reach',
    number: '02',
    title: 'Building Strong Farmer Reach & Market Awareness',
    description:
      'Reaching farmers across rural and semi-urban regions requires effective awareness programs, dealer networks, and market expansion strategies to increase adoption of quality seeds.',
    icon: 'users',
  },
  {
    id: 'distribution',
    number: '03',
    title: 'Efficient Distribution & Supply Chain Management',
    description:
      'Managing timely availability of seeds across different locations while handling seasonal demand fluctuations, storage requirements, and logistics challenges is essential for smooth operations.',
    icon: 'truck',
  },
  {
    id: 'seasonal-demand',
    number: '04',
    title: 'Seasonal Demand & Inventory Management',
    description:
      'Seed demand varies according to crop cycles and seasons. Maintaining adequate inventory while avoiding wastage and ensuring timely supply remains a key operational challenge.',
    icon: 'calendar-range',
  },
];

export type Solution = {
  id: string;
  title: string;
  description: string;
  icon: 'settings' | 'handshake' | 'truck' | 'shield-check' | 'package-check';
};

export const solutions: Solution[] = [
  {
    id: 'seed-production',
    title: 'High-Quality Seed Production & Processing',
    description:
      'Quality-focused seed production and processing for purity, germination, and consistent performance.',
    icon: 'settings',
  },
  {
    id: 'farmer-partnerships',
    title: 'Farmer-Centric Approach & Strong Partnerships',
    description: 'Supporting farmers through quality seeds, agricultural guidance, and trusted partnerships.',
    icon: 'handshake',
  },
  {
    id: 'dealer-network',
    title: 'Strong Dealer & Distribution Network',
    description: 'Expanding dealer networks to improve seed availability and access for farmers.',
    icon: 'truck',
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance & Seed Purity Control',
    description: 'Quality checks and testing to maintain seed purity, reliability, and industry compliance.',
    icon: 'shield-check',
  },
  {
    id: 'packaging-storage',
    title: 'Modern Packaging & Safe Storage',
    description: 'Protective packaging and proper storage to preserve seed quality during transport and storage.',
    icon: 'package-check',
  },
];

export type OfferingStep = {
  number: string;
  title: string;
  description: string;
};

export const offeringTimeline: OfferingStep[] = [
  {
    number: '01',
    title: 'Quality Seeds',
    description: 'Quality vegetable and field crop seeds focused on germination, purity, and performance.',
  },
  {
    number: '02',
    title: 'Seed Production & Processing',
    description: 'Scientific production, cleaning, grading, and processing for consistent seed quality.',
  },
  {
    number: '03',
    title: 'Packaging Solutions',
    description: 'Protective packaging for safe storage and extended seed shelf life.',
  },
  {
    number: '04',
    title: 'Farmer Support & Guidance',
    description: 'Agricultural guidance and quality seeds to support farmer productivity.',
  },
  {
    number: '05',
    title: 'Wide Distribution Network',
    description: 'Dealer and distributor networks for timely seed availability across regions.',
  },
];

export const valueAdded: string[] = [
  'High Germination & Seed Purity',
  'Improved Crop Productivity',
  'Trusted Quality Agricultural Inputs',
  'Better Farmer Satisfaction',
  'Sustainable Agricultural Growth',
];

export const expertise: string[] = [
  'Seed Production & Processing',
  'Quality Control & Testing',
  'Modern Packaging Practices',
  'Farmer-Centric Approach',
  'Reliable & Scalable Operations',
];

export type Usp = {
  id: string;
  title: string;
  description: string;
  icon: 'sprout' | 'settings' | 'users-round' | 'package-check';
};

export const usps: Usp[] = [
  {
    id: 'seed-production',
    title: 'High-Quality Seed Production',
    description:
      'Focus on producing premium vegetable and field crop seeds with high germination rate, genetic purity, and reliable performance.',
    icon: 'sprout',
  },
  {
    id: 'processing-quality',
    title: 'Advanced Processing & Quality Control',
    description:
      'Scientific seed processing, grading, and testing practices ensure consistent quality and better crop results.',
    icon: 'settings',
  },
  {
    id: 'farmer-centric',
    title: 'Farmer-Centric Solutions',
    description:
      'Providing quality seeds, guidance, and support to help farmers improve productivity and achieve better yields.',
    icon: 'users-round',
  },
  {
    id: 'packaging-distribution',
    title: 'Reliable Packaging & Distribution',
    description:
      'Efficient packaging and distribution systems ensure safe storage, longer shelf life, and timely availability of seeds.',
    icon: 'package-check',
  },
];

export type MarketStat = {
  value: string;
  label: string;
};

export type MarketPanel = {
  id: string;
  title: string;
  text: string;
  stats: MarketStat[];
};

export const marketSize = {
  note: 'Figures as stated in the company source document.',
  global: {
    id: 'global-market',
    title: 'Global Market',
    text: 'The seeds market size has grown strongly in recent years. It will grow from $74.13 billion in 2025 to $78.44 billion in 2026 at a compound annual growth rate (CAGR) of 5.8%.',
    stats: [
      { value: '$74.13 B', label: '2025' },
      { value: '$78.44 B', label: '2026' },
      { value: '5.8%', label: 'CAGR' },
    ],
  } satisfies MarketPanel,
  india: {
    id: 'india-market',
    title: 'India Market',
    text: 'The seed industry in India was valued at USD 8.6 Billion in 2025 and is projected to reach USD 20.2 Billion by 2034, exhibiting a compound annual growth rate of 9.68% during the forecast period 2026-2034.',
    stats: [
      { value: 'USD 8.6 B', label: '2025' },
      { value: 'USD 20.2 B', label: '2034' },
      { value: '9.68%', label: 'CAGR' },
    ],
  } satisfies MarketPanel,
};

export type Competitor = {
  name: string;
  productRange: string;
  marketPresence: string;
  keyStrengths: string;
  advantage: string;
};

export const competitors: Competitor[] = [
  {
    name: 'Mahyco Seeds',
    productRange: 'Vegetable & field crop seeds',
    marketPresence: 'Pan India',
    keyStrengths: 'Strong R&D and brand reputation',
    advantage: 'Advanced hybrid seed varieties',
  },
  {
    name: 'Namdhari Seeds',
    productRange: 'Vegetable seeds',
    marketPresence: 'National & International',
    keyStrengths: 'Expertise in vegetable seed breeding',
    advantage: 'High-quality vegetable seed solutions',
  },
  {
    name: 'Rasi Seeds',
    productRange: 'Field crops & hybrid seeds',
    marketPresence: 'Pan India',
    keyStrengths: 'Strong farmer network',
    advantage: 'Reliable crop productivity solutions',
  },
  {
    name: 'Advanta Seeds',
    productRange: 'Hybrid seeds & crop solutions',
    marketPresence: 'Global presence',
    keyStrengths: 'Research-driven seed development',
    advantage: 'Innovative seed technology',
  },
  {
    name: 'JK Agri Genetics',
    productRange: 'Vegetable & agricultural seeds',
    marketPresence: 'India-wide',
    keyStrengths: 'Quality-focused seed portfolio',
    advantage: 'Strong product diversification',
  },
];

export type RevenueStream = {
  id: string;
  title: string;
  description: string;
  icon: 'sprout' | 'truck' | 'handshake' | 'package-check';
};

export const revenueStreams: RevenueStream[] = [
  {
    id: 'quality-seed-sales',
    title: 'Quality Seed Sales',
    description:
      'Core revenue generated through the sale of high-quality vegetable seeds and field crop seeds to farmers, dealers, and distributors.',
    icon: 'sprout',
  },
  {
    id: 'bulk-orders-distribution',
    title: 'Bulk Orders & Distribution',
    description:
      'Revenue from bulk supply of seeds to dealers, distributors, agricultural networks, and farming communities across different regions.',
    icon: 'truck',
  },
  {
    id: 'value-added-services',
    title: 'Value-Added Services',
    description:
      'Additional revenue through farmer support, crop guidance, and customized agricultural solutions to improve productivity.',
    icon: 'handshake',
  },
  {
    id: 'processing-packaging-services',
    title: 'Seed Processing & Packaging Services',
    description:
      'Income generated through seed cleaning, grading, processing, and packaging services while maintaining quality and purity standards.',
    icon: 'package-check',
  },
];

export const revenueStatement =
  'A balanced revenue model combining quality seed sales, distribution expansion, processing services, and farmer-focused solutions to achieve sustainable growth and profitability.';

export type GoToMarketStrategy = {
  id: string;
  title: string;
  core: string;
  enablers: string;
  icon: 'megaphone' | 'handshake' | 'heart-handshake';
};

export const goToMarket: GoToMarketStrategy[] = [
  {
    id: 'brand-awareness',
    title: 'Brand Awareness Campaigns',
    core: 'Promote quality seeds through digital marketing and farmer outreach programs.',
    enablers: 'Use social media, farm events, and local networks to increase brand awareness.',
    icon: 'megaphone',
  },
  {
    id: 'strategic-partnerships',
    title: 'Strategic Partnerships',
    core: 'Partner with dealers, distributors, and agricultural networks for market expansion.',
    enablers: 'Collaborate with agri-organizations to ensure quality and reliable supply.',
    icon: 'handshake',
  },
  {
    id: 'customer-acquisition-retention',
    title: 'Customer Acquisition & Retention',
    core: 'Provide quality seeds, timely supply, and farmer support for long-term relationships.',
    enablers: 'Focus on customer service, easy availability, and consistent product quality.',
    icon: 'heart-handshake',
  },
];

export type GrowthMilestone = {
  number: string;
  title: string;
  description: string;
  icon: 'chart-no-axes-combined' | 'trending-up' | 'settings' | 'factory';
};

export const growthMilestones: GrowthMilestone[] = [
  {
    number: '01',
    title: 'Market Expansion',
    description:
      'Expand market presence across India by strengthening dealer networks and reaching more farmers with quality vegetable and field crop seeds.',
    icon: 'chart-no-axes-combined',
  },
  {
    number: '02',
    title: 'Brand & Farmer Growth',
    description:
      'Build a trusted brand through farmer engagement, field demonstrations, awareness programs, and strong customer relationships.',
    icon: 'trending-up',
  },
  {
    number: '03',
    title: 'Processing & Supply Chain Upgrade',
    description:
      'Improve seed processing, grading, packaging, and storage facilities to ensure consistent quality and timely supply.',
    icon: 'settings',
  },
  {
    number: '04',
    title: 'Production Network Growth',
    description:
      'Increase seed production capacity while maintaining high genetic purity, quality standards, and efficient operations through better infrastructure and technology.',
    icon: 'factory',
  },
];

export type FundAllocation = {
  area: string;
  value: number;
  color: string;
};

export const fundUtilization = {
  chartTitle: 'Nidhi SSS',
  total: 100,
  allocations: [
    { area: 'Seed Production & Procurement', value: 30, color: '#173f2b' },
    { area: 'Processing & Packaging Infrastructure', value: 25, color: '#287a43' },
    { area: 'Marketing & Brand Expansion', value: 15, color: '#79b84a' },
    { area: 'Distribution & Supply Chain Development', value: 20, color: '#2f8f7f' },
    { area: 'Working Capital & Operations', value: 10, color: '#e2491f' },
  ] as FundAllocation[],
};

export type QualityStep = {
  title: string;
  description: string;
};

export const qualitySteps: QualityStep[] = [
  {
    title: 'Seed Production & Selection',
    description:
      'Seed lots begin with quality-focused production and careful selection — the foundation of every batch that carries the company name.',
  },
  {
    title: 'Cleaning, Grading & Processing',
    description:
      'Seeds are cleaned, graded and processed to remove impurities and build a uniform, consistent seed lot ready for the season.',
  },
  {
    title: 'Quality Checks & Purity Verification',
    description:
      'Batches move through quality checks and verification steps intended to maintain purity, consistency and reliability.',
  },
  {
    title: 'Packaging & Safe Storage',
    description:
      'Processed seeds are packed and stored with proper methods that protect seed condition until the lot is dispatched.',
  },
  {
    title: 'Distribution',
    description:
      'Seeds travel through the dealer and distributor network so they reach farmers across regions in time for sowing.',
  },
];

export const leadership = {
  name: 'Mr. Ajit Anil Khot',
  role: 'Director',
  initials: 'AK',
  credentials: ['Master’s in Genetics & Plant Breeding', '5 years in the seed industry'],
  bio: [
    'Ajit Anil Khot holds a Master’s degree in Genetics and Plant Breeding, bringing strong technical knowledge of seed science, crop improvement and agricultural practices — expertise that supports the development and management of quality seed production processes.',
    'With five years of experience in the seed industry, he has gained practical exposure to seed production, processing, quality management and agricultural operations, work that contributes to maintaining seed quality, improving productivity and implementing efficient farming solutions.',
    'As a key member of Rushikesh Seeds, he helps drive business growth through technical expertise, quality-focused practices and farmer-centric approaches — strengthening the company’s vision of delivering reliable vegetable and field crop seeds to farmers.',
  ],
};

export type SocialPlatform = {
  id: 'instagram' | 'facebook' | 'youtube';
  label: string;
  /**
   * Official profile URL. Leave empty ('') until the company's verified profile
   * is confirmed — empty links are rendered as non-clickable placeholders so the
   * site never points visitors to a profile that does not exist.
   */
  url: string;
};

export const socials: SocialPlatform[] = [
  { id: 'instagram', label: 'Instagram', url: '' },
  { id: 'facebook', label: 'Facebook', url: '' },
  { id: 'youtube', label: 'YouTube', url: '' },
];
