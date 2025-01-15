import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				fonts: {
					heading: 'var(--heading)',
					body: 'var(--body)',
					special: 'var(--special)',
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)',
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)',
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)',
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)',
				},
				tertiary: {
					DEFAULT: 'var(--tertiary)',
					foreground: 'var(--tertiary-foreground)',
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)',
				},
				accent: {
					'1': 'var(--accent-1)',
					'2': 'var(--accent-2)',
					'3': 'var(--accent-3)',
					'4': 'var(--accent-4)',
					'5': 'var(--accent-5)',
					foreground: 'var(--accent-foreground)',
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)',
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)',
					foreground: 'var(--accent-foreground)',
				},
				sidebar: {
					DEFAULT: 'var(--sidebar-background)',
					foreground: 'var(--sidebar-foreground)',
					primary: 'var(--sidebar-primary)',
					'primary-foreground': 'var(--sidebar-primary-foreground)',
					accent: 'var(--sidebar-accent)',
					'accent-foreground': 'var(--sidebar-accent-foreground)',
					border: 'var(--sidebar-border)',
					ring: 'var(--sidebar-ring)',
				}
			},
			fontFamily: {
				body: ['Dosis', 'serif'],
				Cute_Rabbit: ['Cute_Rabbit', 'serif'],
				MorningBakery: ['MorningBakery', 'serif'],
				Luckiest: ['Luckiest', 'serif'],
				Magic: ['Magic-Bubble', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 4px)',
				sm: 'calc(var(--radius) - 8px)'
			}
		}
	},
	plugins: [require( "tailwindcss-animate" )],
} satisfies Config;
