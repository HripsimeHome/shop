"use client";
import Button from "@/components/Button";

export default function OrderPage() {
  // throw new Error("Тестовая ошибка для Products/orders!");
  return (
    <main>
      <h1>Моя страница</h1>
      <Button className="bg-red-300">Add to cart</Button>
      <br />
      <br />
      <Button className="bg-blue-600">Buy now</Button>
      <br />
      <br />
      <Button className="bg-gray-600">Buy now</Button>

      {/* <button
        className={
          isActive
            ? "rounded-lg bg-black px-4 py-2 text-white"
            : "rounded-lg bg-gray-300 px-4 py-2 text-gray-700"
        }
      >
        Add to cart
      </button> */}
    </main>
  );
}
