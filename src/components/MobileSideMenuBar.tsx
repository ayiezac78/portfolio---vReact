import { Menu } from "lucide-react";
import { NavLink } from "react-router";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { links as navLinks } from "@/components/route-links";
import { useState } from "react";
import Footer from "./Footer";



const MobileSideMenuBar = () => {
	const [isSheetOpen, setSheetOpen] = useState(false);

	const toggleSheet = () => {
		setSheetOpen(!isSheetOpen);
	}
	const linkItems: JSX.Element[] = navLinks.map((link) => (
		<span key={link.to}>
			<NavLink
				className={({ isActive }) => `text-xl font-medium hover:text-[#EF872E] transition-colors duration-300 ease-in-out ${isActive ? "text-[#EF872E]" : "text-muted-foreground"}`}
				to={link.to}
				viewTransition
				onClick={toggleSheet}
			>
				{link.content}
			</NavLink>
		</span>
	));

	return (
		<Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
			<SheetTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full">
				<Menu className="h-[1.2rem] w-[1.2rem]" />
			</SheetTrigger>
			<SheetContent className="grid">
				<SheetHeader>
					<SheetTitle className="text-start text-3xl">Menu</SheetTitle>
					<SheetDescription className="grid justify-items-start">
						{linkItems}
					</SheetDescription>
				</SheetHeader>
				<SheetFooter>
					<Footer />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default MobileSideMenuBar;