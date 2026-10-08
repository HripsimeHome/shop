import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getProducts();
  const products = data.products;

  const productUrls = products.map((product: { id: number }) => ({
    url: `https://shop-eight-opal.vercel.app/products/${product.id}`,
  }));

  return [
    // статические страницы
    {
      url: "https://shop-eight-opal.vercel.app/",
    },
    {
      url: "https://shop-eight-opal.vercel.app/about",
    },
    {
      url: "https://shop-eight-opal.vercel.app/products",
    },
    {
      url: "https://shop-eight-opal.vercel.app/contacts",
    },

    ...productUrls, //Он раскладывает массив productUrls внутрь другого массива.
  ];
}

// 📌 Правило

// Sitemap.xml — XML-файл со списком важных URL сайта, который помогает поисковым системам обнаруживать и сканировать страницы. В Next.js App Router sitemap можно создать через app/sitemap.ts; Next.js автоматически предоставляет его по адресу /sitemap.xml. Sitemap не гарантирует индексацию страниц, а только помогает поисковым системам узнать об их существовании

//  Sitemap — карта сайта для поисковых систем. Она помогает поисковым системам узнать, какие URL существуют.

// sitemap.xml Говорит поисковику: «Вот страницы, которые существуют на моём сайте».

//  Next.js сможет предоставить sitemap по адресу: /sitemap.xml

// 🔥 А если страницы динамические?

// Вот здесь sitemap становится особенно полезным.
// Допустим, у тебя есть:

// app/
// └── products/
//     └── [id]/
//         └── page.tsx

// И API возвращает:

// Product 1
// Product 2
// Product 3
// ...
// Product 100

// Ты можешь получить продукты и автоматически создать URL для каждого:

// import type { MetadataRoute } from "next";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const response = await fetch("https://api.example.com/products");
//   const products = await response.json();

//   return products.map((product: { id: number }) => ({
//     url: `https://example.com/products/${product.id}`,
//   }));
// }

// Получится примерно: /sitemap.xml

// https://example.com/
// https://example.com/products
// https://example.com/products/1
// https://example.com/products/2
// https://example.com/products/3
// ...

// То есть sitemap может генерироваться динамически.

//
// 📌 ...productUrls

// Он раскладывает массив productUrls внутрь другого массива.

// Допустим:

// productUrls = [
//   { url: "/products/1" },
//   { url: "/products/2" },
//   { url: "/products/3" }
// ];

// Тогда:

// return [
//   { url: "/" },
//   { url: "/about" },

//   ...productUrls,
// ];

// получается:

// [
//   { url: "/" },
//   { url: "/about" },
//   { url: "/products/1" },
//   { url: "/products/2" },
//   { url: "/products/3" }
// ]
