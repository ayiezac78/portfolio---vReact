import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { FontaineTransform } from "fontaine";

const options = {
	fallbacks: ["Arial"],
	resolvePath: (id: string | number) => new URL(`.${id}`, import.meta.url),
};
export default defineConfig({
	plugins: [react(), FontaineTransform.vite(options)],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
