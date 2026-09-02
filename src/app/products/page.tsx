"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Динамический  маршрут
//Product — название типа.

type Product = {
  id: number;
  name: string;
};

// Catch-all маршруты [...slug]
// Он нужен, когда URL может иметь несколько частей.
// [...slug] означает: собери все сегменты URL в массив slug

// Представим, что мы хотим сделать категории магазина.
type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

//: Product[] - это массив ([]) объектов типа Product
// или так Array<Product> - Это означает: массив, состоящий из объектов типа Product.
// JSX.Element[] - массив JSX-элементов
const products: Product[] = [
  { id: 1, name: "T-shirt" },
  { id: 2, name: "Shoes" },
];
export default function ProductsPage() {
  const router = useRouter();
  const productId = 25;

  return (
    <div>
      {/* {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          {product.name}
        </Link>
      ))} */}
      <button onClick={() => router.push(`/products/${productId}`)}>
        Open product
      </button>
    </div>
  );
}
