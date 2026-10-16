import styles from "./ProductsPage.module.scss";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard/ProductCard";
import type { Metadata } from "next";
import CartButton from "@/components/ProductCard/ProductCardButtonConditional";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our latest products",
  keywords: ["products", "shop", "online store"],
};

// data — весь объект ответа.
// А: data.products — массив товаров.

export default async function ProductsPage() {
  const data = await getProducts(); //  await getProducts() - даёт Product[]
  // получает данные из тела ответа.

  return (
    // <main className={styles.products}>
    <main>
      <h1 className="text-blude-900">Products</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isOnSale={product.price > 100}
          />
        ))}
        {/* Для демонстрации это условие подходит, но в реальном магазине нельзя автоматически считать любой товар дешевле 100 валютных единиц товаром со скидкой. Лучше получать статус скидки из API или рассчитывать его по данным о старой и новой цене. */}
      </div>
    </main>
  );
}

// DummyJSON — products возвращает товары, но обёрнутые в объект:
// { products: [...] } поэтому пишем  - data.products

//await означает примерно: «Подожди результат этого Promise и получи его значение».

// const response = await fetch(...); означает:

// выполнить fetch();
// получить Promise;
// дождаться его выполнения;
// взять результат;
// записать результат в response.

// export default async function ProductsPage() {
//   const response = await fetch("https://dummyjson.com/products");

//   if (!response.ok) {
//     throw new Error("Failed request");
//   }
//   const data: ProductsResponse = await response.json();

//   return (
//     <div>
//       <ul>
//         {data.products.map((product) => (
//           <li key={product.id}>
//             {/* <img src={product.thumbnail} alt={product.title} /> */}
//             <Image
//               src={product.thumbnail}
//               alt={product.title}
//               width={100}
//               height={70}
//               priority
//             />
//             <h2>{product.title}</h2>
//             <br />
//             <p>${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// можно написать без data:

//  type Product = {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// };

// export default async function ProductsPage() {
//   const response = await fetch("https://fakestoreapi.com/products");

//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   const products: Product[] = await response.json();

//   return (
//     <main>
//       <h1>Products</h1>

//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <h2>{product.title}</h2>
//             <p>${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

//🔹
// И если мы возьмём Fake Store API, который возвращает сразу массив, второй тип действительно уже не понадобится. Тогда будет гораздо проще:

// const products: ShopProduct[] = await response.json();

//🔹
// API возвращает объект
//         ↓
// const data = await response.json()
//         ↓
// data.products

// API возвращает массив
//         ↓
// const products = await response.json()
//         ↓
// products

// 📌 JSON может содержать массив
// После:
// const products: Product[] = await response.json();
// Поэтому можем: products.map(...)

//📌 JSON может быть одним объектом

// Тогда тип:
// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

// const product: Product = await response.json();
// Теперь:
// product.id а не: product.map(...)

// 📌 Очень часто API возвращает не просто массив.

// Например:

// {
//   "products": [
//     {
//       "id": 1,
//       "title": "T-shirt",
//       "price": 25
//     },
//     {
//       "id": 2,
//       "title": "Jeans",
//       "price": 50
//     }
//   ],
//   "total": 2,
//   "skip": 0,
//   "limit": 30
// }

// Тогда весь ответ — это уже не Product[].
// Он имеет структуру:

// response
//    ↓
// {
//    products: Product[],
//    total: number,
//    skip: number,
//    limit: number
// }

// И TypeScript-тип будет:

// type ProductsResponse = {
//   products: Product[];
//   total: number;
//   skip: number;
//   limit: number;
// };

// Тогда:
// const data: ProductsResponse = await response.json();

// И товары находятся здесь: data.products

// 📌 Очень важно не перепутать data и data.products

// Если API возвращает:
// {
//   "products": [...]
// }
// то:
// const data = await response.json();
// получает:
// {
//   products: [...]
// }

// Поэтому: data — весь объект ответа.
// А: data.products — массив товаров.

// Схема:

// data
// │
// ├── products ← массив товаров
// │
// └── ...

// Поэтому: data.products.map(...)

// а не: data.map(...)

// 📌 Запомни два главных варианта

// 🔹 API возвращает массив
// [
//   {
//     "id": 1,
//     "title": "T-shirt"
//   }
// ]

// Тогда:
// const products: Product[] = await response.json();

// И: products.map(...)

// //🔹 API возвращает объект с массивом
// {
//   "products": [
//     {
//       "id": 1,
//       "title": "T-shirt"
//     }
//   ]
// }

// Тогда:
// type ProductsResponse = {
//   products: Product[];
// };

// и:
// const data: ProductsResponse = await response.json();
// А товары: data.products

// 🔹Что происходит в браузере?
// Браузер получает результат работы Next.js и отображает страницу.
// При этом сам факт первоначального получения товаров произошёл до отображения страницы в браузере.
// Именно это и называется: Server-side data fetching.

// 🔹И самое главное отличие от привычного React:

// React:
// "Сначала загрузить приложение → потом запросить товары"

// Next.js Server Component:
// "Сначала получить данные на сервере → сформировать страницу → отправить результат браузеру"
