import {NextPageWithLayout} from "@/pages/_app";
import {ReactElement} from "react";
import SidebarLayout from "@/components/SidebarLayout";


const Employees: NextPageWithLayout = () => {
  return <h2>Employees</h2>;
}

Employees.getLayout = function getLayout(page: ReactElement) {
  return (
    <SidebarLayout>
      {page}
    </SidebarLayout>
  )
}

export default Employees;
