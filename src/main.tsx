import { lazy, StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout.tsx";

interface ComponentProps {
	children?: React.ReactNode;
}

const pages = {
	About: lazy(() => import("./pages/About")),
	Posts: lazy(() => import("./pages/Posts.tsx")),
	Projects: lazy(() => import("./pages/Projects.tsx")),
	NotFound: lazy(() => import("./pages/NotFound.tsx")),
} as Record<string, React.ComponentType<ComponentProps>>;

interface RouteDefinition {
	path: string;
	element: JSX.Element;
	errorElement: JSX.Element;
}

const createRoute = (
	path: string,
	Page: React.ComponentType<ComponentProps>,
): RouteDefinition => ({
	path,
	element: (
		<Layout>
			<Page />
		</Layout>
	),
	errorElement: <pages.NotFound />,
});

const routes: RouteDefinition[] = [
	createRoute("/", App),
	createRoute("/about", pages.About),
	createRoute("/projects", pages.Projects),
	createRoute("/posts", pages.Posts),
];

const router = createBrowserRouter(routes);

const root: Root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
