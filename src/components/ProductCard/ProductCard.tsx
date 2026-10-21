// "use client";
import type { ShopProduct } from "@/types/product";
import Image from "next/image";
//import { ArrowRight } from "lucide-react";
import CartButton from "@/components/ProductCard/ProductCardButtonConditional";
import ButtonVariant from "../ui/ButtonVariant";
import Badge from "../ui/Badge";
import React from "react";

type ProductCardProps = {
  product: ShopProduct;
  isOnSale: boolean;
  isAvailable?: boolean;
  color?: string;
  // isAvailable определяет, доступен ли товар для покупки.
};

export default function ProductCard({
  product,
  isOnSale,
  color,
}: ProductCardProps) {
  return (
    <div
      // 📌 это Условные классы, т.е. когда border color не определен сначала, потом определяем условным классом. Элемент существует всегда, но его оформление меняется. Conditional Classes меняют оформление существующего элемента.
      className={`flex flex-col group relative rounded-xl border p-4 shadow-md  after:absolute        
      after:top-0 
      after:right-0 
      after:h-3 
      after:w-3
      after:rounded-tr-lg
      after:bg-[var(--color-primary)] 
      after:content-['']
    ${isOnSale ? "border-red-400" : "border-gray-400"}
    `}
      // Псевдоэлемент позиционируется относительно карточки, потому что у article есть relative.
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
      <a
        href="/products/orders"
        className="relative inline-block 
        after:absolute
        after:bottom-0 
        after:left-0 
        after:h-1
        after:w-0 
        after:bg-[var(--color-primary)]
        hover:after:bg-[var(--color-dark)]
        after:transition-all
        after:duration-300
        after:content-['']
        hover:after:w-full"
      >
        <h2
          className="h-[50px] 
        text-xl
        font-medium 
        line-clamp-2 
        leading-tight
        text-gray-600
        group-hover:text-red-400
        group-focus-within:text-blue-400
        
        after:block 
        after:h-1
        after:w-50
        after:bg-[#dbec62]
        after:content-['']
        before:mr-2
        before:content-['★']"
        >
          {product.title}
        </h2>
      </a>

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
      <br />
      <article
        // 📌 CSS Variables можно объявлять не только в :root, но и на конкретном элементе.
        //🔹Почему здесь используется style? Потому что мы задаём значение CSS-переменной динамически через React.
        style={{ "--card-color": "#dbec62" } as React.CSSProperties} //сообщает TypeScript, какой тип стилей мы передаём.
        className="rounded-lg bg-[var(--card-color)] p-6 my-2"
      >
        <h2>
          Product description - Dynamic variable colora as React.CSSProperties
        </h2>
      </article>
      {/* если цвет приходит через props, компонент может выглядеть так: */}
      {/* 📌 Если CSS-переменная не имеет значения, выражение var(--color-primary)
      не сможет получить его. Можно указать запасное значение: 
      <button className="bg-[var(--color-primary,#dbec62)]">Add to cart</button>
      Здесь #dbec62 — fallback, то есть запасное значение. Оно используется, если --color-primary не определена или не может предоставить допустимое значение для этого свойства.*/}
      <p
        style={{ "--card-color": color } as React.CSSProperties}
        className="rounded-lg bg-[var(--card-color)] p-2"
      >
        Dynamic variable colora as React.CSSProperties
      </p>
      <CartButton status="default" />
      <CartButton status="added" />
      <CartButton status="unavailable" />
      <ButtonVariant variant="primary" size="sm" disabled>
        {/* disabled={!isAvailable}> */}
        Disabled
      </ButtonVariant>
      <Badge variant="sale">sale</Badge>
      <Badge variant="new">new</Badge>
      <Badge variant="outOfStock">outOfStock</Badge>
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
