
export type Rarity = 'Mythical' | 'Legendary' | 'Epic' | 'Rare' | 'Common';
export type Category = 'Fruits' | 'Items' | 'Weapons' | 'Armor' | 'Accessories' | 'Baits';
export type Group = 'Mythical' | 'Legendary' | 'None';

export interface User {
  id: string;
  name: string;
  email: string;
  purchases: number;
  avatar: string;
}

export interface GPOItem {
  id: string;
  name: string;
  rarity: Rarity;
  category: Category;
  group?: Group;
  description?: string;
  stats?: string[];
  price: number;
  originalPrice?: number; // Preço original antes do desconto
  imageUrl?: string;
  stock: number;
}

export interface CartItem extends GPOItem {
  quantity: number;
}

export interface Feedback {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  purchasedItem?: string;
}
