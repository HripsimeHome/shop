import NavigationLinks from "@/components/layout/NavigationLinks";
import { desktopNavigation } from "@/constants/navigation";


export default function HeaderNav() {
  return (
    <NavigationLinks
      items={desktopNavigation}
      ariaLabel="Main navigation"
      listClassName="flex items-center gap-8"
      linkClassName="text-sm font-medium transition-colors"
      activeClassName="text-blue-600"
      inactiveClassName="text-gray-700 hover:text-blue-600"
    />
  );
}