import { NavLink } from "react-router";
import { links as navLinks } from "@/lib/data/route-links";
import { NavigationMenuItem } from "./ui/navigation-menu";
const MenuLinks = () => {
	const linkItems = navLinks.map((link) => (
		<NavigationMenuItem key={link.to}>
			<NavLink
				className={({ isActive }) =>
					`text-sm font-semibold transition-colors duration-500 ease-in-out hover:bg-primary hover:text-primary-foreground py-1 px-3 rounded-full flex items-center ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`
				}
				to={link.to}
				viewTransition
			>
				{link.content}
			</NavLink>
		</NavigationMenuItem>
	));
	return <>{linkItems}</>;
};

export default MenuLinks;
