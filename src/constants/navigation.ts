export type NavigationItem = {
  label: string;
  href: string;
};

// Desktop 
export const desktopNavigation: NavigationItem[] = [
   // 🔹 NavigationItem[] — массив объектов, каждый из которых должен соответствовать типу NavigationItem.
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" } 
];

// Mobile 
export const mobileNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Cart", href: "/cart" },
];

// Footer
export const footerNavigation: NavigationItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Contacts", href: "/contacts" },
];