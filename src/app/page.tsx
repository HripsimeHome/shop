//import Image from "next/image";
import Link from "next/link";
// Используй Link, если: у тебя есть обычная навигационная ссылка:
// Link
//   ↓
// переход по ссылке
import styles from "./page.module.css";
//import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={1lab(81.28% -39.71 37.64)28% -39.71 37.64)28% -39.71 37.64)28% -39.71 37.64)55% -40.29 38.49)55% -40.29 38.49)15% -31.11 29.34)16% -29.07 10.59)99% -32.14 29.1)19% -51.84 50.97)11% -23.86 21.13)57% -18.68 -0.22)87% -25.26 20.77)7% -26.29 20.5)41% -40.08 31.68)4% 0 0)
          height={20}
          priority
        /> */}
        <div className={styles.intro}>
         
          <p>My shop project</p>
          {/* <Button /> */}
        </div>
        {/* можно задавать прозрачность цвета через / т.е. bg-blue-600/50 
        Это означает: blue-500 +90% opacity */}
        <div className="w-[421px] max-w-[820px] rounded-xl bg-blue-600/90 hover:bg-blue-700 p-6 text-white font-mono">
          bg-blue-500/50 Прозрачность применяется к цвету background. font-mono
          <h1 className="text-2xl font-bold">Tailwind CSS is working!</h1>
          <p className="mt-2 text-blue-100 line-through">My shop project</p>
        </div>
        <br />
        <div className="bg-blue-600 opacity-60">
          opacity-50 Прозрачность применяется ко всему элементу и его
          содержимому. прозрачным становится весь элемент вместе с текстом.
        </div>
        <br />
        {/* Можно даже использовать CSS-функции: */}
        <div className="w-[calc(100%-32px)] bg-blue-300 text-white text-4xl font-semibold leading-[1.6] uppercase underline decoration-6 decoration-dashed">
          Calc - text-4xl and leading-[1.6]
        </div>
        {/* Можно даже использовать CSS-функции: */}
        <br />
        {/* Произвольный размер  - особенно полезен для адаптивной типографики:  text-[clamp(2rem,5vw,4rem)] */}
        <div className="w-[var(--content-width)] bg-blue-100 font-thin text-[19px] leading-relaxed tracking-widest text-justify md:text-left">
          Content-width via CSS var; text-[19px] and font-thin and
          leading-relaxed tracking-widest - управляет расстоянием между буквами.
          text-justify md:text-left
        </div>
        <br /> <br /> <br />
        <div className="-mt-6">Отрицательные значения margin-top: -6px</div>
        <div className="w-96 bg-[#3ea644] text-[#d0fb99] leading-tight border border-[red] hover:text-olive-700">
          Не всегда нам подходит стандартная палитра Tailwind. Например,
          дизайнер дал конкретный цвет: Можно использовать его напрямую:
          leading-loose
        </div>
        <br />
        w-full = width: 100%; → относительно родительского элемента. w-screen =
        width: 100vw; → относительно viewport.
        <div className="w-screen bg-orange-100">
          w-screen = width: 100vw; → относительно viewport.
        </div>
        <br />
        <br />
        <br />
        <p className="w-[150px] truncate">
          Apple iPhone 17 Pro Max Smartphone with Advanced Camera
        </p>
        <br />
        break-words позволяет длинному слову переноситься, если оно не
        помещается.
        <p className="w-[100px] break-words">
          VeryLongProductNameThatCouldBreakTheLayout
        </p>
        <br />
        <p className="w-[140px] line-clamp-2">
          This is a very long product description that should not occupy too
          much space inside the product card.
        </p>
        <br />
        <br />
        space-* Предназначен для расстояния между последовательными соседними
        дочерними элементами.
        <div className="flex space-x-4">
          <div className="bg-gray-200">First</div>
          <div className="bg-gray-200">Second</div>
          <div className="bg-gray-200">Third</div>
        </div>
        space-x-4 не сработал
        <br />
        <div className="space-y-4">
          <span className="block">First space-</span>
          <span className="block">Second space</span>
          <span className="block">Third space-</span>
        </div>
        <br />
        gap-* Работает через CSS gap.
        <div className="flex gap-4">
          <button>Save</button>
          <button>Cancel</button>
        </div>
        {/* currentColor Оно означает: Используй текущий цвет текста элемента. В
        Tailwind это может быть полезно для SVG и иконок. Например:
        <div className="text-blue-600">
          <svg className="size-6 fill-current">...</svg>
        </div> */}
        {/* <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>         
        </div> */}
      </main>
    </div>
  );
}

// 📌 page.tsx отвечает за содержимое конкретного маршрута.
