export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Video' | 'Photo' | 'Design' | 'Collaborations';
  image: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface CreativeConceptResponse {
  conceptTitle: string;
  moodDescription: string;
  suggestedElements: string[];
}