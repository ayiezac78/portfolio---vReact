import { NavLink, Outlet } from "react-router";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Image } from "@unpic/react";
import me from "@/assets/me.webp";
import { blurhashToCssGradientString } from "@unpic/placeholder";
import { ModeToggle } from "./mode-toggle";

type Link = {
	to: string;
	content: string | JSX.Element;
};

interface ImageBlurHashProps {
	src: string;
	alt: string;
	blurhash: string;
}

function ImageBlurHash({ src, alt, blurhash }: ImageBlurHashProps) {
	const placeholder = blurhashToCssGradientString(blurhash);
	return (
		<Image
			src={src}
			alt={alt}
			background={placeholder}
			layout="constrained"
			width={64}
			height={64}
			className=" grayscale hover:grayscale-0 transition-all ease-in-out duration-500"
		/>
	);
}

const links: Link[] = [
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

/**
 * A navigation bar that renders a list of links.
 *
 * @returns {JSX.Element} The JSX element for the navigation bar.
 */
const NavBar = (): JSX.Element => {
	const linkItems = links.map((link) => (
		<li key={link.to}>
			<NavLink
				className={({ isActive }) =>
					isActive ? "font-semibold" : "font-medium text-muted-foreground"
				}
				to={link.to}
				viewTransition
			>
				{link.content}
			</NavLink>
		</li>
	));
	return (
		<>
			<nav className="flex items-center justify-between text-base">
				<ul className="flex items-center gap-5">
					<li>
						<NavLink to="/" className="font-bold" viewTransition>
							<Avatar className="ring-2 ring-gray-500 hover:ring-orange-500 border">
								<ImageBlurHash
									src={me}
									alt="Profile Image Avatar"
									blurhash="LCDvH8E01t-C_8NHbcnh0P$%}FEM"
								/>
								<AvatarFallback>AM</AvatarFallback>
							</Avatar>
						</NavLink>
					</li>
					{linkItems}
				</ul>
				<ul>
					<li>
						<ModeToggle />
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};
export default NavBar;
