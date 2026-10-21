import { cn } from "@/lib/utils";
//cn() — распространённый пользовательский helper, объединяющий clsx и twMerge.
// className позволяет передавать дополнительные стили, а cn() помогает корректно объединять их с внутренними классами.

type CNButtonProps = {
  className?: string;
};

export default function CNButton({ className }: CNButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg px-4 py-2 bg-blue-600 text-white",
        "px-8 bg-green-600",
        //  📌 Она не всегда понимает конфликты между произвольными CSS-свойствами и обычными Tailwind-классами.
        //     className={cn("p-44", "[padding:1rem], bg-green-600")}
      )}
    >
      {/* Результирующие классы: rounded-lg py-2 text-white px-8 bg-green-600 */}
      {/* название cn можно выбрать самостоятельно. cn часто используют как сокращение от class names. */}
      {/* cn() объединяет классы и разрешает известные конфликты. */}
      CNButton
    </button>
  );
}
