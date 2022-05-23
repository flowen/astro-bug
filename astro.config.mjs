import {defineConfig} from 'astro/config'
// https://astro.build/config
export default defineConfig({
	root: '.',
	srcDir: './src',
	publicDir: './public',
	outputDir: './dist',
	site: 'https://flowen.me',
})
