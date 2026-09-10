import Link from "next/link";
import styles from "./global-not-found.module.scss";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className={styles.notFound}>
          <h1>404</h1>
          <p>Страница не найдена</p>

          <Link href="/">
            Вернуться на главную
          </Link>
        </main>
      </body>
    </html>
  );
}