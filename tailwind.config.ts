import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Vollkorn', 'serif'],
      mono: ['Fira\ Mono', "monospace"],
    },
  },
  plugins: [],
}
export default config
