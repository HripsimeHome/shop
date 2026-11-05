type CartButtonStatus = "default" | "added" | "unavailable";

type CartButtonProps = {
  status: CartButtonStatus;
};

export default function CartButton({ status }: CartButtonProps) {
  const className =
    status === "added"
      ? "bg-green-600 hover:bg-green-700"
      : status === "unavailable"
        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
        : "bg-black hover:bg-gray-800";

  const label =
    status === "added"
      ? "Added to cart"
      : status === "unavailable"
        ? "Unavailable"
        : "Add to cart";

  return (
    <button
      disabled={status === "unavailable"}
      className={`w-full rounded-lg px-4 py-3 text-white transition ${className}`}
    >
      {label}
    </button>
  );
}
