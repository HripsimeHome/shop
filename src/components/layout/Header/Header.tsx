import Container from "@/components/layout/Container"; 
import ThemeToggle from "@/components/ThemeToggle";

import  CartButton from "./CartButton";
import  HeaderLogo from "./HeaderLogo";
import  HeaderNav  from "./HeaderNav"
import MobileMenu from "./MobileMenu";
// import {
//   ShoppingCart,
//   Menu,
//   X,
//   Search,
//   User,
// } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-primary dark:bg-brand  dark:hover:bg-brand-hover">       
      {/* <header className="sticky top-0 z-20 flex md:place-content-center max-w-7xl px-4 py-4">  */}
      {/* max-w-7xl — 80rem */}
      <Container>
        <div className="flex h-20 items-center justify-between">
          <HeaderLogo />
          <div className="hidden md:block">
            <HeaderNav />
          </div>
          <CartButton count={0} />
          <MobileMenu />
        </div>
       <ThemeToggle />   
       </Container>
    </header>
  );
};
export default Header;



// import Link from "next/link";
// import Container from "./Container";


// export default function Header() {
//   return (
//     <header className="border-b border-gray-200 bg-white">
//       <Container>
//         <div className="flex h-20 items-center justify-between">
//           <Link
//             href="/"
//             className="text-2xl font-bold text-gray-900"
//           >
//             Shop
//           </Link>

//           <nav aria-label="Main navigation">
//             <ul className="flex items-center gap-8">
//               <li>
//                 <Link
//                   href="/"
//                   className="text-gray-700 transition-colors hover:text-blue-600"
//                 >
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/products"
//                   className="text-gray-700 transition-colors hover:text-blue-600"
//                 >
//                   Products
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/cart"
//                   className="text-gray-700 transition-colors hover:text-blue-600"
//                 >
//                   Cart
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </Container>
//     </header>
//   );
// }
