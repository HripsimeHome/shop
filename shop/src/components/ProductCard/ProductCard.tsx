import type { ShopProduct } from "@/types/product";
import Image from "next/image";

type ProductCardProps = {
  product: ShopProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <h2>{product.title}</h2>
      <br />
      <p>${product.price}</p>
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
