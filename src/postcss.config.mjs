// 📌 PostCSS — инструмент обработки CSS.
// Используется для запуска Tailwind во время сборки стилей.

// Когда Next.js обрабатывает CSS, PostCSS запускает плагин:"@tailwindcss/postcss": {}
// Плагин обрабатывает директивы Tailwind, обнаруживает используемые классы и генерирует необходимые CSS-правила.


const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;