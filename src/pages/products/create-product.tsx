import {NextPageWithLayout} from "@/pages/_app";
import {ReactElement} from "react";
import SidebarLayout from "@/components/SidebarLayout";

const CreateProduct: NextPageWithLayout = () => {
  return <h2>CreateProduct</h2>;
}

CreateProduct.getLayout = function getLayout(page: ReactElement) {
  return (
    <SidebarLayout>
      {page}
    </SidebarLayout>
  )
}

export default CreateProduct;
