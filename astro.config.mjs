import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import rehypeFigure from './src/utils/rehypeFigure';
import externalLinks from "rehype-external-links";

export default defineConfig({
	markdown: {
		syntaxHighlight: 'prism',
		rehypePlugins: [
			[externalLinks, { rel: ['noopener', 'noreferrer'], target: '_blank' }],
			[rehypeFigure, { allImages: true, useTitle: true }],
			'rehype-picture',
		],
		extendDefaultPlugins: true,
	},
	integrations: [image({
		serviceEntryPoint: '@astrojs/image/sharp'
	})]
});