"use client";

export default function NewsletterFormExamples() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    console.log(email);
  }

  //📌 Здесь event.currentTarget — именно форма, на которой установлен обработчик. FormData собирает значения полей, имеющих атрибут name

  return (
    <div>
      <h1>NewsletterFormExamples Component examples</h1>
      <form className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6">
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

          <input
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            // className="w-full rounded-lg border border-gray-300 focus:border-blue-500 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400"

            className="rounded-lg bg-gray-100 px-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-black"
        >
          Subscribe
        </button>
        <p>Additional examples</p>
        <button
          type="submit"
          disabled
          className="rounded-lg bg-gray-200 px-4 py-3 text-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Disabled
        </button>
        {/* <button
          type="button"
          className="bg-gray-200 px-4 py-3 enabled:bg-[var(--color-primary)] disabled:opacity-50"
        >
        enabled
        </button> */}
        required field
        <input
          type="email"
          placeholder="you@example.com"
          required
          className="rounded-lg border border-gray-300 px-4 py-3 border-2  focus:outline-none required:border-amber-500 focus:border-[var(--color-primary)]"
        />
        optional field
        {/* optional: применяется, если поле не имеет атрибута required. */}
        <input
          type="text"
          className="rounded-lg border border-gray-300 px-4 py-3 optional:border-green-00"
        />
        invalid: и valid: — проверка введённых данных
        {/*  📌
Браузер умеет проверять некоторые поля на основании HTML-атрибутов.
- invalid:border-red-500 — красная граница, когда поле не проходит встроенную проверку.
- valid:border-green-600 — зелёная граница, когда поле проходит её.
Для type="email" браузер проверяет формат email. Для required пустое поле считается недопустимым при проверке.

Однако до ввода данных пустое обязательное поле может сразу соответствовать состоянию invalid. Поэтому в реальной форме не всегда стоит показывать ошибку сразу после загрузки страницы.
Здесь у поля есть базовый стиль, красная граница для недопустимого значения и отдельный индикатор фокуса.

Помни: invalid: работает на основе встроенной HTML-валидации. Он сам по себе не создаёт сообщение об ошибке и не проверяет данные на сервере. */}
        <input
          type="email"
          // required: проверяет наличие атрибута required, а не факт того, что пользователь заполнил поле.
          placeholder="you@example.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 invalid:border-red-500 valid:border-green-600"
        />
        Модификатор checked:
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            name="consent"
            className="size-4 accent-black checked:accent-green-600"
          />
          I agree to receive product updates.
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="delivery"
            value="standard"
            className="accent-black"
            // Здесь accent-black не работает с другим цветом ??????
          />
          Standard delivery
        </label>
        placeholder-shown: — пока поле пустое Этот модификатор применяется,
        когда в поле отображается placeholder.
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded-lg border border-orange-300 px-4 py-3 placeholder-shown:bg-orange-100"
        />
        <input
          type="email"
          name="email"
          defaultValue=""
          // 🔹  defaultValue задаёт начальное значение неконтролируемого поля.
        />
        <p>FormData</p>
        <input type="checkbox" defaultChecked={false} />
        defaultChecked задаёт начальное состояние галочки. Для получения
        значения неконтролируемого поля при отправке можно использовать
        FormData:
        <button
          className="w- rounded-lg text-sm font-semibold text-black px-4 py-3            
          bg-[var(--color-primary)] 
          hover:bg-lime-400
          border-2
          border-black-200
           transition-colors duration-300"
        >
          transition-colors
        </button>
        <button
          className="w- rounded-lg text-sm font-semibold text-black px-4 py-3            
          bg-[var(--color-primary)] 
          hover:bg-lime-400
          hover:opacity-50
          border-2
          border-black-200
           duration-300            
           opacity-100 
           transition-opacity"
        >
          transition-opacity
        </button>
        <p>
          лавно изменяет трансформации: перемещение, масштабирование и поворот
        </p>
        <button
          className="w- rounded-lg text-sm font-semibold text-black px-4 py-3            
          bg-[var(--color-primary)] 
          hover:bg-lime-400    
          hover:scale-105          
          transition-transform
          duration-300"
        >
          transition-transform; hover:scale-105
        </button>
         <button
          className="w- rounded-lg text-sm font-semibold text-black px-4 py-3            
          bg-[var(--color-primary)] 
          hover:bg-lime-400    
          hover:scale-y-200        
          transition-transform
          duration-300"
        >
          transition-transform;   hover:scale-y-200   
        </button>
        transition-all - Добавляет переход для всех CSS-свойств, которые
        Tailwind включает в этот utility-класс.
        <button
          className="w- rounded-lg text-sm font-semibold text-black px-4 py-3            
          bg-[var(--color-primary)]     
          hover:bg-gray-100
          hover:scale-105 
          transition-all
           duration-300"
        >
          transition-all
        </button>
        <button
          className="w- rounded-lg text-sm font-semibold text-black px-4 py-3            
          bg-[var(--color-primary)]     
          hover:bg-gray-100
           transition-shadow"
        >
          transition-shadow
        </button>
        <strong>duration</strong> -*продолжительность перехода. Задаёт, сколько
        времени занимает переход.
        <button className="transition-colors duration-[450ms] bg-gray-300 hover:bg-gray-700">
          Arbitrary value duration-[450ms]
        </button>
        ease-* — характер движения
        {/* duration-* отвечает за время, а ease-* — за то, как меняется скорость перехода на протяжении этого времени.

Например, движение может начинаться быстро и заканчиваться медленно либо разгоняться постепенно. */}
        <button className="bg-gray-300 hover:bg-gray-500 transition-transform duration-300 ease-out hover:scale-105">
          ease-out
        </button>
        delay-* — задержка перед переходом delay-* задаёт время, через которое
        начнётся переход после изменения состояния.
        <button className="bg-gray-400 hover:bg-orange-400 transition-colors delay-[250ms] duration-300 hover:bg-gray-700 active:bg-lime-300 ">
          Click: delay-[250ms]; active:bg-lime-500
        </button>
        transition-all — переход для поддерживаемых свойств.
        <button
          className=" rounded-xl
    border border-gray-200
    bg-green-400 p-4
    shadow-sm
    transition-all 
    duration-300 
    ease-out
 
    hover:-translate-y-1
    hover:shadow-lg"
        >
          hover:-translate-y-1
        </button>
        transition-[transform,box-shadow] - Так код явно сообщает, что плавно
        изменяются только трансформация и тень.
        <button
          className="rounded-xl border border-gray-200
          bg-white p-4 shadow-sm
          transition-[transform,box-shadow]
          duration-300 ease-out
          hover:-translate-y-1 hover:shadow-lg"
        >
          {" "}
          transition-[transform,box-shadow]
        </button>
        {/* 📌 transition-[color,background-color,border-color,opacity] 
            если действительно нужно плавно менять много разных свойств, использовать transition-all. */}
        <button
          type="button"
          disabled
          className="
            rounded-lg bg-black px-5 py-3
            font-semibold text-white
            transition-colors duration-200
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-blue-500
            disabled:cursor-not-allowed
            disabled:opacity-50"
        >
          Transition вместе с focus и disabled
        </button>
rotate-* — поворот
        <button
  type="button"
  className="
    group inline-flex items-center gap-2
    rounded-lg border border-gray-300
    px-4 py-2 "
>
  <span>More details</span>

  <span className="transition-transform duration-200 group-hover:-rotate-45">
    ↓
  </span>
  </button>
  <br />
 При наведении элемент:
- немного увеличивается;
- поднимается;
- слегка поворачивается.

<button
  className="
  bg-green-400 w-full
    transition-transform duration-300 ease-out
    hover:scale-105
    hover:-translate-y-1
    hover:rotate-1
  "
>
   hover:scale-105
    hover:-translate-y-1
    hover:rotate-1
</button>

<div className="relative overflow-hidden rounded-xl bg-gray-100 p-6">
rotate-12; overflow-hidden
  <div className="absolute -right-4 top-4 h-20 w-20 rotate-12 bg-[var(--color-primary)]" />
</div>
    Поворот на 7 градусов.
      <button className="bg-green-400 rotate-[7deg]">
 rotate-[7deg]
</button>

 <button className="bg-green-400 transition-translate skew-y-6">
skew-y-6
</button>

<button className="bg-green-200 transition-translate translate-x-6">
  ranslate-x-6 сдвигает элемент вправо
</button>

<button className="bg-green-200 transition-translate -translate-x-8">
  -ranslate-x-8 сдвигает элемент влево
</button>

<button className="bg-green-200 transition-translate translate-x-1/2">
translate-x-1/2	Вправо на половину собственной ширины  
</button>

Пример: поворот стрелки
Класс origin-* меняет точку, вокруг которой выполняется трансформация.
<button className="inline-block origin-center rotate-45">
origin-center  →
</button>
  </form>

    </div>
  );
}
