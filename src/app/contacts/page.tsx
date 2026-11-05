 
import type { Metadata } from "next";
import Container from "@/components/layout/Container"
import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import NewsletterForm from "@/components/NewsletterForm/NewsletterForm";
import NewsletterFormExamples from "@/components/NewsletterForm/NewsletterFormExamples";
import SectionTitle from '@/components/ui/SectionTitle';

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
    <Container>     
    <SectionTitle className="pt-4">Contacts page via SectionTitle component - pt-4
      </SectionTitle>      
      <form className="w-full max-w-md mx-auto flex flex-col gap-4">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="
          w-full
          rounded-lg
          border 
          border-gray-300 
          focus:border-blue-900 
          focus:outline-none           
          bg-white 
          px-4 
          py-3 
          text-sm
          text-gray-900 
          placeholder:text-gray-400"
        />

        {/* 📌 Важно: если убрать стандартный контур через focus:outline-none, нужно предусмотреть другой заметный индикатор фокуса. Иначе пользователю клавиатуры будет сложнее понять, какое поле выбрано.  Применим: focus:outline-2 focus:outline-blue-500"*/}
        {/* Теперь при фокусе поле получает синюю границу и контур. */}
        <input className=" bg-white rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-2 focus:outline-blue-500" />

        {/* focus:outline-none  - Убирает стандартный контур браузера */}
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          rows={4}
          // В JSX это числовое значение, поэтому фигурные скобки нужны для передачи числа 4, а не строки "4".
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400"
        />

        <label htmlFor="category" className="text-sm font-medium text-gray-700">
          Category
        </label>

        <select
          id="category"
          name="category"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900"
        >
          <option value="">All categories</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
        <button
          type="submit"
          className="w-full rounded-lg bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-black"
        >
          Subscribe
        </button>
      </form>
      <br />
      <NewsletterFormExamples />
      <br />
      NewsletterForm
      <NewsletterForm />
      {/* <ContactForm /> */}
    </Container>
  );
}
