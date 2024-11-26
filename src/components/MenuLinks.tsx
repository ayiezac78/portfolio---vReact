import { NavLink } from "react-router";
import { links as navLinks } from "@/components/route-links";
const MenuLinks = () => {
	const linkItems = navLinks.map((link) => (
		<li className="text-start" key={link.to}>
			<NavLink
				className={({ isActive }) =>
					`text-sm font-semibold hover:text-[#EF872E] transition-colors duration-300 ease-in-out ${isActive ? "text-[#EF872E]" : "text-muted-foreground"}`
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
