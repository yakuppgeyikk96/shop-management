import {NextPageWithLayout} from "@/pages/_app";
import {ReactElement} from "react";
import SidebarLayout from "@/components/SidebarLayout";
import {mockProducts, Product} from "@/constants/mockData";
import ProductCard from "@/components/ProductCard";

const Products: NextPageWithLayout = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-16 py-8">
      {
        mockProducts.map((product: Product) => <ProductCard key={product.id} product={product} />)
      }
    </div>
  )
}

Products.getLayout = function getLayout(page: ReactElement) {
  return (
    <SidebarLayout>
      {page}
    </SidebarLayout>
  )
}

export default Products;
