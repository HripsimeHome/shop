"use client";
import { useRouter } from "next/navigation";

export default function ContacForms() {
  const router = useRouter();

  const handleCLick = () => {
    router.push("/products");
  };

  return (
    <div className="min-w-64 max-w-7xl mx-auto bg-green-300">
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
      <div className="size-30 bg-green-700 text-white">
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
Сделать прозрачным весь элемент и всё его содержимое. */}
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
    </div>
  );
}
