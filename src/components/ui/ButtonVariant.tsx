import clsx from "clsx";
import { cn } from "@/lib/utils";
// 📌 Типизация вариантов через Union Type
//Создадим кнопку с тремя вариантами оформления.
import type { ButtonHTMLAttributes } from "react";

// variant: "primary" \| "secondary" подходит когда	Компонент должен поддерживать ограниченный набор оформлений
type ButtonVariantColor = "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md" | "lg";
// 🔹Union Types ограничивают допустимые значения вариантов.

// 🔹 Для ограниченного набора оформлений используй Union Type, например "primary" | "secondary" | "danger".

// type ButtonVariantProps = {
//   children: ReactNode;
//   variant: ButtonVariantColor;
//   className?: string;
// }; это уже не нужно, так как наследуется

// 📌 ButtonProps, наследует стандартные HTML-атрибуты кнопки через ButtonHTMLAttributes<HTMLButtonElement>.

//  Это означает, что компонент автоматически поддерживает такие свойства, как:
// - children — содержимое кнопки;
// - className — дополнительные классы;
// - type — тип кнопки;
// - disabled — отключённое состояние;
// - onClick — обработчик нажатия;
// - title — текстовая подсказка;
// - aria-label — доступное имя кнопки.

// 📌Для типизации props в React подходят и type, и interface.
// Оба варианта описывают объект свойств компонента.
// Для компонентов с вариантами оформления, Union Types и комбинациями типов type часто удобен. interface тоже подходит для обычных объектов свойств и может расширяться через extends.

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariantColor;
  // variant?: "primary" | "secondary" | "danger";
  // можно написать и так, но мы вынесли в переменную ButtonVariantColor
  size?: ButtonSize;
};
// & объединяет типы Это означает: компонент принимает стандартные свойства кнопки и дополнительно свойства children и variant.

const variantClasses: Record<ButtonVariantColor, string> = {
  //  🔹 Record<Variant, string> позволяет связать допустимые варианты с наборами Tailwind-классов.
  primary: "bg-blue-500 text-white hover:bg-gray-800",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

// 📌 Record<Keys, Value> — встроенный тип TypeScript, который описывает объект с определёнными ключами и типом значений.
// ButtonVariantColor определяет допустимые ключи;
// string определяет тип каждого значения.
// TypeScript проверяет, что объект содержит все три варианта и что каждому варианту соответствует строка.
// Это удобный способ связать типы с наборами Tailwind-классов.

// 🔹 TypeScript проверяет:
// - допустимые ключи объекта;
// - наличие необходимых вариантов;
// - тип значений;
// - корректность использования variant в коде.

export default function ButtonVariant({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled,
  // 🔹 type извлечён отдельно и задан по умолчанию как "button". Это полезно, поскольку HTML-кнопка внутри формы без явно указанного типа может работать как кнопка отправки формы.
  ...props
  // 🔹  Это rest-синтаксис: он собирает остальные свойства объекта в переменную props.
  // Например, при передаче:
}: ButtonProps) {
  return (
    // 📌 Добавляем className к компоненту с вариантами
    <button
      // type={type}
      // className={`rounded-lg font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      // 📌 Другой способ написания className с clsx.
      // clsx Объединяет классы и добавляет условные значения.
      //  Он делает объединение классов и условий удобнее.

      // 🔑 className={clsx(
      //   "rounded-lg font-medium transition", //Постоянные классы
      //   variantClasses[variant], // Классы выбранного варианта кнопки
      //   sizeClasses[size], // Классы выбранного размера
      //   {
      //     "cursor-not-allowed opacity-50": disabled, //Объект с disabled
      //   },
      //   className, // Дополнительные классы, переданные снаружи
      // )}

      // className позволяет передавать произвольные классы
      //variant выбирает предусмотренный стиль

      // 📌 Другой способ написания className с cn() собственной функцией.
      // Раньше мы использовали clsx() и могли получить конфликтующие классы. Теперь cn() объединяет классы и разрешает известные конфликты.
      //       //🔑
      className={cn(
        "rounded-lg font-medium transition px-66",
        variantClasses[variant],
        sizeClasses[size],
        {
          "cursor-not-allowed opacity-50": disabled,
        },
        className,
      )}
      {...props}
      // 🔹 В JSX  {...props}  это spread-синтаксис: он передаёт собранные свойства в настоящий HTML-элемент.
      // Таким образом, компонент не должен вручную объявлять и передавать каждое стандартное свойство кнопки.

      // 🔹 Здесь не требуется создавать отдельный variant="disabled", потому что disabled — это состояние интерактивности, а не обязательно самостоятельный визуальный вариант.
    >
      {children}
    </button>
  );
}
// 📌 Типизация HTML-атрибутов кнопк
// у обычной HTML-кнопки есть и другие свойства:
// - type;
// - disabled;
// - onClick;
// - title;
// - aria-label;
// - name.
// Если мы хотим использовать компонент как полноценную кнопку, полезно разрешить стандартные HTML-атрибуты.
// Для этого React предоставляет тип ButtonHTMLAttributes.

// 📌
// Когда использовать Component Variants, а когда Conditional Classes
// Эти понятия связаны, но не одинаковы.
// Conditional Classes — способ выбирать классы в зависимости от условия.
// <div className={isActive ? "bg-black" : "bg-gray-200"} />

// Component Variants — способ организовать набор заранее определённых оформлений компонента.
// <Button variant="primary" />
// <Button variant="secondary" />

// Внутри Component Variants могут использоваться Conditional Classes, объект классов или специализированные библиотеки.

// 📌 Для нашего shop удобно придерживаться такого подхода:
// для разового условия использовать тернарный оператор;
// для повторно используемых вариантов компонента использовать variant;
// для независимого размера использовать size;
// для реального отключения элемента использовать disabled;
// для дополнительного оформления предусмотреть className.

// 🔹 Создавай новый вариант, если он является частью общего API компонента, а не просто разовым изменением расположения.
