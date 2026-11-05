"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
   {
    label: "About",
    href: "/about",
  },
  {
    label: "Products",
    href: "/products",
  },
   {
    label: "Contacts",
    href: "/contacts",
  },
 
];

export default function HeaderNav() {
  const pathname = usePathname(); 
  // usePathname() используем для определения текущего маршрута и отображения активного пункта навигации.
  // Получаем текущий маршрут. Например, если пользователь открыл: /products/1, то: pathname === "/products/1"

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-8">
        {navigation.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || 
                pathname.startsWith(`${item.href}/`);
              // 📌   Проверяем точное совпадение или вложенный маршрут.
              //   Например:
              // /products
              // /products/1
              // /products/2
              // /products/15
              // Во всех этих случаях активным будет Products.
              // Почему нельзя просто использовать: pathname.startsWith(item.href) 
              // Потому что для главной страницы / это условие будет истинным практически для всех маршрутов.

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined} // aria-current - Это атрибут доступности.  Он сообщает вспомогательным технологиям, какая ссылка соответствует текущей странице.
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}