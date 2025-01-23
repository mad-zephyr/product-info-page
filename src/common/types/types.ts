export interface Root {
  data: Product[];
}

export interface Product {
  product_id: string;
  name: string;
  description: string;
  category: Category;
  collection: Collection;
  created_at: string;
  colors: string[];
  images: TImage[];
  inventory: Inventory[];
  priceRange: PriceRange;
  rating: number;
  reviews: number;
  sizes: number[];
  sold: number;
}

export interface Category {
  category_id: string;
  name: string;
  created_at: string;
}

export interface Collection {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
}

export interface TImage {
  color: string;
  image_url: string;
}

export interface Inventory {
  sku: string;
  color: string;
  size: number;
  list_price: number;
  discount: any;
  discount_percentage: number;
  sale_price: number;
  sold: number;
  stock: number;
}

export interface PriceRange {
  highest: number;
  lowest: number;
}
