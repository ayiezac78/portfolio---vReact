import { NavLink, Outlet, Link } from "react-router";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import me from "@/assets/profile_avatar.webp";
import { ModeToggle } from "./mode-toggle";
import { Mail } from "lucide-react";
import MobileSideMenuBar from "./MobileSideMenuBar";
import MenuLinks from "./MenuLinks";
import { useMediaQuery } from "usehooks-ts";
import ImageBlurHash from "./ImageBlurHash";



/**
 * A navigation bar that renders a list of links.
 *
 * @returns {JSX.Element} The JSX element for the navigation bar.
 */
const NavBar = (): JSX.Element => {
	const matches = useMediaQuery("(max-width: 1280px)");

	const avatarStyle = location.pathname === "/" ? "ring-2 ring-primary" : "";

	return (
		<>
			<nav className="flex items-center justify-between">
				<ul className="flex items-center gap-5">
					<li>
						<NavLink
							to="/"
							viewTransition
						>
							<Avatar className={`ring hover:ring-primary h-12 w-12 ${avatarStyle}`}>
								<ImageBlurHash
									src={me}
									width={64}
									height={64}
									alt="Profile Image Avatar"
									blurhash="LvGef%eZC~Xjt^klWFi|FgV{#8ni"
									className=""
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

