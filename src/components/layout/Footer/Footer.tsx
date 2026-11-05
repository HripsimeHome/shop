import Link from "next/link";
import Container from "@/components/layout/Container"
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
      <Container>
      footer    
      <Link href="/">Home</Link>
      <br />
      <Link href="/products">Products</Link>
      </Container>
    </footer>
  );
}


// import Link from "next/link";
// import Container from "./Container";

// export default function Footer() {
//   return (
//     <footer className="border-t border-gray-200 bg-gray-50">
//       <Container>
//         <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
//           <p className="text-sm text-gray-600">
//             © {new Date().getFullYear()} Shop.
//             All rights reserved.
//           </p>

//           <nav aria-label="Footer navigation">
//             <ul className="flex items-center gap-6">
//               <li>
//                 <Link
//                   href="/"
//                   className="text-sm text-gray-600 hover:text-blue-600"
//                 >
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/products"
//                   className="text-sm text-gray-600 hover:text-blue-600"
//                 >
//                   Products
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </Container>
//     </footer>
//   );
// }
