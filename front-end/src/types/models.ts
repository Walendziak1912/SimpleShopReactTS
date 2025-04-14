export interface Product {
  id: number;
  gender: string;
  category: string;
  subcategory: string;
  productName: string;
  brand: string;
  pricePLN: number;
  priceUSD: number;
  photos: string[];
  description: string;
  maintenanceInfo: string;
}

export interface CategoryItem {
  categoryName: string;
  path: string;
  subcategories?: CategoryItem[];
}

export interface ProductListResponse {
  products: Product[];
  numberOfPages: number;
}

export interface GenderData {
  bestsellers: Product[];
  heroImageUrl: string;
  description?: string;
  maintenanceInfo?: string;
}

export interface FavouriteItem {
  productId: number;
  id: number;
}

export interface Currency {
  USD: string;
  PLN: string;
}
