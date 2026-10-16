//  📌 Объект классов вместо вложенных тернарных операторов
// Когда вариантов становится больше, можно хранить классы в объекте.

type CartButtonStatus = "available" | "added" | "unavailable";


const buttonClasses: Record<CartButtonStatus, string> = {
  available: "bg-black hover:bg-gray-800",
  added: "bg-green-600 hover:bg-green-700",
  unavailable: "bg-gray-300 text-gray-600 cursor-not-allowed",
};

// Тип Record<CartButtonStatus, string> говорит TypeScript, что для каждого значения CartButtonStatus в объекте должна быть строка.

type CartButtonProps = {
  status: CartButtonStatus;
};

export default function CartButton({
  status,
}: CartButtonProps) {
  return (
    <button
      disabled={status === "unavailable"}
      className={`w-full rounded-lg px-4 py-3 text-white transition ${buttonClasses[status]}`}
      // buttonClasses — объект, в котором каждому состоянию соответствует строка классов.
//       Если status равен "added", то:
// buttonClasses["added"]
// возвращает:
// bg-green-600 hover:bg-green-700
    >
      {status === "added"
        ? "Added to cart"
        : status === "unavailable"
          ? "Unavailable"
          : "Add to cart"}
    </button>
  );
}