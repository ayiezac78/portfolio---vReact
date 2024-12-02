import { NavLink, Outlet, Link } from "react-router";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import me from "@/assets/profile_avatar.webp";
import { ModeToggle } from "./mode-toggle";
import { FileText, Mail } from "lucide-react";
import MobileSideMenuBar from "./MobileSideMenuBar";
import MenuLinks from "./MenuLinks";
import { useMediaQuery } from "usehooks-ts";
import ImageBlurHash from "./ImageBlurHash";
import resume from "@/assets/Maniago_Resume.pdf";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { Button } from "./ui/button";

const NavBar = (): JSX.Element => {
	const matches = useMediaQuery("(max-width: 1280px)");

	const avatarStyle = location.pathname === "/" ? "ring-2 ring-primary" : "";

	return (
		<>
			<NavigationMenu className="flex items-center justify-between">
				<NavigationMenuList className="flex items-center gap-3">
					<NavigationMenuItem>
						<NavLink to="/" viewTransition>
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
					</NavigationMenuItem>
					{!matches && <MenuLinks />}
				</NavigationMenuList>
				<NavigationMenuList className="flex items-center gap-2">
					<NavigationMenuItem>
						<TooltipProvider>
							<Tooltip delayDuration={0}>
								<TooltipTrigger>
									<Button asChild size={"icon"} variant={"ghost"} className="rounded-full">
										<a aria-label="resume" href={resume} target="_blank" rel="noopener noreferrer">
											<FileText className="h-[1.2rem] w-[1.2rem]" />
										</a>
									</Button>
								</TooltipTrigger>
								<TooltipContent side="bottom" className="rounded-full">
									<p>View Resume</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<TooltipProvider>
							<Tooltip delayDuration={0}>
								<TooltipTrigger>
									<Button asChild size={"icon"} variant={"ghost"} className="rounded-full">
										<Link
											to="mailto:admaniago01@gmail.com"
											rel="noopener noreferrer"
											target="_blank"
										>
											<Mail aria-label="email" className="h-[1.2rem] w-[1.2rem]" />
										</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent side="bottom" className="rounded-full">
									<p>Send Email</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<ModeToggle />
					</NavigationMenuItem>
					{
						matches && (
							<NavigationMenuItem>
								<MobileSideMenuBar />
							</NavigationMenuItem>
						)
					}
				</NavigationMenuList>
			</NavigationMenu>
			<Outlet />
		</>
	);
};
export default NavBar;

