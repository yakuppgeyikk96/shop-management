import {FC, PropsWithChildren, ReactElement} from "react";

const SidebarLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <div className="flex">
      <div className="w-60">
        Sidebar
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}

export default SidebarLayout;
