import Link from "next/link";
import { ShoppingCart } from "lucide-react";

type CartButtonProps = {
  count: number;
};

export default function CartButton({
  count,
}: CartButtonProps) {
  return (
    <Link
      href="/cart"
      aria-label={`Shopping cart, ${count} items`}
      className="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100"
    >
      <ShoppingCart size={24} />

      {count > 0 && ( //Это условный рендеринг через логический оператор &&.
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-semibold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}