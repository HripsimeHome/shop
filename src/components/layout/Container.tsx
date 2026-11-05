import type { ReactNode } from "react";
// 🔹 ReactNode — тип, который подходит для содержимого React-компонента: элементов, текста, фрагментов и других допустимых React-значений.

type ContainerProps = {
  children: ReactNode;
  className?: string;
};
 
export default function Container({ children,className = "", }: ContainerProps) {
  return (     
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* bg-orange-100 dark:bg-gray-800  */}
      {children}
    </div>
  );
}
