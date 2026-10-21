import styles from "./Header.module.scss";
import Home from "./../../app/page";
import Link from "next/link";
const Header = () => {
  // return <header className={styles.header}>Header</header>;
  return (
    <header className="sticky top-0 z-20">
      {/* <header className="sticky top-0 z-20 flex md:place-content-center max-w-7xl px-4 py-4">  */}
      {/* max-w-7xl — 80rem */}
      <div className="flex w-full max-w-7xl items-center justify-center mx-auto px-4 py-4 sm:px-6 lg:px-8">
        {/* <Link href="/" className="text-xl font-bold">
          Logo
        </Link> */}
        <button
          type="button"
          aria-label="Open navidation menu"
          className="md:hidden items-end"
          // className="place-self-end md:hidden items-end"
        >
          <span aria-label="true">☰</span>
        </button>
        <nav className="hidden md:flex place-content-center gap-4">
          <Link href="/">Home</Link>
          <Link
            href="/about"
            className="text-gray-500 transition-colors duration-200 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            About
          </Link>
          <Link href="/products">Products</Link>
          {/* <Link href="/products/clothes">Products / closes</Link>              
         <Link href="/products/clothes/shoes">Products / closes/ shoes</Link> */}
          <Link href="/products/orders">Products/orders</Link>

          <Link href="/login">Login</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/tailwind">Tailwind</Link>
          <Link href="/contacts">Contacts</Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
