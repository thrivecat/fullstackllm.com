
export interface Model {
  id: string;
  name: string;
  parameters: string;
  context: string;
  useCase: string;
  speed: number; // 1-5 scale
  costTier: string;
  description: string;
  strengths: string[];
  performance: {
    tps: string;
    contextWindow: string;
  };
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  setupFee: string;
  models: string[];
  features: string[];
  highlighted?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
