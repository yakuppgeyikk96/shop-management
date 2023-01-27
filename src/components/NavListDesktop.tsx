import {FC, PropsWithChildren, ReactElement} from "react";
import Link from "next/link";
import {navbarItems} from "@/constants/routes";
import {NavbarItem} from "@/constants/types";

const NavListDesktop: FC<PropsWithChildren> = (): ReactElement => {
  return (
    <ul className="flex gap-8 flex-1 justify-center items-center">
      {
        navbarItems.map((item: NavbarItem) => (
          <li key={item.index}
          >
            <Link href={item.link}
              className="hover:text-red-400 font-semibold"
            >
              {item.title}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default NavListDesktop;
