import type { ShopProduct } from "@/types/product";
import Image from "next/image";

type ProductCardProps = {
  product: ShopProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <h2 className="text-2xl font-medium line-clamp-2 leading-tight text-gray-600 mt-2">
        {product.title}
      </h2>
      <br />
      <p className="text-lg font-bold tracking-tight text-gray-900 mt-1">
        ${product.price}
      </p>
      <br />
      {/* <img src={product.thumbnail} alt={product.title} /> */}
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={200}
      />
    </div>
  );
}
