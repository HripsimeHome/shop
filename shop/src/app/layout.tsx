import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/_index.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// Символ @ обычно настроен так, чтобы означать:
// src/components/Footer/Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//
// Open Graph управляет preview ссылки при её публикации в поддерживающих сервисах.
// Для товаров и статей обычно нужен dynamic Open Graph.//
//
// Next.js может генерировать отдельную OG-картинку для каждого товара.
// Для этого используется: ImageResponse из: next/og - прочитать и попробовасть????????????????????????????

export const metadata: Metadata = {
  title: {
    default: "Shop",
    template: "%s | Shop",
  },
  description: "Online shop with modern products",
  metadataBase: new URL("https://shop-eight-opal.vercel.app/"),
  //базовый URL моего сайта. Используй его для относительных URL в metadata
  // metadataBase задаёт базовый URL сайта, относительно которого Next.js может формировать абсолютные URL для metadata.

  // Например, если ты пишешь:
  //  openGraph: {
  //   images: "/og-image.webp",
  // }

  // Next.js сможет понять, что: /og-image.jpg  относится к:
  // https://shop-eight-opal.vercel.app/og-image.webp

  //  metadataBase ожидает объект URL
  //   Это стандартный JavaScript-конструктор URL.

  openGraph: {
    title: "Shop for openGraph",
    description: "Online shop for openGraph",
    url: "https://shop-eight-opal.vercel.app",
    siteName: "My shop",

    images: [
      {
        url: "/images/phone1.jpg",
        // url: "/images/phone1.jpg",   ????????????????
        //  Тогда: /og-image.jpg превратится в:  https://myshop.com/og-image.jpg
        width: 1200,
        height: 630,
        alt: "iPhone 12",
      },
      {
        url: "/images/phone2.jpg",
        width: 1200,
        height: 630,
        alt: "iPhone 16",
      },
    ],

    locale: "en_US",
    alternateLocale: ["ru_RU", "hy_AM"],
    type: "website", // тип страницы
  },
  // У Тwitter есть собственные metadata:<meta name="twitter:title" content="iPhone 15 Pro" />
  twitter: {
    card: "summary_large_image", //Есть другой вариант: card: "summary", Он использует небольшое изображение.
    // Можно встретить: player, app. Они предназначены для специальных случаев — например, медиаплееров или приложений.
    title: "Shop for Twitter",
    description: "Online shop for Twitter",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true, //index: true Говорит поисковым системам - Эту страницу можно индексировать.
    follow: true, //Говорит - Можно переходить по ссылкам на странице
  },
  //   Для обычной публичной страницы магазина это может быть подходящим вариантом.
  // Но для приватных страниц, например некоторых внутренних страниц аккаунта, настройки могут быть другими.
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        {children}
        {/* children означает: содержимое, которое должно находиться внутри Layout
        {children} — место, куда вставляется содержимое текущей страницы. */}
        <Footer />
      </body>
    </html>
  );
}

// layout.tsx отвечает за общую оболочку маршрута.
// {
//   children,
// }: {
//   children: React.ReactNode;
// }

// можно понимать как:
// мы получили объект
//        ↓
// из него достали children
//        ↓
// и указали тип этого объекта

// page.tsx
//     ↓
// контент

// layout.tsx
//     ↓
// обёртка / каркас

// page.tsx отвечает за содержимое конкретного маршрута.
// layout.tsx отвечает за общую структуру интерфейса.

// 🔥 Если существует вложенный Layout, то children может содержать весь вложенный Layout вместе с его страницей (например Dashboard).

// В Root Layout: {children} может содержать вложенный Layout вместе с его страницей.
