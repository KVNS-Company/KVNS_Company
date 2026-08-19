export interface ProductInfo {
  id: 'cotton-seeds' | 'sesame-seeds';
  number: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  packaging: string;
  imageSrc: string;
  accentColor: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface StatItem {
  value: string;
  numericTarget?: number;
  label: string;
  sublabel: string;
  prefix?: string;
  suffix?: string;
}

export interface PrincipleItem {
  title: string;
  tagline: string;
  description: string;
}

export interface LegacyMilestone {
  era: string;
  title: string;
  description: string;
  highlight?: boolean;
}

