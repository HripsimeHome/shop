import type { Metadata } from "next";
import AboutHeader from "@/components/About/AboutHeader/AboutHeader";
import AboutContent from "@/components/About/AboutContent/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "About our products",
  keywords: ["about shop", "shop", "online store"],
};

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <AboutHeader />
      <AboutContent />
    </div>
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

// Родитель:

// <div className={styles.image}>

// должен иметь подходящие размеры и обычно:

// .image {
//   position: relative;
//   width: 300px;
//   height: 200px;
// }

// Почему position: relative?

// Потому что при fill изображение позиционируется относительно родительского контейнера.
