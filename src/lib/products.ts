import type { ProductsResponse } from "@/types/product";

// В Next.js можно также задавать revalidation на уровне маршрута.
// export const revalidate = 60;
// разберём отдельно, когда будем изучать caching

export async function getProducts(): Promise<ProductsResponse> {
  try {
    const response = await fetch(
      "https://dummyjson.com/products",
      //   {
      //   next: {
      //     revalidate: 300, // данные могут обновляться примерно каждые 5 минут
      //   },
      // }
    );

    // получает HTTP-ответ.
    //await getProducts() означает: дождаться результата Promise и получить его значение.
    // response.status может быть: 200
    // само тело ответа находится в: response.body
    if (!response.ok) {
      throw new Error("Failed to fetch products"); // response.ok будет: true
    }
    return await response.json();
    // return → возвращает результат из функции
    // await response.json(); - означает:«Возьми тело HTTP-ответа, прочитай его как JSON и верни полученное JavaScript-значение».
  } catch (error) {
    throw new Error("Could not load products");
  }
}

//🔹
// fetch()
// → получить HTTP Response

// response.json()
// → достать из Response данные JSON
// И обе операции асинхронные, поэтому мы видим:
// await fetch(...) и await response.json()

//🔹мы используем:

// type ProductsResponse = {
//   products: ShopProduct[];
// };

// const data: ProductsResponse = await response.JSON();
// return data.products;

//🔹
// переменная: const response  содержит объект Response. Это ещё не наши товары.

// async function getProducts() {} означает, что функция асинхронная и возвращает Promise.

// Зачем писать Promise<ProductsResponse> После : мы указываем тип результата функции.

// Но функция async. Поэтому результат не просто: Product[] а: Promise<Product[]>

//🔹
// То есть:
// async function
//       ↓
// возвращает Promise
//       ↓
// внутри Promise находится ProductsResponse т.е. ShopProduct[] з файла types.products.ts

//🔹
// async
//   ↓
// функция возвращает Promise
// await
//   ↓
// получаем результат Promise

//🔹
// И для API:
// fetch()
//   ↓
// Promise<Response>
//   ↓ await
// Response
//   ↓ response.json()
// Promise<Product[]>
//   ↓ await
// Product[]

//🔹
// DummyJSON возвращает один объект:

// {
//   products: [...]
// }

// а не массив:

// [
//   { products: [...] },
//   { products: [...] }
// ]

// поэтому data.products.map

//🔹
// const products = response.json(); даст: Promise
// А:
// const products = await response.json(); даст уже данные.

//🔹 Без await
// const products = response.json();

// Тип примерно: Promise<unknown>
// То есть: «Когда-нибудь будут данные».

//🔹 С await
// const products = await response.json();
// Получаем сами данные: unknown
// А если мы укажем тип:
// const products: Product[] = await response.json();
// то TypeScript понимает:

// products
//    ↓
// Product[]
