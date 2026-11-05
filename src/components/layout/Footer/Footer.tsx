import Container from "@/components/layout/Container";
import NavigationLinks from "@/components/layout/NavigationLinks";
import { footerNavigation } from "@/constants/navigation";


export default function Footer() {
  return (
    <footer className="py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 Shop. All rights reserved.
          </p>
          {/* Footer использует тот же компонент, но передаёт собственный массив ссылок и стили. */}
          <NavigationLinks
            items={footerNavigation}
            ariaLabel="Footer navigation"
            listClassName="flex flex-wrap items-center justify-center gap-6"
            linkClassName="text-sm font-medium transition-colors"
            activeClassName="text-blue-600"
            inactiveClassName="text-gray-500 hover:text-blue-600"
          />
        </div>
      </Container>
    </footer>
  );
}
