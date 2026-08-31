import Link from "next/link";

// Динамический  маршрут
//Product — название типа.

type Product = {
  id: number;
  name: string;
};

// Catch-all маршруты [...slug]
// [...slug]
//    ↓
// "собери все части URL"
// Он нужен, когда URL может иметь несколько частей.
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
  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          {product.name}
        </Link>
      ))}
    </div>
  );
}
