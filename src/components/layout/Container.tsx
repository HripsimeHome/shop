import type { ReactNode } from "react";
// 🔹 ReactNode — тип, который подходит для содержимого React-компонента: элементов, текста, фрагментов и других допустимых React-значений.

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-full max-w-[1190px] bg-orange-100 mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
