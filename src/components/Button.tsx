// import type { ReactNode } from "react";

// type CardProps = {
//   children: ReactNode;
//   className?: string;
// };

// 📌 Типизация children и className
// ReactNode — тип для содержимого, которое React может отображать: например, строки, числа, JSX-элементы, массивы допустимых узлов и другие подходящие значения.
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  //  className?: string;  - подходит когда
  // компонент должен принимать произвольные дополнительные классы
  isActive: Boolean;
};

// ButtonProps описывает типы входных свойств компонента
// children: React.ReactNode - позволяет передавать внутрь компонента текст, JSX и другие допустимые React-узлы.

export default function Button({
  children,
  isActive,
  className = "",
}: ButtonProps) {
  // передавем className в React-компоненты
  return (
    //     У переиспользуемых компонентов часто есть два свойства:
    // - children — содержимое компонента;
    // - className — дополнительные CSS-классы.
    <button className={`rounded-lg px-4 py-2 text-white ${className}`}>
      {children}
    </button>
  );
}
