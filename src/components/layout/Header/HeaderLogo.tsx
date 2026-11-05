import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold tracking-tight text-gray-900"
    >
      Shop
    </Link>
  );
}