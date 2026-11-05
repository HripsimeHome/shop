"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavigationLinks from "@/components/layout/NavigationLinks";
import { mobileNavigation } from "@/constants/navigation";

// 🔹 Здесь выпадающее меню имеет ширину w-64 и позиционируется относительно кнопки. Если тебе нужно выпадающее меню на всю ширину Header, его позиционирование нужно будет привязать к внешнему контейнеру Header.

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  // 📌 Не нужно писать тип вручную, если TypeScript может правильно определить его самостоятельно.
  // Явная типизация useState<Type>() особенно полезна, когда начальное значение не позволяет TypeScript определить нужный тип, например:
  // const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);


// 📌 Когда isOpen === true, прокрутка основной страницы блокируется.
// Когда isOpen === false, прокрутка восстанавливается. При размонтировании компонента стили очищаются.

  useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);

  //  void означает, что функция ничего не возвращает.  

  function toggleMenu(): void {
    setIsOpen((prev) => !prev);
  }

  function closeMenu(): void {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        // Сообщает вспомогательным технологиям, раскрыто ли меню.
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        //  aria-hidden="true" //то позволит вспомогательным технологиям не озвучивать их отдельно, поскольку у кнопки уже есть aria-label
        className="cursor-pointer rounded-lg p-2 text-gray-700 hover:bg-gray-100"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {/* 
      🔹 Теперь у нас три независимых слоя:
      1. Страница — находится внизу.
      2. Overlay — fixed inset-0 z-40 bg-black/50, затемняет страницу.
      3. Mobile navigation — absolute ... z-50, находится поверх затемнения. */}

      {isOpen && (
        <>
          {/* Background overlay */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="fixed inset-0 z-40 cursor-default bg-black/50"
          />

          {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full z-50 w-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-gray-200 bg-white shadow-lg"
        >    
      
          <NavigationLinks
            items={mobileNavigation}
            ariaLabel="Mobile navigation"
            listClassName="flex flex-col gap-2 p-4"
            linkClassName="block rounded-lg px-4 py-3 text-sm font-medium transition-colors"
            activeClassName="bg-blue-50 text-blue-600"
            inactiveClassName="text-gray-700 hover:bg-gray-100"
            onNavigate={closeMenu}           
          />
          {/* bg-black/50 — затемняет фон на 50%.
          fixed inset-0 — overlay покрывает весь экран.
          z-40 — overlay находится над страницей.
          z-50 — меню находится поверх overlay.
          onClick={closeMenu} — клик по затемнённой области закрывает меню.
          overflow-y-auto — меню прокручивается независимо от страницы. */}
        </div>
         </>
      )}
    </div>
  );
}
 {/* 🔹 max-h — ограничивает максимальную высоту меню. overflow-y-auto — разрешает прокручивать само меню, если его содержимое не помещается на экране.        */}


// 🔑 Вариант dropdown menu, которое открывается справа и с шириной w-64

// <div className="relative md:hidden">
//       <button
//         type="button"
//         onClick={toggleMenu}
//         aria-label={isOpen ? "Close menu" : "Open menu"}
//         // Сообщает вспомогательным технологиям, раскрыто ли меню.
//         aria-expanded={isOpen}
//         aria-controls="mobile-navigation"
//         //  aria-hidden="true" //то позволит вспомогательным технологиям не озвучивать их отдельно, поскольку у кнопки уже есть aria-label
//         className="cursor-pointer rounded-lg p-2 text-gray-700 hover:bg-gray-100"
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {isOpen && (
//         <div
//           id="mobile-navigation"
//           className="absolute right-0 top-full z-50 mt-2 w-64 rounded-lg border border-gray-200 bg-white shadow-lg"
//         >
//           <NavigationLinks
//             items={mobileNavigation}
//             ariaLabel="Mobile navigation"
//             listClassName="flex flex-col gap-2 p-4"
//             linkClassName="block rounded-lg px-4 py-3 text-sm font-medium transition-colors"
//             activeClassName="bg-blue-50 text-blue-600"
//             inactiveClassName="text-gray-700 hover:bg-gray-100"
//             onNavigate={closeMenu}
//           />
//         </div>
//       )}
//     </div>