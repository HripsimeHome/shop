import clsx from "clsx";
// clsx — небольшая JavaScript-библиотека, которая помогает собирать строку CSS-классов из нескольких значений, в том числе по условиям.

// Без clsx приходится собирать классы с помощью тернарных операторов или шаблонных строк. Когда условий становится больше, className сложнее читать.
// clsx позволяет вынести логику выбора классов в более понятную структуру.

type AddedbuttonProps = {
  isAdded: boolean;
};

export default function AddedButton({ isAdded }: AddedbuttonProps) {
  return (
    <button
      //📌 Условные классы: clsx
      // clsx() объединяет постоянные классы и результат тернарного оператора.
      //  1. Строки
      className={clsx(
        "rounded-lg px-4 py-2 border",
        isAdded
          ? "bg-green-400 text-black border-green-900"
          : "bg-orange-400 border-orange-900 text-white",
      )}
    >
      {isAdded ? "Product is added!" : "Add to cart"}
    </button>
  );
}

// 📌 Как работает clsx с разными типами аргументов
// clsx умеет принимать строки, объекты и массивы.

// 1. Строки
// clsx("flex", "items-center", "gap-4"); Результат:flex items-center gap-4
//Это обычное объединение строк.
