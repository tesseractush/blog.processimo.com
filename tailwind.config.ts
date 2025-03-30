
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'fade-out': {
					from: { opacity: '1' },
					to: { opacity: '0' },
				},
				'slide-in': {
					from: { transform: 'translateY(10px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'glass': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))',
				'glass-dark': 'linear-gradient(to right bottom, rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0.3))',
			},
			backdropBlur: {
				'xs': '2px',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100%',
						color: 'var(--tw-prose-body)',
						'[class~="lead"]': {
							color: 'var(--tw-prose-lead)',
						},
						a: {
							color: 'var(--tw-prose-links)',
							textDecoration: 'none',
							fontWeight: '500',
						},
						'a:hover': {
							textDecoration: 'underline',
						},
						strong: {
							color: 'var(--tw-prose-bold)',
							fontWeight: '600',
						},
						'ol[type="A"]': {
							listStyleType: 'upper-alpha',
						},
						'ol[type="a"]': {
							listStyleType: 'lower-alpha',
						},
						'ol[type="A" s]': {
							listStyleType: 'upper-alpha',
						},
						'ol[type="a" s]': {
							listStyleType: 'lower-alpha',
						},
						'ol[type="I"]': {
							listStyleType: 'upper-roman',
						},
						'ol[type="i"]': {
							listStyleType: 'lower-roman',
						},
						'ol[type="I" s]': {
							listStyleType: 'upper-roman',
						},
						'ol[type="i" s]': {
							listStyleType: 'lower-roman',
						},
						'ol[type="1"]': {
							listStyleType: 'decimal',
						},
						'ol > li': {
							position: 'relative',
						},
						'ul > li': {
							position: 'relative',
						},
						blockquote: {
							fontWeight: '500',
							fontStyle: 'normal',
							color: 'var(--tw-prose-quotes)',
							borderLeftWidth: '0.25rem',
							borderLeftColor: 'var(--tw-prose-quote-borders)',
							quotes: '"\\201C""\\201D""\\2018""\\2019"',
						},
						'blockquote p:first-of-type::before': {
							content: '',
						},
						'blockquote p:last-of-type::after': {
							content: '',
						},
						code: {
							color: 'var(--tw-prose-code)',
							fontWeight: '600',
						},
						'code::before': {
							content: '',
						},
						'code::after': {
							content: '',
						},
						'pre code': {
							fontFamily: 'var(--font-mono)',
						},
						'h1, h2, h3, h4, h5, h6': {
							fontFamily: 'var(--font-serif)',
						},
					},
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
