import {ReactElement} from "react";
import {Product} from "@/constants/mockData";
import Image from "next/image";

type ProductCardProps = {
  product: Product
}

type ProductCardFunc = (props: ProductCardProps) => ReactElement;

const ProductCard: ProductCardFunc = ({product}: ProductCardProps): ReactElement => {
  return (
    <div className="shadow hover:shadow-2xl transition-shadow duration-500 cursor-pointer">
      <Image
        src={require(`public/images/foods/${product.image}.jpg`)}
        className="max-h-48" alt={product.image}
      />
      <div className="p-2">
        <p className="text-lg font-semibold">{product.title}</p>
        <p className="text-sm">
          {product.description}
        </p>
      </div>
    </div>
  )
}

export default ProductCard;
