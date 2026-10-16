import styles from "./Footer.module.scss";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      footer
      <p className="text-red">Text red</p>
      <Link href="/">Home</Link>
    </footer>
  );
}
