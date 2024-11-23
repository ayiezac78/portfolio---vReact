import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import type { ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<main className="min-h-screen flex flex-col justify-between pt-3 md:pt-8 p-8 max-w-[60ch] mx-auto w-full space-y-6">
				<NavBar />
				<section>{children}</section>
				<Footer />
			</main>
		</ThemeProvider>
	);
};

export default Layout;
