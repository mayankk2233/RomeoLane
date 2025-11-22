export interface MenuItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price?: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
}