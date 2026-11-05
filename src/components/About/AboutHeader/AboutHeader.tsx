 
import Image from "next/image";
import Button2 from "@/components/ui/Button2"

export default function AbouHeader() {
  return (
    <section className="my-20"> 
      {/* <h3>About Header</h3> */}
      <div className="flex max-w-[800px] bg-brand">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum i It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsums that it has a
        more-or-less normal distribution of
           <Image
        src="/images/staff.jpg"
        alt="Staff"
        priority
        width={300}
        height={200}
        
      />
      </div>
      <br /> 
    {/* 🔹 focus-visible особенно полезен для отображения фокуса при клавиатурной навигации. */}
      <button className="
        bg-brand-400 
        hover:bg-brand-500
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-brand-900
        my-6">
        button -  bg-brand-400 hover:bg-brand-600. Здесь  - bg-brand - мы создали значение, которое Tailwind использует в своих utilities.
      </button>  

      <br /> 
      <button  disabled className="disabled:bg-brand-100">
       button - disabled:bg-brand-100
      </button> 
      <br /><br /> 
      <button disabled className="bg-disabled">
      bg-disabled
      </button> 
       <br /> 
       <p className="underline-brand my-5">Директива @utility: Custom Utilities  -  text-decoration-line: underline;</p>
      <div className="border border-gray-900 hover:border-brand-accent">
        border-color: var(--color-brand-600);
        border-width: 2px; hover:border-brand-accent
      </div>
      <br /> 
      <div className="text-xl desktop:tracking-display">
      Используем собственный breakpoint -   --breakpoint-desktop: 68.75rem;
      <br />  @utility tracking-display 
      letter-spacing: -0.04em;
    Таким образом, собственные utilities работают вместе с собственными breakpoints.
      </div>
      <p>для настройки ширины табуляции.</p>
      <pre className="tab-8">
        Tailwind CSS v4 поддерживает и functional utilities — утилиты, которые принимают динамические значения. 
      </pre>
      <h1 className="font-custom-40">Функциональные Custom Utilities  -  font-size: calc(--value(integer) * 1px); в коде font-custom-40</h1>
      <h2 className="font-custom-20">Функциональные Custom Utilities  -  font-size: calc(--value(integer) * 1px); в коде font-custom-20</h2>

      <br /><br />
      <div className="card-width-200 border-2 my-6">@utility card-width-*. В коде card-width-200</div>
      <div className="card-width-400 border-2">@utility card-width-*. В коде card-width-400</div>
      <br />
      <p>@apply позволяет использовать уже существующие utility-классы внутри обычного CSS-правила.
        <br />
       
  @apply rounded-lg bg-brand px-4 py-2 font-semibold text-white;
      </p>
      <button className="shop-button"> shop-button</button>
       <br />
      <Button2  type="button">Component Button2</Button2>

    </section>     
  );
}

// 📌 next/image дополнительно помогает Next.js оптимизировать изображения.

// оптимизировать размер изображения;
// отдавать подходящий размер для устройства;
// поддерживать lazy loading;
// предотвращать скачки layout;
// работать с современными форматами изображений;
// оптимизировать загрузку изображений.

// 📌 priority говорит Next.js: Это изображение важно, загрузи его с высоким приоритетом.
// Но не нужно ставить: priority на каждую картинку.
// Например, если у нас 30 товаров: products.map(...) не нужно делать:
// <Image priority ... /> для всех 30 изображений.

// Для обычных изображений Next.js может использовать lazy loading.

// 📌 fill

// Иногда мы не хотим задавать: width, height, а хотим, чтобы изображение заполнило родительский контейнер. Для этого используется: fill

// <div className={styles.image}>
//   <Image
//     src="/images/product.jpg"
//     alt="Product"
//     fill
//   />
// </div>

// Но здесь есть важный момент.
// Родитель: <div className={styles.image}> должен иметь подходящие размеры и обычно:

// .image {
//   position: relative;
//   width: 300px;
//   height: 200px;
// }

// Почему position: relative?
// Потому что при fill изображение позиционируется относительно родительского контейнера.
