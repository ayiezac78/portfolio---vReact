import { NavLink, Outlet, Link } from "react-router";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Image } from "@unpic/react";
import me from "@/assets/me.webp";
import { blurhashToCssGradientString } from "@unpic/placeholder";
import { ModeToggle } from "./mode-toggle";
import { Mail } from "lucide-react";
import MobileSideMenuBar from "./MobileSideMenuBar";
import MenuLinks from "./MenuLinks";
import { useMediaQuery } from "usehooks-ts";

interface ImageBlurHashProps {
	readonly src: string;
	readonly alt: string;
	readonly blurhash: string;
}

const ImageBlurHash = ({ src, alt, blurhash }: ImageBlurHashProps): JSX.Element => {
	const placeholder = blurhashToCssGradientString(blurhash);
	return (
		<Image
			src={src}
			alt={alt}
			background={placeholder}
			priority={true}
			width={38}
			height={38}
			className={`grayscale hover:grayscale-0 transition-all ease-in-out duration-500 ${window.location.pathname === "/" ? "grayscale-0" : "grayscale"}`}
		/>
	);
};

/**
 * A navigation bar that renders a list of links.
 *
 * @returns {JSX.Element} The JSX element for the navigation bar.
 */
const NavBar = (): JSX.Element => {
	const matches = useMediaQuery("(max-width: 1280px)");

	const avatarStyle = location.pathname === "/" ? "ring-2 border ring-primary" : "";

	return (
		<>
			<nav className="flex items-center justify-between">
				<ul className="flex items-center gap-5">
					<li>
						<NavLink
							to="/"
							viewTransition
						>
							<Avatar className={`ring-2 border hover:ring-primary ${avatarStyle}`}>
								<ImageBlurHash
									src={me}
									alt="Profile Image Avatar"
									blurhash="LCDvH8E01t-C_8NHbcnh0P$%}FEM"
								/>
								<AvatarFallback>AM</AvatarFallback>
							</Avatar>
						</NavLink>
					</li>
					{!matches && <MenuLinks />}
				</ul>
				<ul className="flex items-center gap-3">
					<li>
						<Link
							to="mailto:admaniago01@gmail.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Mail aria-label="email" className="h-[1.2rem] w-[1.2rem]" />
						</Link>
					</li>
					<li>
						<ModeToggle />
					</li>
					{
						matches && (
							<li>
								<MobileSideMenuBar />
							</li>
						)
					}
				</ul>
			</nav>
			<Outlet />
		</>
	);
};
export default NavBar;

