import {productsSidebarItems} from "@/constants/routes";
import {NavbarItem} from "@/constants/types";


export const findSidebarNavIndex = (route: string, sidebarItems: NavbarItem[]): number => {
  let activeIndex = 0;

  sidebarItems.forEach((sidebarItem) => {
    if (route === sidebarItem.link) {
      activeIndex = sidebarItem.index;
    }
  });

  return activeIndex;
}

export const findSidebarItems = (route: string): NavbarItem[] => {
  let sidebarItems: NavbarItem[] = [];

  if (route.includes('/products')) {
    sidebarItems = productsSidebarItems;
  }

  return sidebarItems;
}
