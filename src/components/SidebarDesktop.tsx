import {
  FC,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
  useCallback
} from "react";
import {NextRouter, useRouter} from "next/router";
import {findSidebarItems, findSidebarNavIndex} from "@/utils/sidebarUtils";
import {NavbarItem} from "@/constants/types";
import Link from "next/link";

const SidebarDesktop: FC<PropsWithChildren> = (): ReactElement => {
  const [sidebarItems, setSidebarItems] = useState<NavbarItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const router: NextRouter = useRouter();

  const selectSidebarItems = useCallback(() => {
    setSidebarItems(() => findSidebarItems(router.pathname));
  }, [router.pathname]);

  const findCurrentNavIndex = useCallback(() => {
    const currentNavIndex = findSidebarNavIndex(router.pathname, sidebarItems);
    setActiveIndex(currentNavIndex);
  }, [router.pathname, sidebarItems])

  useEffect(() => {
    selectSidebarItems();
    findCurrentNavIndex();
  }, [findCurrentNavIndex, router.pathname, selectSidebarItems])

  useEffect(() => {
    findCurrentNavIndex();
  }, [findCurrentNavIndex, sidebarItems])

  return (
    <ul className="px-8 py-4 flex flex-col gap-4">
      {
        sidebarItems.map((navItem) => (
          <li key={navItem.index}
            className="font-semibold"
          >
            <Link
              href={navItem.link}
              className={`inline-block px-4 py-2 rounded w-full hover:bg-secondaryColor ${navItem.index === activeIndex ? 'text-primaryColor bg-secondaryColor' : ''}`}
            >
              {navItem.title}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default SidebarDesktop;
