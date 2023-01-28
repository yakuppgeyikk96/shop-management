import {NavbarItem} from "@/constants/types";
import {NextRouter} from "next/router";

export default function findNavIndex(navbarItems: NavbarItem[], router: NextRouter): number {
  let navIndex: number = 0;
  navbarItems.forEach((navItem: NavbarItem) => {
    if (router.asPath.split('/')[1] === navItem.link.split('/')[1]) {
      navIndex = navItem.index;
    }
  });

  return navIndex;
}
