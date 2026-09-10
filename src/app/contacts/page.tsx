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
      <h2>Contacts page</h2>
      <ContactForm />
    </div>
  );
}
