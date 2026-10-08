"use client";

import { useRouter } from "next/navigation";
// useRouter() является React Hook от Next.js. Поэтому мы используем его внутри компонента

export default function GoToAboutn() {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/about")}>Go to About page</button> // говорит: Перейти на /about.
  );
}
