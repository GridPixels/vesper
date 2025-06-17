type PricingItemType = {
  title: string;
  description: string;
  price: number;
  frequency: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
  id: number;
  url: string; 
};

export default PricingItemType;
