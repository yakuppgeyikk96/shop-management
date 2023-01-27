import {FC, PropsWithChildren, ReactElement} from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import NavListDesktop from "@/components/NavListDesktop";

const Navbar: FC<PropsWithChildren> = (): ReactElement => {
  return (
    <nav className="border px-20 h-16 flex justify-between items-center">
      <Link href="/" className="inline-flex h-16 w-16 justify-center items-center">
        <Image src={logo} alt="logo" width={56} />
      </Link>
      <NavListDesktop />
    </nav>
  )
}

export default Navbar;
