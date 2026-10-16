// "use client";
import type { ShopProduct } from "@/types/product";
import Image from "next/image";
//import { ArrowRight } from "lucide-react";
import CartButton from "@/components/ProductCard/ProductCardButtonConditional";
type ProductCardProps = {
  product: ShopProduct;
  isOnSale: boolean;
};

export default function ProductCard({ product, isOnSale }: ProductCardProps) {
  return (
    <div
      // 📌 это Условные классы, т.е. когда border color не определен сначала, потом определяем условным классом. Элемент существует всегда, но его оформление меняется. Conditional Classes меняют оформление существующего элемента.
      className={`flex flex-col group rounded-xl border p-4 shadow-md
    ${isOnSale ? "border-red-400" : "border-gray-400"}
    `}
    >
      {/* flex-1 mt-auto */}
      {/* group — обозначает родительский элемент как группу. */}
      {/* group-hover:text-red-600 — меняет цвет заголовка, когда на родителя наведён курсор. */}
      {/* 📌 Условный рендеринг. Метку Sale мы вообще не отображаем, если isOnSale равен false. Conditional Rendering определяет, отображать ли элемент вообще. */}
      {isOnSale && (
        <div className="relative rounded-xl bprder">
          <span className="absolute -top-6 -right-5 rounded-full bg-red-500 px-3 py-1 text-white">
            Sale
          </span>
        </div>
        // <span className="mt-2 inline-block rounded bg-red-100 px-2 py-1 text-sm text-red-700">
        //   Sale
        // </span>
      )}
      <h2
        className="h-[50px] 
        text-xl
        font-medium 
        line-clamp-2 
        leading-tight
        text-gray-600
        group-hover:text-red-400
        group-focus-within:text-blue-400"
      >
        {product.title}
      </h2>
      {/* group-hover:	Когда родитель находится под указателем
group-focus-within:	Когда родитель или его потомок имеет фокус
group-focus:	Когда сам родитель находится в фокусе */}
      <p className="text-lg font-bold tracking-tight text-gray-900 group-hover:text-green-600">
        ${product.price}
      </p>
      {/* <icon name="arrow-right" size="lg" /> */}
      {/* <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" /> */}
      {/* <img src={product.thumbnail} alt={product.title} /> */}
      {/* Это подсказка браузеру о предполагаемой ширине изображения: - До 640px —
      изображение занимает примерно 100vw, то есть всю ширину окна. - До 1024px
      — примерно 50vw, то есть половину ширины окна. - На более широких экранах
      — примерно 25vw, то есть четверть ширины окна. */}
      <div className="flex flex-1 relative aspect-square overflow-hidden bg-gray-100">
        {/* При увеличении изображение может выходить за границы контейнера. overflow-hidden скрывает эту часть.
В результате изображение увеличивается внутри своей области, не выходя за её визуальные границы. */}
        <Image
          src={product.thumbnail}
          alt={product.title}
          // width={300}
          // height={200}
          fill
          sizes="(max-width: 640px) 10vw, (max-width: 1024px) 50vw, 25vw"
          className="w-full h-auto  object-contain transition-transform duration-300 group-hover:scale-105 p-4"
        />
      </div>
      {/* <button
        type="button"
        className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition duration-200 hover:bg-red-400 md:hover:bg-gray-700  active:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-auto"
      >
        Add to cart
      </button> */}
      <CartButton status="available" />
      <CartButton status="added" />
      <CartButton status="unavailable" />
    </div>
  );
}

//src и alt типизированы через TypeScript

// type ProductImageProps = {
//   src: string;
//   alt: string;
// };

// export function ProductImage({ src, alt }: ProductImageProps) {
//   return (
//     <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
//       <Image
//         src={src}
//         alt={alt}
//         fill
//         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//         className="object-contain p-4"
//       />

//       <span className="absolute left-3 top-3 rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
//         New
//       </span>
//     </div>
//   );
// }

// 📌 Правила

// - Conditional Classes позволяют менять Tailwind-классы в зависимости от props, данных или состояния.
// - Тернарный оператор condition ? value1 : value2 выбирает одно из двух значений.
// - Шаблонные строки позволяют объединять постоянные и условные классы.
// - Используй &&, когда элемент нужно отобразить только при истинном условии; для условного добавления классов учитывай, что false может попасть в итоговую строку.
// - Для нескольких вариантов оформления удобно использовать объект классов и тип Record.
// - TypeScript Union Types помогают ограничивать допустимые состояния компонента.
// - Conditional Classes меняют стили, а Conditional Rendering определяет, отображать ли элемент.
// - Если элемент должен быть недоступен для взаимодействия, используй настоящее состояние disabled, а не только серый цвет.
// - Не составляй имена Tailwind-классов из частей вроде bg-${color}-500; используй полные имена классов в статически обнаруживаемых строках.
// - Для простых условий достаточно встроенных возможностей JavaScript. clsx полезен, когда условий и комбинаций классов становится больше.
