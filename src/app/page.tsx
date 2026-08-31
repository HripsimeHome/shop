//import Image from "next/image";
import Link from "next/link"
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
        <div className={styles.intro}>        
          <nav>
         <Link href="/">Home</Link>
         <br />
         <Link href="/about">About</Link>         
         <br />
         <Link href="/products">Products</Link>
         <br />
         <Link href="/products/clothes">Products / closes</Link>
         <br />
         <br />
         <Link href="/products/clothes/shoes">Products / closes/ shoes</Link>
         <br />
         <Link href="/contacts">Contacts</Link>


          </nav>       
        </div>
        {/* <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>         
        </div> */}
      </main>
    </div>
  );
}