import {FC, PropsWithChildren, ReactElement} from "react";
import SidebarDesktop from "@/components/SidebarDesktop";

const SidebarLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <div className="flex">
      <div className="w-64 mt-8">
        <SidebarDesktop />
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}

export default SidebarLayout;
