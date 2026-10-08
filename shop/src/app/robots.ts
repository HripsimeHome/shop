import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // userAgent: "Googlebot"
      // userAgent определяет, для какого робота действует правило. "*" означает: Все роботы. То есть: Google, Bing, Яндекс, и другие

      // Можно указать конкретного робота, например: userAgent: "Googlebot", Тогда правило будет предназначено именно для Googlebot.

      allow: "/", //Разрешить роботам сканировать сайт. "/" означает корень сайта.
      disallow: ["/admin/", "/private/", "/dashboard/"], // Не сканируй URL, которые находятся в /admin/ .......
      //«Поисковому роботу не следует сканировать этот путь».
    },

    // 📌 Можно разрешить отдельную страницу внутри запрещённой области
    // allow: "/admin/login",

    sitemap: "https://shop-eight-opal.vercel.app/sitemap.xml",
    //  Мы сообщаем поисковому роботу: Вот где находится карта моего сайта.

    //  Получается связь:
    //   robots.txt
    //       ↓
    //   sitemap.xml
    //       ↓
    //   список важных URL

    // После деплоя у тебя будут: https://shop-eight-opal.vercel.app/robots.txt
    // и: https://shop-eight-opal.vercel.app/sitemap.xml
  };
}

// 📌 robots.txt

// robots.txt — специальный файл, который сообщает поисковым роботам, какие части сайта можно или нельзя сканировать.

// И Next.js создаст: /robots.txt

// но не создал ?????????????
