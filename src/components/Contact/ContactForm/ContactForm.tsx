"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import CartButton from "@/components/ProductCard/ProductCardButtonConditional.tsx";
import ButtonVariant from "@/components/ui/ButtonVariant";

export default function ContacForms() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const isDisabled = !email.trim() || !accepted;

  const handleCLick = () => {
    router.push("/products");
  };

  return (
    <div className="min-w-64 max-w-7xl mx-auto bg-green-300">
      <div className="grid grid-cols-12 gap-4 my-4">
        <div className="col-span-4">Location map col-span-4</div>
        <div className="col-span-8">Address col-span-8</div>
      </div>
      {/* max-w-full означает max-width: 100%; */}
      <h2 className="max-w-full bg-green-400 text-3xl text-black/50">
        Contact form text-black/50
      </h2>
      <br />
      <button onClick={() => router.push("/about")} className="border">
        Go to the About page
      </button>
      {/* router.push() → перейти на новый маршрут и добавить его в историю. */}
      <br />
      <br />
      <button onClick={handleCLick}>Go to the Products page</button>
      <br />
      <br />
      {/* display: inline-block	Строчное отображение с возможностью задавать размеры */}
      Form
      <form className="max-w-md space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus-visible:border-black focus-visible:ring-2 focus-visible:ring-gray-200"
          />
        </div>

        <label className="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
            className="size-5 accent-black"
          />

          <span>I agree to receive updates.</span>
        </label>

        <button
          type="submit"
          disabled={isDisabled}
          className="w-full rounded-lg bg-black px-5 py-3 text-white transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:hover:bg-gray-200"
        >
          Subscribe
        </button>
      </form>
      <br />
      <br />
      {/* displ

      <div className="hidden md:block size-30 bg-green-700 text-white">
        width abd height via size
      </div>
      <br />
      <div className="w-full h-full bg-green-500">w-full h-full</div>
      <br />
      <div className="size-full bg-green-500">
        size-full - Это означает: width: 100%; height: 100%;
      </div>
      <br />
      <div className="size-auto bg-green-500">
        size-auto - Это означает: width: auto; height: auto;
      </div>
      <br />
      <p className="w-[437px] h-[100px] bg-green-400 border-2 border-black/20 ">
        w-[437px] border-black/20
      </p>
      <br />
      {/* opacity-50   означает:
Сделать прозрачным весь элемент и всё его содержимое. продолжает занимать место*/}
      {/* В отличие от hidden, прозрачный элемент может продолжать участвовать во взаимодействии, например получать события указателя или фокус клавиатуры, если другие свойства и атрибуты это допускают. */}
      <div className="w-1/2 bg-green-400 opacity-50 hover:opacity-0">
        Fraction widths: w-1/2 означает: width: 50%; with opacity 50%
      </div>
      <br />
      <p className="w-3/4 bg-green-400 opacity-100">w-3/4 - 75% 300/4 = 75%</p>
      <br />
      <div className="w-[52%] bg-green-400 opacity-70 transition-opacity">
        Проценты Можно использовать arbitrary values: Но для стандартных случаев
        Tailwind имеет удобные utilities: w-1/2 w-1/3 w-2/3
      </div>
      <br />
      <div className="w-full bg-green-100 border-dotted border-3 border-b-6 border-[#DBEC62] hover:border-blue-300">
        width: fit-content; То есть элемент старается занимать ширину,
        необходимую его содержимому.
        <br /> Кнопка не будет растягиваться на всю ширину.
        <button className="w-fit bg-green-400 px-4 py-4 my-6 mx-6 border border-orange-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
          Add to cart 1
        </button>
        {/* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        В Tailwind пробелы внутри arbitrary value записываются через _: */}
        <button className="w-fit bg-green-400 px-4 py-4 my-6 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          Add to cart 2
        </button>
        <button className="size-16 bg-green-400 px-4 py-4 my-6 mx-6 rounded-full">
          Add
        </button>
        <button className="size-16 bg-green-400 px-4 py-4 my-6 mx-6 rounded-l-2xl focus:outline-2">
          Add outline
        </button>
        <button className="size-16 bg-green-400 px-4 py-4 my-6 mx-6 rounded-tl-2xl border shadow-lg">
          Add
        </button>
        <br />
        <button className="rounded-xl border border-gray-200 shadow-sm">
          Product
        </button>
      </div>
      <br />
      <div>
        w-min и w-max Tailwind также имеет: w-min w-max w-fit w-min width:
        min-content; w-max width: max-content; w-fit width: fit-content; Это уже
        более продвинутый контроль размеров. На практике w-fit встречается
        заметно чаще.
      </div>
      <br />
      <br />
      <button disabled className="disabled:opacity-50">
        Add to cart
      </button>
      {/* <div className="aspect-square bg-green-400">
        Когда нужно сохранить пропорции блока, используется aspect-*.То есть:
        width : height 1 : 1
      </div> */}
      <br />
      <br />
      {/* Здесь: flex-1 у input означает: Занять всё доступное пространство, которое
      осталось после кнопки.
      занимает оставшееся место. */}
      <div className="flex items-center gap-4">
        <input
          className="flex-1 rounded-lg border px-4 py-2"
          placeholder="Search products"
        />
        <button className="rounded-lg bg-black px-4 py-2 text-white">
          Search
        </button>
      </div>
      <br />
      <br />
      {/* Теперь обратная ситуация:
flex-none означает, что элемент не должен растягиваться или сжиматься за счёт flex-grow/flex-shrink.  flex-none запрещает flex-элементу расти и сжиматься.*/}
      {/* flex-1 не означает width: 100% flex-1 работает через flex-модель, то есть учитывает свободное пространство внутри Flex-контейнера.
Content занимает оставшееся пространство, а не обязательно всю ширину контейнера. */}
      <div className="flex">
        <div className="flex-1 bg-blue-200">Content</div>
        <button className="flex-initial">Buy</button>
      </div>
      <br />
      <br />
      flex-auto - Он соответствует комбинации поведения: flex: 1 1 auto; То есть
      элемент: - может увеличиваться; - может уменьшаться; - использует свой
      исходный размер как основу.
      <div className="flex gap-4">
        <div className="flex-auto">Content 1</div>
        <div className="flex-auto">Content 2</div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-12 bg-blue-300">
        <div className="col-span-full bg-blue-200">
          col-span-full - чтобы элемент занимал всю ширину сетки. col-span-full
          заставляет элемент охватывать все колонки текущей сетки. Он означает:
          Занять все доступные колонки. Это удобно для элементов, которые должны
          растянуться на всю сетку.
        </div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="row-span-2">Large block</div>

        <div>Second</div>
        <div>Third</div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-[240px_1fr_300px]">
        grid grid-cols-[240px_1fr_300px] Получим
        ┌────────┬────────────────┬───────────┐ │ 200px │ 1fr │ 300px
        └────────┴────────────────┴───────────┘
      </div>
      <br />
      <br />
      <div className="grid grid-cols-[240px_1fr] gap-8 bg-orange-200">
        <aside>Sidebar- фиксированная ширина sidebar - 240px.</aside>
        <main>Content - оставшееся пространство. - 1fr</main>
      </div>
      <br />
      <br />
      {/* className="grid grid-cols-[minmax(0,1fr)_300px]" 
 Здесь minmax(0,1fr) позволяет первой колонке сжиматься вплоть до нулевого минимального размера Grid-дорожки. Это часто помогает избежать проблем с длинным текстом или содержимым, которое иначе может расширять колонку. */}
      {/* Важное различие
minmax() не гарантирует, что всё содержимое автоматически поместится без переполнения. Для длинного текста могут дополнительно потребоваться, например, min-w-0 или break-words. */}
      <div className="grid grid-cols-[minmax(200px,1fr)_2fr] gap-6">
        <aside>
          Sidebar - minmax(200px, 1fr)
          <br /> minmax() полезен, когда колонка не должна становиться слишком
          узкой, но при этом может увеличиваться.
        </aside>
        <main>Main content - 2fr</main>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
        - repeat() — повторяет шаблон колонок. - auto-fit — подбирает количество
        колонок, которые могут поместиться в доступном пространстве, и позволяет
        растягивать их при наличии свободного места. - minmax(220px, 1fr) —
        каждая колонка имеет минимальный размер 220px, а её максимальный размер
        зависит от свободного пространства. Например, на широком экране могут
        поместиться четыре карточки, а на более узком — две или одна.
      </div>
      <br />
      <br />
      <p className="w-[600px]">
        Чем auto-fit отличается от auto-fill?
        <br /> Оба варианта стараются разместить максимально возможное число
        колонок. - auto-fit схлопывает пустые дорожки, чтобы существующие
        колонки могли занимать дополнительное пространство. - auto-fill
        сохраняет место для дорожек, которые могли бы поместиться, даже если
        соответствующих элементов недостаточно.
      </p>
      <br />
      <br />
      {/* Для сетки из 12 колонок существует 13 вертикальных линий.
      Поэтому col-start-1 col-end-5 занимает четыре колонки: от первой линии до пятой.
      Когда использовать col-span, а когда col-start / col-end?
Используй:
col-span-4 - когда нужно просто занять четыре колонки.
Используй: col-start-3 col-end-7 -когда нужно явно контролировать положение элемента в сетке. */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-1 col-end-5">Sidebar</div>
        <div className="col-start-5 col-end-13">Main content</div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-3 grid-rows-3 gap-4 bg-orange-100">
        <div className="row-start-1 row-end-3 bg-blue-300">
          row-start-1 row-end-3- Первый элемент занимает две строки: от первой
          горизонтальной линии до третьей.
        </div>

        <div>
          Card 2 - Если задача простая, обычно удобнее row-span-*. Если
          требуется точное позиционирование, полезны row-start-* и row-end-*
        </div>
        <div className="row-span-2 bg-blue-100">Card 3 - row-span-2</div>
        <div className="row-start-2 row-end-4 bg-blue-400">
          Card 4 - row-start-2 row-end-4
        </div>
      </div>
      <br />
      <br />
      <p>
        grid-flow-row - но можно не писать. По умолчанию Grid автоматически
        размещает элементы в строках.
      </p>
      <div className="grid grid-flow-row grid-cols-3 gap-4">
        <span>1</span>
        <span>2</span>

        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
      </div>
      <br />
      <br />
      <p>grid-flow-col grid-rows-3</p>
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <span>1</span>
        <span>2</span>

        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
      </div>
      <br />
      <br />
      <div className="grid grid-flow-row-dense grid-cols-3 gap-4">
        <div>FIrst</div>
        dense разрешает алгоритму автоматического размещения возвращаться к
        ранее оставленным пустым местам, чтобы плотнее заполнить сетку.
        <div>Second</div>
      </div>
      <br />
      <br />
      <div className="grid grid-flow-col auto-cols-fr gap-4">
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </div>
      <br />
      <br />
      <p>Автоматически создаваемые колонки получают размер minmax(0, 1fr).</p>
      <div className="grid grid-cols-3 auto-rows-fr gap-4 border">
        <div>Card 1 - auto-rows-fr</div>
        <div>Card 2 </div>
        {/* При наличии определённой высоты Grid-контейнера это позволяет распределять строки по долям доступного пространства. Без заданной высоты поведение не обязательно даст визуально одинаковые карточки во всех случаях. */}
        <div>Card 3</div>
        <div>Card 4</div>
        <div>Card 5</div>
        <div>Card 6</div>
      </div>
      <div className="grid grid-cols-3 auto-rows-fr gap-4 border-2 mt-6">
        <div>Card 1 - auto-cols-fr</div>
        <div>Card 2</div>
        <div>Card 3</div>
        <div>Card 4</div>
        <div>Card 5</div>
        <div>Card 6</div>
      </div>
      <br />
      <br />
      <strong>
        place-items-center выравнивает элементы внутри своих ячеек;
      </strong>
      <div className="grid place-items-center">
        <span>
          place-items-center - сокращение для выравнивания элементов по обеим
          осям: <br />
          place-items-center объединяет: align-items: center; justify-items:
          center;
        </span>
      </div>
      <br />
      <br />
      если нужно разместить иконку по центру ячейки: grid size-12
      place-items-center rounded-full
      <div className="grid size-12 place-items-center rounded-full bg-gray-100">
        <span>+</span>
        {/* можно и без span */}
      </div>
      <strong>
        place-content-center выравнивает сетку целиком внутри контейнера.
      </strong>
      <br />
      <div className="grid place-content-center gap-4">
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </div>
      <br />
      <br />
      place-self-* позволяет выровнять один конкретный элемент внутри его
      Grid-области.
      <div className="grid grid-cols-3 gap-4">
        <div className="place-self-start">First</div>
        <div className="place-self-center">Second</div>
        <div className="place-self-end">Third</div>
      </div>
      <br />
      <p>
        Здесь важно различать: <br />
        - place-items-* — выравнивание элементов в целом;
        <br />
        - place-content-* — выравнивание всей сетки; -
        <br />
        place-self-* — выравнивание одного элемента.
      </p>
      <br />
      <br />
      <article className="relative">
        <h2>Wireless Headphones</h2>

        <span className="absolute right-2 top-2">New</span>
      </article>
      <br />
      inset-x-0 Задаёт одновременно left: 0 и right: 0.
      <br /> <br />
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0">
          Product informationффг
        </div>
      </div>
      <br /> <br />
      Отрицательные значения позиционирования Иногда бейдж должен немного
      выступать за пределы карточки.
      <br />
      absolute -right-2 -top-2
      <article className="relative mt-4 rounded-xl border p-6">
        <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-3 py-1 text-white">
          Sale
        </span>

        <h2>Product title</h2>
      </article>
      <br /> <br />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-6 lg:self-start">Filters</aside>

        <main>Products list</main>
      </div>
      <br /> <br />
      {/* <article className="relative rounded-xl border border-gray-200 p-4 shadow-sm">
        <span className="absolute right-3 top-3 rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
          New
        </span>
        <div className="grid h-48 place-items-center rounded-lg bg-gray-100">
          Product image
        </div>
        <h2 className="mt-4 font-semibold">Wireless Headphones</h2>
        <p className="mt-2 text-gray-600">$79.99</p>
      </article> */}
      <br /> <br />
      {/* В Tailwind v4 эти значения по умолчанию заданы в rem: 40rem, 48rem, 64rem, 80rem и 96rem */}
      <div className="bg-gray-200 sm:bg-blue-400 md:bg-green-400 lg:bg-yellow-200">
        Responsive block
        <p>
          Важно: breakpoint не означает диапазон. md: означает «начиная с 768
          px», а не «только от 768 до 1024 px».
        </p>
      </div>
      <br /> <br />
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="w-full md:w-1/2">Product image</div>

        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold">Wireless Headphones</h2>

          <p className="mt-2 text-gray-600">
            Comfortable headphones for everyday use.
          </p>
        </div>
      </div>
      <br /> <br />
      <article className="flex flex-col gap-3 rounded-xl border border-gray-200 p-3 sm:p-4 md:flex-row md:items-center">
        <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-gray-100 md:w-40">
          Product image
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <h2 className="text-base font-semibold sm:text-lg">title</h2>

          <p className="text-lg font-bold sm:text-xl">price</p>

          <button
            type="button"
            className="w-full rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800 md:w-fit"
          >
            Add to cart
          </button>
        </div>
      </article>
      <br /> <br />
      {/* Важно: если элементы внутри Flexbox должны сжиматься, а содержимое
      содержит длинный текст, иногда необходимо добавить min-w-0 текстовому
      контейнеру. Это позволяет ему сжиматься ниже минимальной ширины,
      определяемой содержимым. */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-2xl font-bold sm:text-3xl">Products</h1>
        {/* md:grid-cols-[220px_minmax(0,1fr)] — начиная с 768 px создаёт две колонки: первую шириной 220 px, вторую — занимающую оставшееся пространство. */}

        {/* minmax(0,1fr) — запись CSS Grid, которая позволяет второй колонке сжиматься до нулевой минимальной ширины, чтобы содержимое не раздвигало сетку сверх доступного пространства. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="rounded-xl border border-gray-200 p-4">
            <h2 className="mb-3 font-semibold">Filters</h2>

            <p className="text-sm text-gray-600">
              Filter products by category and price.
            </p>
          </aside>

          <section>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {/* ProductCard components */}
            </div>
          </section>
        </div>
      </main>
      <br /> <br />
      <div className="flex gap-4">
        <div className="rounded bg-blue-100 p-4">First будет виден.</div>
        <div className="hidden rounded bg-red-100 p-4">
          Second не будет виден и не займёт место.
        </div>
        <div className="invisible rounded bg-green-100 p-4">
          Third не будет виден, но его место останется пустым.
        </div>
        <div className="rounded bg-blue-100 p-4">
          Fourth расположится после зарезервированного места для Third.
        </div>
      </div>
      {/* mt-auto прижимает кнопку к нижней части этого блока, когда есть свободное место. */}
      <div className="invisible rounded md:visible bg-green-100 p-4">
        invisible md:visible
      </div>
      <br /> <br />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden rounded-xl border p-4 md:block">
          <h2 className="font-semibold">Filters</h2>

          <p className="mt-2 text-sm text-gray-600">
            Filter products by category and price.
          </p>
        </aside>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">
              Products
              {/* hidden md:block скрывает боковую панель на мобильном
              экране и показывает её начиная с md. md:hidden скрывает кнопку
              фильтров на больших экранах. grid-cols-1
              md:grid-cols-[220px_minmax(0,1fr)] меняет структуру всей страницы. */}
            </h1>

            <button
              type="button"
              className="rounded-lg border px-3 py-2 md:hidden"
            >
              Filters
            </button>
          </div>

          {/* Product grid */}
        </section>
      </div>
      <br /> <br />
      Скрытие элементов — это не условный рендеринг React
      {/* <div className="hidden md:block">
  <ExpensiveComponent />
</div>
Здесь ExpensiveComponent остаётся частью React-дерева. Класс hidden лишь скрывает внешний контейнер через CSS.
Это отличается от условного рендеринга:
{isDesktop && <ExpensiveComponent />}

В первом случае компонент присутствует в React-дереве, даже если его контейнер не отображается. Во втором случае компонент вообще не рендерится, когда isDesktop равен false. */}
      <br /> <br />
      <div className="container w-full max-w-7xl mx-auto">
        Content - часто пишут:
      </div>
      <br />
      <h4>Images</h4>
      <br />
      1. w-full . h-full означает высоту 100% от родителя.
      <div className="w-[380px] border-2">
        <img
          src="/images/ourOffice.webp"
          alt="Product"
          className="w-full h-auto"
        />
      </div>
      <br />
      2. max-w-full — не выходить за ширину родителя <br />
      Это полезно, когда нужно не допустить, чтобы изображение было шире
      контейнера.
      <br />
      Для обычных изображений часто достаточно w-full h-auto. max-w-full
      полезен, когда нужно ограничить изображение, не заставляя его обязательно
      занимать всю доступную ширину.
      <div className="w-[380px] border-2">
        <img
          src="/images/ourOffice.webp"
          alt="Product"
          className="max-w-full h-auto"
        />
      </div>
      <br />
      3. object-cover. Изображение заполняет весь контейнер. Если пропорции не
      совпадают, часть изображения обрезается.
      <br />
      <div className="relative aspect-square overflow-hidden w-[380px] border-2">
        <Image
          src="/images/ourOffice.webp"
          alt="Product"
          fill
          className="object-cover"
        />
      </div>
      <br />
      4. object-contain
      <br />
      Изображение целиком помещается внутрь контейнера. Оно не обрезается, но
      свободное пространство может остаться по краям.
      <div className="relative aspect-square w-[400px] border-2">
        <Image
          src="/images/ourOffice.webp"
          alt="Product"
          fill
          className="object-contain"
        />
      </div>
      <br />
      Что выбирать в shop: - object-contain — для большинства фотографий
      отдельных товаров на белом или нейтральном фоне. - object-cover — для
      баннеров, фотографий образа жизни и изображений, которые должны заполнить
      всю область.
      <br /> <br />
      w-full h-auto md:w-1/2 lg:w-1/3
      <div className="relative w-[300px] border-2">
        <Image
          src="/images/ourOffice.webp"
          alt="Product"
          width={800}
          height={800}
          className="w-full h-auto md:w-1/2 lg:w-1/3"
        />
      </div>
      <br /> <br />
      focus:outline-none
      <input
        type="text"
        placeholder="Enter your email"
        className="rounded-lg focus:outline-none px-4 py-3 "
      />
      <br /> <br />
      focus:border-black focus:outline-none
      <input
        type="text"
        placeholder="Enter your email"
        className="rounded-lg border border-gray-300 px-4 py-3 focus:border-black  "
      />
      <button className="rounded-lg bg-black px-5 py-3 text-white focus:outline-2 focus:outline-offset-2 focus:outline-black">
        focus:outline-offset-2
      </button>
      <br /> Active
      <br />
      <button className="bg-black px-6 py-3 text-white hover:bg-gray-700 active:bg-red-900">
        active:bg-red-900
      </button>
      <br /> <br />
      Для кнопок и ссылок обычно достаточно длительности 150–300ms.
      <button className="rounded-lg bg-black px-6 py-3 text-white transition duration-300 hover:bg-gray-700">
        transition duration-300
      </button>
      <br /> <br />
      Пример с тенью и небольшим перемещением
      <article className="w-sm rounded-xl border-2 border-gray-400 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <strong>Product card</strong> - hover:-translate-y-1;
        <br />
        transition:duration-300
      </article>
      <br /> <br />
      <button
        type="button"
        className="w-[150px] rounded-lg bg-black px-4 py-3 font-medium text-white transition duration-200 hover:bg-gray-700 active:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        focus-visible:outline-2
      </button>
      <br /> В отличие от focus:, который применяется при любом фокусе,
      focus-visible: помогает не показывать контур при каждом обычном клике
      мышью.
      <br />
      <button type="button" className="w-[150px] bg-black text-white">
        without focus-visible
        <br />
      </button>
      hover responsive
      <button
        type="button"
        className="w-[200px] bg-black text-white hover:bg-red-400 md:hover:bg-gray-700"
      >
        hover:bg-red-400 md:hover:bg-gray-700
      </button>
      <br />
      transition-colors подходит для плавного изменения цветов. <br />
      transition позволяет плавно менять поддерживаемые CSS-свойства.
      <br /> <br />
      transition-colors подходит для плавного изменения цветов.
      <button
        type="button"
        className="text-gray-600 transition-colors duration-200 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
      >
        transition-color
      </button>
      <br /> <br />
      disabled - Важно: именно атрибут disabled отключает кнопку.
      Tailwind-классы только меняют её внешний вид. без disabled кнопка
      останется активной. Она по-прежнему сможет реагировать на клик.
      <button
        type="button"
        disabled
        className="rounded-lg bg-gray-200 px-5 py-3 text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        disabled:cursor-not-allowed
      </button>
      <br /> <br />
      enabled: — доступный элемент Модификатор enabled: работает противоположно
      disabled:. Он применяется, когда элемент не отключён.
      <button
        type="button"
        className="bg-gray-200 px-5 py-3 text-black enabled:hover:bg-black enabled:hover:text-white disabled:opacity-50"
        disabled={false}
      >
        enabled:hover:bg-black
      </button>
      <br /> checked:
      <br />
      Класс accent-black задаёт чёрный акцентный цвет стандартного checkbox в
      браузерах, которые поддерживают такое оформление.
      <label className="flex items-center gap-3">
        <input type="checkbox" className="size-5 accent-black" />

        <span>accent-black</span>
      </label>
      <br /> <br />
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          className="size-5 rounded border-gray-300 checked:border-green-600 checked:accent-green-600"
        />
        <span>checked:accent-green-600</span>
      </label>
      <br /> <br />
      при отметке меняется цвет checkbox, а текст остаётся прежним.
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          className="size-5 accent-blue-600 checked:accent-green-600"
        />
        <span className="text-gray-700">
          accent-blue-600 checked:accent-green-600
        </span>
      </label>
      <br />
      indeterminate - неопределенный <br />
      Обычно это состояние устанавливается через JavaScript-свойство
      input.indeterminate.
      <br />
      Поэтому класс indeterminate: полезен, когда логика приложения
      действительно устанавливает промежуточное состояние элемента.
      <br />
      Оно часто используется в списках, когда есть несколько дочерних пунктов: -
      Все пункты отмечены — родительский checkbox отмечен. - Ни один пункт не
      отмечен — родительский checkbox пустой. - Отмечена только часть пунктов —
      родительский checkbox в промежуточном состоянии.
      <br />
      <input
        type="checkbox"
        className="size-5 accent-black indeterminate:accent-gray-500"
      />
      <br /> <br />
      selected:
      <br />
      <select
        defaultValue="all"
        className="w-[150px] rounded-lg border border-gray-300 px-4 py-3"
      >
        <option value="all">All categories</option>
        <option value="electronics" className="selected:bg-gray-200">
          Electronics
        </option>
        <option value="furniture" className="selected:bg-red-200">
          Furniture
        </option>
      </select>
      <br /> <br />
      <div className="w-[350px] group rounded-lg border-2 border-red-700 p-4">
        <p className="text-gray-500 group-hover:text-blue-600">
          Product category group-hover
        </p>

        <h2 className="font-semibold group-hover:text-blue-600">
          Smartphone group-hover
        </h2>
      </div>
      <br /> <br />
      <strong>nested groups</strong>
      <br />
      group/name объявляет именованную группу. group-hover/name: применяет стиль
      при наведении на соответствующую группу. <br />
      они позволяют управлять стилями дочерних элементов через конкретного
      родителя. <br />
      Мы хотим: - при наведении на всю карточку менять цвет названия; - при
      наведении только на изображение показывать иконку увеличения - View image.
      <br /> <br />
      <article className="w-[300px] group/card rounded-xl border p-4">
        <div className="group/image relative overflow-hidden">
          <img
            src="/images/ourOffice.webp"
            alt="Classic Sneakers"
            className="w-full transition-transform
                 group-hover/image:scale-105"
          />

          <span
            className="absolute inset-0 grid place-items-center
                 opacity-0 transition-opacity
                 group-hover/image:opacity-100 hover:text-red-400"
          >
            View image
          </span>
        </div>

        <h2
          className="mt-4 font-semibold
               group-hover/card:text-blue-600"
        >
          Classic Sneakers
        </h2>
      </article>
      <br /> <br />
      <article className="w-[300px] group/card rounded-xl border p-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/ourOffice.webp"
            alt="Classic Sneakers"
            className="h-48 w-full object-cover
              transition-transform duration-300
              group-hover/card:scale-105"
          />
        </div>
        <h2 className="mt-4 text-lg font-semibold">Classic Sneakers</h2>
        <p className="mt-2 text-gray-600">$89.00</p>
        <button
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2
            text-white transition-colors
            group-hover/card:bg-blue-800"
        >
          Add to cart
        </button>
      </article>
      <br /> <br />
      <strong>
        Peer- равняться, равный. peer обозначает элемент, за состоянием которого
        нужно следить.
      </strong>
      <br />
      изменяет стиль одного элемента в зависимости от состояния другого,
      <strong> соседнего элемента. </strong>
      <br />
      peer — обозначает элемент, за состоянием которого нужно следить.
      peer-checked: — меняет стили соседнего элемента, когда checkbox или radio
      отмечен. peer-focus: — реагирует на фокус соседнего элемента.
      peer-invalid: — позволяет оформлять соседний элемент, когда поле не
      проходит встроенную HTML-валидацию. peer-disabled: — реагирует на
      отключённое состояние соседнего элемента.
      <br /> <br />
      Мы хотим, чтобы текст становился зелёным, когда пользователь отмечает
      checkbox. Это означает: если соседний элемент с классом peer отмечен,
      установить тексту зелёный цвет.
      <br /> <br />В отличие от group, здесь
      <strong>
        не нужно помещать текст внутрь специального родительского элемента,
      </strong>
      чтобы отслеживать его состояние. Но элементы должны находиться в
      подходящей структуре соседства.
      <br /> <br />
      <strong>
        {" "}
        peer-checked. peer-checked: реагирует на отмеченный checkbox или radio.
      </strong>
      <br />
      <label className="flex items-center gap-3">
        <input type="checkbox" className="peer size-5 accent-green-600" />
        <span className="text-gray-500 peer-checked:font-semibold peer-checked:text-green-700">
          I agree to the terms
        </span>
      </label>
      <br /> <br />
      Практическое правило: сначала размещай элемент с peer, а после него —
      элемент, оформление которого должно меняться.
      <br /> <br />
      Важное ограничение: peer работает со следующими соседями Это одно из
      главных правил peer. Tailwind использует CSS-механизм последующих соседних
      элементов. Поэтому элемент с peer-... должен находиться после элемента с
      классом peer на том же уровне вложенности.
      <br /> <br />
      Здесь p идёт после input, поэтому правило может сработать. такой вариант
      не сработает ожидаемым образом:
      <br /> <br />
      <div>
        <p className="peer-checked:text-green-700 text-gray-500">Selected</p>
        <input type="checkbox" className="peer" />
      </div>
      <br />
      <strong>
        peer-focus: peer-focus: реагирует на фокус соседнего элемента.
      </strong>{" "}
      <br />
      Допустим, у нас есть поле email и подпись, которая должна менять цвет,
      когда пользователь взаимодействует с полем.Когда поле получает фокус,
      подпись становится синей.
      <br />
      <div className="space-y-2">
        <input
          type="email"
          placeholder="you@example.com"
          className="peer w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none"
        />
        <p className="text-sm text-gray-500 peer-focus:text-blue-600">
          Enter your email address
        </p>
      </div>
      <br /> <br />
      <strong>
        {" "}
        peer-invalid: позволяет стилизовать соседний элемент при невалидном
        состоянии поля.
      </strong>
      <br />В формах часто нужно показывать сообщение об ошибке, если значение
      не проходит встроенную проверку HTML.
      <br />
      <div className="space-y-2">
        <input
          type="email"
          required
          placeholder="you@example.com"
          className="peer w-full rounded-lg border border-gray-300 px-4 py-3 invalid:border-red-500"
        />

        <p className="hidden text-sm text-red-600 peer-invalid:block">
          Please enter a valid email address.
        </p>
      </div>{" "}
      <br /> <br />
      <strong>
        peer-disabled: — когда соседнее поле отключено: реагирует на отключённое
        состояние соседнего элемента.
      </strong>
      <br /> <br />
      Этот модификатор пригодится, когда нужно визуально показать, что
      определённое действие недоступно. <br /> <br />
      <label className="flex items-center gap-3">
        <input type="checkbox" disabled className="peer size-5" />

        <span className="text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
          This option is unavailable
        </span>
      </label>{" "}
      <br /> <br />
      Сам checkbox отключается благодаря HTML-атрибуту disabled, а
      peer-disabled: только оформляет соседний текст.
      <br /> <br />
      <strong>peer для выбора варианта доставки в shop</strong>
      <br /> <br /> Click on Standard delivery and 3–5 business days
      <br /> <br />
      Почему это удобно? Пользователь нажимает на всю карточку, а не пытается
      попасть в маленький кружок radio. При этом стандартный HTML-элемент
      продолжает управлять выбором. Для полностью доступного компонента
      дополнительно стоит продумать видимый индикатор клавиатурного фокуса,
      например peer-focus-visible:ring-2. <br /> <br />
      <div className="space-y-3">
        <label className="block cursor-pointer">
          <input
            type="radio"
            name="delivery"
            value="standard"
            className="peer sr-only"
            // peer отслеживает состояние соответствующей radio-кнопки.
            // sr-only визуально скрывает стандартный radio, но оставляет его доступным для вспомогательных технологий.
            defaultChecked
          />

          <span className="block rounded-xl border border-gray-200 p-4 peer-checked:border-black peer-checked:bg-gray-50">
            <span className="font-medium">Standard delivery</span>
            <span className="mt-1 block text-sm text-gray-500">
              3–5 business days
            </span>
          </span>
        </label>

        <label className="block cursor-pointer">
          <input
            type="radio"
            name="delivery"
            value="express"
            className="peer sr-only"
          />

          <span className="block rounded-xl border border-gray-200 p-4 peer-checked:border-black peer-checked:bg-gray-50">
            <span className="font-medium">Express delivery</span>
            <span className="mt-1 block text-sm text-gray-500">
              1–2 business days
            </span>
          </span>
        </label>
      </div>
      <br /> <br /> <strong> Arbitrary variants</strong>
      <div className="is-active">
        <p className="[.is-active_&]:text-green-600">
          Product is active ?????????
        </p>
      </div>
      <br /> <br />
      <strong>
        {" "}
        Селектор дочернего элемента - посм знак в нижнем комментарии
        {/* > */}
      </strong>
      Допустим, у нас есть карточка товара в проекте shop. Нужно сделать все
      непосредственные дочерние элементы карточки синими.
      {/* В обычном CSS это выглядело бы так:
.product-card > * {
  color: blue;
} */}
      <br /> <br />
      {/* <div className="[&>*]:text-blue-600">
  <h2>Wireless Headphones</h2>
  <p>Comfortable headphones</p>
  <span>$99</span>
</div> */}
      {/* Несколько условий для разных состояний */}
      <div className="w-[200px]">
        <CartButton status="default" />
        <CartButton status="added" />
        <CartButton status="unavailable" />
      </div>
      <br /> <br />
      <ButtonVariant variant="primary">Primary - Add to cart</ButtonVariant>
      <ButtonVariant variant="secondary">Secondary - Cancel</ButtonVariant>
      <ButtonVariant
        variant="danger"
        type="submit"
        disabled={false}
        onClick={() => console.log("Clicked")}
        className="underline hover:no-underline"
      >
        Delete button
      </ButtonVariant>
    </div>
  );
}

// flex-1	занять доступное пространство
// flex-auto	расти и сжиматься относительно исходного размера
// flex-initial	не расти, но может сжиматься
// flex-none	не расти и не сжиматься
