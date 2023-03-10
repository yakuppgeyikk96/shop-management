import Category from "@/models/category.model";
import Price from "@/models/currency.model";
import Currency from "@/models/currency.model";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: {value: number; unit: string};
  category: string;
  image: string;
  ingredients: string[];
}

export const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Title-1',
    description: 'Description-1',
    price: {
      value: 45,
      unit: 'TRY'
    },
    category: '0',
    image: 'food1',
    ingredients: []
  },
  {
    id: 2,
    title: 'Title-2',
    description: 'Description-2',
    price: {
      value: 55,
      unit: 'TRY'
    },
    category: '0',
    image: 'food2',
    ingredients: []
  },
  {
    id: 3,
    title: 'Title-3',
    description: 'Description-3',
    price: {
      value: 65,
      unit: 'TRY'
    },
    category: '1',
    image: 'food3',
    ingredients: []
  },
  {
    id: 4,
    title: 'Title-4',
    description: 'Description-4',
    price: {
      value: 92,
      unit: 'TRY'
    },
    category: '0',
    image: 'food4',
    ingredients: []
  },
];


export const mockCategories: Category[] = [
  { id: 0, title: "Main Meal" },
  { id: 1, title: "Dessert" },
  { id: 2, title: "Starter" },
  { id: 3, title: "Breakfast" },
];

export const mockCurrencies: Currency[] = [
  { id: 1, currency: "TRY", code: 1 },
  { id: 1, currency: "USD", code: 2 },
];
