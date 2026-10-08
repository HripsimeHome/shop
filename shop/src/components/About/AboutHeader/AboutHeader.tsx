import styles from "./AboutHeader.module.scss";
import Image from "next/image";

export default function AbouHeader() {
  return (
    <section className={styles.aboutHeader}>
      {/* <h3>About Header</h3> */}
      <div>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum i It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsums that it has a
        more-or-less normal distribution of
      </div>

      <Image
        src="/images/staff.jpg"
        alt="Staff"
        priority
        width={300}
        height={200}
      />
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
