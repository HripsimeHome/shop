"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  //  🔹 Хотим разрешать нажатие кнопки Submit, только если:
  // - email не пустой;
  // - пользователь поставил галочку согласия.
  // Создадим переменную:
  // email.trim() — удаляет пробелы в начале и конце строки.

  const isFormValid = email.trim() !== "" && consent;
  // А если пользователь ввёл только пробелы:
  // "   ".trim() === ""
  // Результат — true, поэтому такое значение не пройдёт проверку email.trim() !== "".
  // Оператор && означает, что обе части должны быть истинными.

  //создаёт состояние с начальным значением пустой строки.
  // переменная, в которой находится текущее значение состояния.
  //setValue — функция, с помощью которой мы обновляем состояние.

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    setSubmitted(true);
    console.log("Submitted email:", email);
  }

  // Разберём её:
  // - event — объект события отправки.
  // - React.FormEvent<HTMLFormElement> — тип события формы в React.
  // - event.preventDefault() — отменяет стандартное действие браузера.
  // - console.log(...) — выводит сообщение в консоль для проверки.

  // 🔹Почему нужен preventDefault()
  // По умолчанию HTML-форма может отправить данные и вызвать навигацию или перезагрузку страницы.

  // Когда мы хотим самостоятельно обработать отправку с помощью React, обычно отменяем стандартное поведение:

  // 📌
  //   Что произойдёт:
  // 1. Изначально email равен пустой строке.
  // 2. Пользователь вводит символ.
  // 3. Срабатывает onChange.
  // 4. event.target.value получает новое значение поля.
  // 5. setEmail обновляет состояние.
  // 6. React повторно отображает компонент с актуальным значением.

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6"
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold text-gray-900">
            Stay in the loop
          </h2>

          <p className="text-sm text-gray-500">
            Subscribe to receive product updates and special offers.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="newsletter-email"
            className="text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          {/* 📌 Контролируемый input — это поле, значение которого задаётся через React state. */}
          <input
            type="email"
            id="newsletter-email"
            name="email"
            required
            value={email}
            // value содержит значение поля в виде строки.
            //Чтобы React полностью управлял значением поля, добавим value
            //Здесь value={email} связывает значение поля с состоянием React.
            // value={email} → поле отображает состояние
            // 📌
            // 🔹 value={email} — передаёт значение из состояния в поле.
            // React хранит актуальное значение в состоянии и передаёт его обратно в поле через value.
            // value={email} → поле отображает состояние
            onChange={(event) => setEmail(event.target.value)}
            // 🔹  onChange — отслеживаем ввод пользователя
            // onChange — обработчик, который позволяет реагировать на изменение значения поля.
            // event — объект события, который React передаёт обработчику.
            // event.target — элемент, с которым произошло событие, в данном случае input.
            // event.target.value — текущее значение поля.
            // setEmail(...) — обновляет состояние email этим значением.
            // Например, пользователь вводит hello@example.com. Обработчик получает значение поля и передаёт его в setEmail.

            //🔹 setEmail(newValue)
            // 📌
            //            Запомни разницу:
            // - value={email} — передаёт значение из состояния в поле.
            // - onChange — сообщает React об изменении значения.
            // - setEmail(...) — обновляет состояние.
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 invalid:border-red-500"
          />
        </div>

        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            name="consent"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            // checked показывает, выбран ли checkbox, то есть возвращает true или false.
            // Поле полностью контролируется React благодаря checked={consent} и onChange.
            required
            className="mt-0.5 size-4 accent-black"
          />

          <span>I agree to receive product updates and special offers.</span>
        </label>

        <button
          type="submit"
          disabled={!isFormValid}
          //           Знак ! означает логическое отрицание.
          // - Если isFormValid равен true, то !isFormValid равен false, и кнопка доступна.
          // - Если isFormValid равен false, то !isFormValid равен true, и кнопка отключена.
// 
          className="w-full rounded-lg px-4 py-3 text-sm font-semibold text-black 
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-blue-500
          bg-[var(--color-primary)] 
          hover:bg-lime-400
          transition-colors 
       
           duration-300
          ">        
          Subscribe
        </button>
        {/* transition-colors — плавно изменять цветовые CSS-свойства.
         duration-300 — продолжительность перехода 300 миллисекунд. */}
        {/* 
        
        📌 Что такое неконтролируемый input
До этого мы использовали контролируемые поля, где React хранит значение в useState.
Есть и другой подход — неконтролируемый input. В этом случае текущее значение хранится непосредственно в DOM, а React не обновляет отдельное состояние при каждом вводе. */}
      </form>
    </div>
  );
}


// 📌 Правила
// - useState хранит значения формы и позволяет React обновлять интерфейс.

// - value связывает текстовое поле с состоянием.

// - checked связывает checkbox с булевым состоянием.

// - onChange обрабатывает изменение поля.

// - event.target.value используется для чтения текстового значения, а event.target.checked — для состояния checkbox.

// - TypeScript часто автоматически определяет тип события; при необходимости можно использовать React.ChangeEvent<HTMLInputElement>.

// - onSubmit обрабатывает отправку формы.

// - event.preventDefault() отменяет стандартную отправку браузера, но не отправляет данные на сервер.

// - React.FormEvent<HTMLFormElement> — тип события отправки формы.

// - disabled={!isFormValid} отключает кнопку, пока условие не выполнено.

// - required и type="email" помогают браузеру выполнять встроенную проверку данных.

// - Контролируемые поля используют value или checked вместе с обработчиком изменения; неконтролируемые часто используют defaultValue или defaultChecked.

// - Клиентская проверка не заменяет серверную валидацию.
