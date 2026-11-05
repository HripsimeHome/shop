 
// 📌 Next.js предоставляет встроенный механизм загрузки и оптимизации шрифтов:
// import { Inter } from "next/font/google"; Он позволяет использовать Google Fonts без ручного подключения через HTML-тег <link>.

// Важное преимущество: Next.js загружает файлы шрифтов во время сборки и размещает их вместе с приложением. Поэтому браузеру пользователя не требуется обращаться к Google Fonts для получения этих файлов.

import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
//import {Montserrat} from "next/fonts/google";
import { Inter, Manrope, Ubuntu } from "next/font/google";

import localFont from "next/font/local"; 

import "@/styles/globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Container from "@/components/layout/Container";

// Символ @ обычно настроен так, чтобы означать:
// src/components/Footer/Footer

//variable удобен, когда шрифтами нужно управлять через CSS.
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   .
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

//
// Open Graph управляет preview ссылки при её публикации в поддерживающих сервисах.
// Для товаров и статей обычно нужен dynamic Open Graph.//
//
// Next.js может генерировать отдельную OG-картинку для каждого товара.
// Для этого используется: ImageResponse из: next/og - прочитать и попробовасть????????????????????????????

// 📌 для русского текста может понадобиться subset cyrillic.
// Для армянского текста нужно проверить поддержку армянского алфавита у выбранного шрифта.

// если сайт многоязычный- Для английского и русского текста могут понадобиться:  subsets: ["latin", "cyrillic"], Однако доступные subsets зависят от конкретного шрифта. Важно: если сайт использует русский, армянский или другие языки, нужно отдельно убедиться, что выбранный шрифт содержит необходимые символы. Иначе браузер будет использовать резервный шрифт.


// 🔹 const мontserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700"],
// });

// Google Fonts
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// 📌 Inter и Manrope поддерживают variable fonts.
// Поэтому в нашей конфигурации необязательно перечислять отдельные веса weight: ["300", "400", "500", "700"], Мы можем использовать:
// font-normal
// font-medium
// font-semibold
// font-bold

const inter = Inter({
  subsets: ["latin"], // выбирает латинский набор символов;
  display: "swap", // Показывает резервный шрифт(во время загрузки шрифта), затем заменяет его.
  variable: "--font-inter",// --font-inter — переменная, созданная Next.js.
  // 🔹 Свойство variable в next/font позволяет связать подключённый шрифт с Tailwind.
  adjustFontFallback: true, 
  // 🔹 Для поддерживаемых шрифтов Next.js может использовать резервный шрифт с скорректированными метриками. Это помогает уменьшить визуальные изменения при замене резервного шрифта на основной.
});
 
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  adjustFontFallback: true,
});

// 📌 Основные значения
// Значение	Поведение
// auto	Поведение определяет браузер
// block	Допускает период невидимого текста
// swap	Показывает резервный шрифт, затем заменяет его
// fallback	Использует короткий период ожидания и ограниченный период замены
// optional	Позволяет браузеру отказаться от замены в зависимости от условий
 
 

// 📌  Variable Font — формат шрифта, который может поддерживать несколько вариантов начертания внутри одного файла.

// 🔑
const montserrat = localFont({
  src: "../assets/fonts/Montserrat-Variable.woff2",
  weight: "100 900",
  // обозначает поддерживаемый диапазон весов.  Но указывать такой диапазон нужно только в том случае, если файл действительно является variable font и поддерживает соответствующие значения.
  style: "normal",
  variable: "--font-montserrat",
  display: "swap",
}); 
// в коде можно исползовать также в квадратных скобках: className="font-[300]"> 

// 🔑 
// 📌 один variable-файл не всегда меньше нескольких статических файлов, если проект использует только одно-два начертания, можно использовать этот вариант - т.е. подключение нескольких толщин - Regular, Bold ... 

// const montserrat = localFont({
//   src: [
//     {
//       path: "../assets/fonts/Montserrat-Regular.woff",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Montserrat-Bold.woff",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-montserrat",
//   display: "swap",
// });

// ___________________________________________________________________________
// Metadata
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
    <html lang="en">
      {/* <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}> */}
    {/* 🔑 <body className={ubuntu.className}>  */} 
     {/* ubuntu.className -Это класс, который Next.js создаёт для применения выбранного шрифта. */}
    {/* 🔹.className -  применяет шрифт непосредственно к элементу. т.е. д. body Это удобно, если весь сайт использует один шрифт.*/}
     <body className={`${inter.variable} ${manrope.variable} ${montserrat.variable} min-h-screen bg-white font-body`}>
     {/* 🔹  min-h-screen bg-white
      min-height: 100vh; То есть минимальная высота контейнера равна высоте viewport.  // min-h-screen → минимальная высота viewport,*/}
      {/* 🔹flex min-h-screen flex-col - Они создают вертикальный Flexbox-layout на всю минимальную высоту экрана. */}
{/* Это означает, что основной шрифт всего приложения — Inter. */}
{/* 🔹 .variable — создаёт CSS-переменную, которую можно использовать в SCSS или Tailwind CSS.  Объявляет переменные для двух шрифтов*/}

{/* 🔑 <body className={brandFont.variable}>  */}
	{/* 🔹 .variable Объявляет CSS-переменную --font-ubuntu - naprimer */}
        
       {/* 🔹  Next.js создаёт CSS-класс для подключённого шрифта.
        Поскольку свойство font-family наследуется, большинство текстовых элементов внутри body будут использовать Inter, если не задано другое семейство. */}
       <div className="flex flex-col min-h-screen">
        <Header />  
        <main className="flex-1"> {/* Основная область занимает доступное пространство между Header и Footer.     */}
        {children}
        {/* children — специальный React prop. Он позволяет передавать вложенный контент внутрь компонента. Это концептуальная схема: Next.js самостоятельно управляет композицией маршрутов. */}
        </main> 
        {/* children означает: содержимое, которое должно находиться внутри Layout
        {children} — место, куда вставляется содержимое текущей страницы. */}
        <Footer />
        </div>
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
 

