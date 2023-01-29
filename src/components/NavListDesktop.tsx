import {FC, PropsWithChildren, ReactElement, useCallback, useEffect, useState} from "react";
import Link from "next/link";
import {navbarItems} from "@/constants/routes";
import {NavbarItem} from "@/constants/types";
import {NextRouter, useRouter} from "next/router";
import findNavIndex from "@/utils/findNavIndex";

const NavListDesktop: FC<PropsWithChildren> = (): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router: NextRouter = useRouter();

  const findCurrentNavIndex = () => {
    const currentNavIndex = findNavIndex(navbarItems, router);
    setActiveIndex(currentNavIndex);
  }

  useEffect(() => {
    findCurrentNavIndex();
  }, [router.asPath])

  return (
    <ul className="flex gap-8 flex-1 justify-center items-center">
      {
        navbarItems.map((item: NavbarItem) => (
          <li key={item.index}
          >
            <Link href={item.link}
              className={`hover:text-primaryColor font-semibold ${item.index === activeIndex ? 'text-primaryColor': ''}`}
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
