import clsx from "clsx";

type ConditionsButtonProps = {
  isAdded: boolean;
  isAvailable: boolean;
  fullWidth?: boolean;
};

export default function ConditionsButton({
  isAdded,
  isAvailable,
  fullWidth = false,
}: ConditionsButtonProps) {
  return (
    <button
      //📌 Условные классы: clsx
      //  Несколько условий одновременно
      //       В компоненте может быть несколько независимых условий.
      // Предположим, кнопка товара в shop должна учитывать:
      // - добавлен ли товар в корзину;
      // - доступен ли товар;
      // - нужно ли растянуть кнопку на всю ширину.
      type="button"
      disabled={!isAvailable}
      className={clsx(
        "rounded-lg px-4 py-2 font-medium text-white transition",
        //  Постоянные классы находятся в строке: Они применяются при любом состоянии кнопки.
        {
          // 🔹 Условные классы находятся в объекте:
          //У каждого ключа есть собственное условие.
          "bg-green-600 hover:bg-green-700": isAdded && isAvailable,
          "bg-blue-600 hover:bg-blue-700": !isAdded && isAvailable,
          "cursor-not-allowed bg-gray-400": !isAvailable,
          "w-full": fullWidth,
          //🔹 Если fullWidth равно true, добавляется класс w-full. Если false, класс не добавляется.
        },
      )}

      //🔹disabled={!isAvailable} — это отдельный HTML-атрибут, который блокирует кнопку. Класс cursor-not-allowed сам по себе не блокирует взаимодействие.
    >
      {!isAvailable ? "Out of stock" : isAdded ? "Added" : "Add to cart"}
    </button>
  );
}

//📌
// Динамические имена классов вроде w-[${width}px] могут не обнаруживаться Tailwind при сборке. Предпочитай полные имена классов.

// Не нужно создавать динамические имена классов
// Не стоит писать: const width = 347;
// <div className={`w-[${width}px]`} />

// Tailwind должен обнаружить используемые имена классов при сборке. Составленное во время выполнения имя он может не обнаружить, поэтому нужный CSS-класс может не попасть в результат. Если значение известно заранее, безопаснее указать полный класс:
// <div className="w-[347px]" />

// Если нужно выбирать между несколькими вариантами, используй объект с полными именами классов:
// const widthClasses = {
//   compact: "w-[220px]",
//   regular: "w-[347px]",
//   wide: "w-[420px]",
// } as const;

// Затем выбери готовый класс по ключу.
