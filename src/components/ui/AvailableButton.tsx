import clsx from "clsx";

// clsx — небольшая JavaScript-библиотека, которая помогает собирать строку CSS-классов из нескольких значений, в том числе по условиям.

// Без clsx приходится собирать классы с помощью тернарных операторов или шаблонных строк. Когда условий становится больше, className сложнее читать.
// clsx позволяет вынести логику выбора классов в более понятную структуру.

//clsx Объединяет классы и добавляет условные значения.

type AvailableButtonProps = {
  isAvailable: boolean;
};

export default function AvailableButton({ isAvailable }: AvailableButtonProps) {
  return (
    <button
      //📌 Условные классы: clsx
      // 2. Объекты
      // Этот подход удобен, когда нужно одновременно управлять несколькими независимыми классами.
      className={clsx("rounded-xl bg-green-400 border p-2", {
        //добавляются всегда;
        "border-green-500": isAvailable, //добавляется, если товар доступен;
        "opacity-50 cursor-not-allowed": !isAvailable, //добавляются, если товар недоступен.
      })}
    >
      {isAvailable ? "Available" : "Not Available"}
    </button>
  );
}

// 📌 Как работает clsx с разными типами аргументов
// clsx умеет принимать строки, объекты и массивы.

// 2. Объекты
// У объекта ключ — имя CSS-класса, а значение — условие его добавления.
// clsx({
//   "bg-green-600": isAdded,
//   "bg-blue-600": !isAdded,
// });
