import {NavbarItem} from "@/constants/types";

export const navbarItems: NavbarItem[] = [
  { index: 1, title: 'Home', link: '/' },
  { index: 2, title: 'Products', link: '/products' },
  { index: 3, title: 'Orders', link: '/orders' },
  { index: 4, title: 'Employees', link: '/employees' },
  { index: 5, title: 'Finance', link: '/finance' }
];

export const productsSidebarItems: NavbarItem[] = [
  { index: 1, title: 'Product List', link: '/products' },
  { index: 2, title: 'Create Product', link: '/products/create-product' },
];
