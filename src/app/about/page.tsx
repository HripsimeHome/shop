"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => router.back()}>Go back</button>
      <button onClick={() => router.replace("/about")}></button>
      {/* Когда используется replace()? Один из типичных случаев — когда нам не
      нужно сохранять текущую страницу как отдельный шаг истории. Например,
      пользователь находится на: /login успешно вошёл: login successful и мы
      делаем: router.replace("/dashboard"); Получаем: /login ↓ replace ↓
      /dashboard Вместо обычного добавления нового шага истории мы заменяем
      текущий маршрут.
      router.replace()
      → перейти на маршрут, заменив текущую запись истории. */}

      <button onClick={() => router.refresh()}></button>
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
  );
}
