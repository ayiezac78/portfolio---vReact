import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MobileSideMenuBar = () => {
	return (
		<Sheet>
			<SheetTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full">
				<Menu className="h-[1.2rem] w-[1.2rem]" />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="text-start">Menu</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default MobileSideMenuBar;
