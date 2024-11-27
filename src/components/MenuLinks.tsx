import { NavLink } from "react-router";
import { links as navLinks } from "@/lib/data/route-links";
const MenuLinks = () => {
	const linkItems = navLinks.map((link) => (
		<li className="text-start" key={link.to}>
			<NavLink
				className={({ isActive }) =>
					`text-sm font-semibold hover:text-primary transition-colors duration-300 ease-in-out ${isActive ? "text-primary" : "text-muted-foreground"}`
				}
				to={link.to}
				viewTransition
			>
				{link.content}
			</NavLink>
		</li>
	));
	return <>{linkItems}</>;
};

export default MenuLinks;
