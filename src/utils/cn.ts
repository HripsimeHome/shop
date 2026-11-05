import { clsx, type ClassValue } from "clsx"; // ClassValue — TypeScript-тип значений, которые поддерживает clsx.
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
  // 📌 ...inputs: ClassValue[]. Это rest-параметр функции. Он позволяет передавать любое количество аргументов, например: cn("flex", "gap-4", "px-6");

  //   📌Внутри функции inputs будет массивом значений.
  // twMerge(clsx(inputs))
  // Сначала clsx(inputs) формирует строку классов, а затем twMerge() удаляет распознанные конфликты.
  // Теперь вместо двух отдельных вызовов в компонентах мы сможем использовать одну функцию.
}
