import {NextPageWithLayout} from "@/pages/_app";
import {ReactElement} from "react";
import SidebarLayout from "@/components/SidebarLayout";


const Orders: NextPageWithLayout = () => {
  return <h2>Orders</h2>;
}

Orders.getLayout = function getLayout(page: ReactElement) {
  return (
    <SidebarLayout>
      {page}
    </SidebarLayout>
  )
}

export default Orders;
