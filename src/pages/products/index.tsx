import {NextPageWithLayout} from "@/pages/_app";
import {ReactElement} from "react";
import SidebarLayout from "@/components/SidebarLayout";

const Products: NextPageWithLayout = () => {
  return <h2>Products</h2>;
}

Products.getLayout = function getLayout(page: ReactElement) {
  return (
    <SidebarLayout>
      {page}
    </SidebarLayout>
  )
}

export default Products;
