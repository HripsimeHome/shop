import clsx from "clsx";

type ArrayButtonProps = {
  isAdded: boolean;
};

export default function ArrayButton({ isAdded }: ArrayButtonProps) {
  return (
    <button
      //📌 Условные классы: clsx
      // 3. Массивы
      className={clsx([
        "flex",
        "items-center",
        "px-4",
        isAdded && "bg-green-600",
      ])}
    >
      Added
    </button>
  );
}

// 📌 Как работает clsx с разными типами аргументов
// clsx умеет принимать строки, объекты и массивы.

// 1. Массивы
//  clsx([
//   "flex",
//   "items-center",
//   isAdded && "bg-green-600",
// ]);

// Здесь используется логический оператор &&.
// Если isAdded истинно, выражение возвращает строку "bg-green-600". Если ложно — возвращает false. clsx игнорирует false, null и undefined.
// Массивы полезны, когда классы уже собраны в список, но в повседневных компонентах чаще достаточно строк и объектов.
