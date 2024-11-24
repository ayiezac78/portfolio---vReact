import { NavLink, Outlet, Link } from "react-router";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Image } from "@unpic/react";
import me from "@/assets/me.webp";
import { blurhashToCssGradientString } from "@unpic/placeholder";
import { ModeToggle } from "./mode-toggle";
import { Mail } from "lucide-react";
import MobileSideMenuBar from "./MobileSideMenuBar";
import MenuLinks from "./MenuLinks";

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
			priority={true}
			width={100}
			height={100}
			className=" grayscale hover:grayscale-0 transition-all ease-in-out duration-500"
		/>
	);
}

/**
 * A navigation bar that renders a list of links.
 *
 * @returns {JSX.Element} The JSX element for the navigation bar.
 */
const NavBar = (): JSX.Element => {
	return (
		<>
			<nav className="flex items-center justify-between">
				<ul className="flex items-center gap-5">
					<li>
						<NavLink to="/" viewTransition>
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
					<MenuLinks />
				</ul>
				<ul className="flex items-center gap-3">
					<li>
						<Link
							to="mailto:admaniago01@gmail.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Mail className="h-[1.2rem] w-[1.2rem]" />
						</Link>
					</li>
					<li>
						<ModeToggle />
					</li>
					<li className="xl:hidden">
						<MobileSideMenuBar />
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};
export default NavBar;
