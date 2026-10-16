import type { Metadata } from "next";
import ContactForm from "@/components/Contact/ContactForm/ContactForm";

// Используй useRouter(), если: переход является результатом программной логики:
// кнопка
// форма
// условие
// успешная операция
// выход
// авторизация
//❌ Не нужно делать кнопку только ради обычной ссылки:

export const metadata: Metadata = {
  title: "Contacts",
  description: "Contat Us for the products",
  keywords: ["about shop", "shop", "online store"],
};

export default function Contacts() {
  return (
    <div>
      <h2>Contacts page ddd</h2>
      {/* col-span-full- Он означает:
Занять все доступные колонки. */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">Location map</div>
        <div className="col-span-8">Address</div>
      </div>
      <ContactForm />
    </div>
  );
}
