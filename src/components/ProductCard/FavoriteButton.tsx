// import clsx from "clsx";

type FavoriteButtonProps = {
  isFavorite: boolean;
};

// Поэтому для строковых className лучше писать явно:
export default function FavoriteButton({ isFavorite }: FavoriteButtonProps) {
  return (
    // 📌 Условные классы с &&
    // Если isFavorite равен true, условное выражение возвращает строку классов.
    // Если isFavorite равен false, оно возвращает false. При интерполяции в строку это значение превращается в текст "false", а не в класс Tailwind. Браузер не применит его как CSS-класс, но такая строка выглядит неаккуратно.
    // <button
    //   className={`rounded-full border p-2 ${
    //     isFavorite && "border-red-500 text-red-600"
    //   }`}
    // >
    //   ♥
    // </button>

    <button
      className={`rounded-full border p-2 ${
        isFavorite ? "border-red-500 text-red-600" : ""
      }`}
    >
      ♥
    </button>
  );
}

// 📌 Условное оформление с clsx

// clsx объединяет переданные значения в строку классов и игнорирует неподходящие значения, например false, null и undefined.

// export default function FavoriteButton({ isFavorite }: FavoriteButtonProps) {
//   return (
//     <button
//       className={clsx(
//         "rounded-full border p-2",
//         isFavorite
//           ? "border-red-500 text-red-600"
//           : "border-gray-300 text-gray-500",
//       )}
//     >
//       ♥
//     </button>
//   );
// }
