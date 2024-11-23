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
		<li className="xl:block hidden" key={link.to}>
			<NavLink
				className={({ isActive }) =>
					`text-sm ${isActive ? "font-semibold text-orange-500" : "font-medium text-muted-foreground"}`
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
