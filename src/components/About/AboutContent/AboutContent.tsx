"use client";
import styles from "./AboutContent.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AbouContent() {
  const router = useRouter();
  return (
    <section className={styles.aboutContent}>
      <h3>About content</h3>
      <div className={styles.aboutContent__block}>
        <div>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum i It is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum It is a long established fact
          that a reader will be distracted by the readable content of a page
          when looking at its layout. The point of using Lorem Ipsums that it
          has a more-or-less normal distribution of
        </div>

        <div className={styles.aboutContent__staffImg}>
          <Image src="/images/product.jpg" alt="Product" priority fill />
        </div>
      </div>

      <div className={styles.aboutContent__ourOffice}>
        <h3>Our office</h3>
        <Image
          src="/images/ourOffice.webp"
          alt="Our office"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* sizes используется вместе с адаптивными изображениями, особенно с: fill */}
        {/* На экранах до 768px изображение занимает всю ширину viewport, а на больших экранах — примерно половину. vw означает: viewport width
То есть ширина окна браузера. */}
        {/* sizes="100vw" говорит: Изображение занимает примерно 100% ширины viewport. */}
        📌 Оптимизация включает несколько аспектов: Image Optimization │ ├──
        размер ├── качество ├── формат ├── responsive images ├── lazy loading
        ├── priority loading └── предотвращение layout shift
      </div>

      <div>
        <button onClick={() => router.back()}>Go back</button>
        <button onClick={() => router.replace("/about")}>Replace Button</button>
        {/* Когда используется replace()? Один из типичных случаев — когда нам не
      нужно сохранять текущую страницу как отдельный шаг истории. Например,
      пользователь находится на: /login успешно вошёл: login successful и мы
      делаем: router.replace("/dashboard"); Получаем: /login ↓ replace ↓
      /dashboard Вместо обычного добавления нового шага истории мы заменяем
      текущий маршрут.
      router.replace()
      → перейти на маршрут, заменив текущую запись истории. */}
        <button onClick={() => router.refresh()}>Refresh Button</button>
        {/* router.refresh() — это не то же самое, что: F5             
      refresh() предназначен для обновления текущего маршрута через механизм Next.js, сохраняя состояние клиента там, где это возможно.
      Он просит Next.js обновить текущий маршрут.Например:router.refresh();
при этом URL может остаться тем же:
      /products/25
       ↓
      refresh()
       ↓
      /products/25

      Но данные текущего маршрута могут быть заново запрошены/пересчитаны в соответствии с механизмами Next.js. */}
      </div>
    </section>
  );
}
