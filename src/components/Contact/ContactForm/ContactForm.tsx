"use client";
import { useRouter } from "next/navigation";

export default function ContacForms() {
  const router = useRouter();

  const handleCLick = () => {
    router.push("/products");
  };

  return (
    <div>
      <h2>Contact form</h2>
      <br />
      <button onClick={() => router.push("/about")}>
        Go to the About page
      </button>
      {/* router.push() → перейти на новый маршрут и добавить его в историю. */}
      <br />
      <br />
      <button onClick={handleCLick}>Go to the Products page</button>
    </div>
  );
}
