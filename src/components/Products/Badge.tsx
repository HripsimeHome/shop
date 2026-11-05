const colorClasses = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
};

type Color = keyof typeof colorClasses;

type BadgeProps = {
  color: Color;
};

export default function Badge({ color }: BadgeProps) {
  return (
    <span className={`rounded px-3 py-1 text-white ${colorClasses[color]}`}>
      Status
    </span>
  );
}
