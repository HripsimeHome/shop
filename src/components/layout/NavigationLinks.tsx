// 📌 Это общий компонент, который:
// - получает нужный массив ссылок через items;
// - самостоятельно определяет текущий маршрут через usePathname();
// - определяет активную ссылку через isActive;
// - отображает ссылки;
// - позволяет передать дополнительные Tailwind-классы;
// - при необходимости вызывает onNavigate после перехода.


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/constants/navigation";

type NavigationLinksProps = {
  items: NavigationItem[];
  ariaLabel: string;
  listClassName: string;
  linkClassName: string;
  activeClassName: string;
  inactiveClassName: string;
  onNavigate?: () => void;
};

export default function NavigationLinks({
  items,
  ariaLabel,
  listClassName,
  linkClassName,
  activeClassName,
  inactiveClassName,
  onNavigate,
}: NavigationLinksProps) {
  const pathname = usePathname();
    
  // usePathname() используем для определения текущего маршрута и отображения активного пункта навигации.
  // Получаем текущий маршрут. Например, если пользователь открыл: /products/1, то: pathname === "/products/1"

  return (
    <nav aria-label={ariaLabel}>
      <ul className={listClassName}>
        {items.map((item) => {
        // 🔹 Поскольку массив navigation уже типизирован как NavigationItem[], TypeScript автоматически определяет тип item.  
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
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                 // 🔹 aria-current - Это атрибут доступности.  Он сообщает вспомогательным технологиям, какая ссылка соответствует текущей странице.
                // "page" — ссылка соответствует текущей странице.
                // undefined — атрибут не устанавливается.
                className={`${linkClassName} ${
                  // 🔹 TypeScript самостоятельно определяет тип isActive как boolean.      
                  // Потому что результатом сравнений === и вызова startsWith() является true или false.
                  isActive ? activeClassName : inactiveClassName
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