// export default function Loading() {
//   return (
//     <div>
//       <p>Загрузка...</p>
//        <div className="skeleton" />
//       <div className="skeleton" />
//       <div className="skeleton" />
//     </div>
//   );
// }

import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}></div>

        <div className={styles.menu}>
          <div className={styles.menuItem}></div>
          <div className={styles.menuItem}></div>
          <div className={styles.menuItem}></div>
          <div className={styles.menuItem}></div>
        </div>
      </aside>
      {/* Main */}
      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.title}></div>
          <div className={styles.avatar}></div>
        </header>
        {/* Cards */}
        <section className={styles.cards}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </section>
        {/* Content */}
        <section className={styles.content}>
          <div className={styles.chart}></div>
          <div className={styles.activity}></div>
        </section>
      </main>
    </div>
  );
}

// page.tsx Создаёт основное содержимое маршрута
// loading.tsx Создаёт временное состояние загрузки
// Потому что loading.tsx — это специальное зарезервированное имя файла Next.js.
// Как и:
// page.tsx
// layout.tsx
// loading.tsx

// Пока содержимое page.tsx загружается, Next.js может показать: Загрузка...
// После того как содержимое готово, вместо loading UI появляется: page.tsx
