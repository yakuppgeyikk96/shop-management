import {FC, PropsWithChildren, ReactElement} from "react";
import Navbar from "@/components/Navbar";

const Layout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout;
