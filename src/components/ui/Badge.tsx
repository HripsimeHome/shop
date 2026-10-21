import { ReactNode } from "react";

type BadgeVariant = "sale" | "new" | "outOfStock";

type BadgeProps = {
  children: ReactNode;
  variant: BadgeVariant;
};

const badgeClasses: Record<BadgeVariant, string> = {
  sale: "bg-red-100 text-red-700",
  new: "bg-green-100 text-green-700",
  outOfStock: "bg-gray-100 text-gray-600",
};

export default function Badge({ children, variant }: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-md px-2 py-1 text-xs font-semibold ${badgeClasses[variant]}`}
    >
      {children}
    </span>
  );
}
