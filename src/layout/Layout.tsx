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
			<NavBar />
			<main className="space-y-12">{children}</main>
			<Footer />
		</ThemeProvider>
	);
};

export default Layout;
