import { NavLink } from "react-router";
type Links = {
	to: string;
	content: string | JSX.Element;
};
const links: Links[] = [
	{
		to: "/posts",
		content: "Posts",
	},
	{
		to: "/projects",
		content: "Projects",
	},
	{
		to: "/about",
		content: "About",
	},
];
const MenuLinks = () => {
	const linkItems = links.map((link) => (
		<li key={link.to}>
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
