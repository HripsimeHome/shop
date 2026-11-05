"use client";
import { useState } from "react";
import clsx from "clsx";

 

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = (): void => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={handleToggleFavorite}
      aria-pressed={isFavorite}
      aria-label={
        isFavorite ? "Remove from favorites" : "Add to favorites"
      }
      className={clsx(
        "mt-4 cursor-pointer rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-colors duration-200",
        {
          "border-green-600 bg-red-600 text-white": isFavorite,
          "border-border-default bg-surface text-text-primary": !isFavorite,
        }
      )}
    >
      {isFavorite ? "♥ In favorites" : "♡ Add to favorites"}
    </button>
  );
}

// 🔑 Вариант с props:
// type FavoriteButtonProps = {
//   initialIsFavorite?: boolean;
// };

// export default function FavoriteButton({
//   initialIsFavorite = false,
// }: FavoriteButtonProps) {
//   const [isFavorite, setIsFavorite] = useState<boolean>(
//     initialIsFavorite
//   );
//  const handleToggleFavorite = (): void => {
//     setIsFavorite((prev) => !prev);
//   };
