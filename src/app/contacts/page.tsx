"use client";
import { useRouter } from "next/navigation";
// Используй useRouter(), если: переход является результатом программной логики:
// кнопка
// форма
// условие
// успешная операция
// выход
// авторизация
//❌ Не нужно делать кнопку только ради обычной ссылки:

export default function Contacts() {
  const router = useRouter();

  const handleCLick = () => {
    router.push("/products");
  };

  return (
    <div>
      <h2>Contacts page</h2>
      <br />
      <button onClick={() => router.push("/about")}>
        Go to the About page
      </button>
      {/* router.push() → перейти на новый маршрут и добавить его в историю. */}
      <br />
      <br />
      <button onClick={handleCLick}>Go to the Products page</button>
    </div>
  );
}
