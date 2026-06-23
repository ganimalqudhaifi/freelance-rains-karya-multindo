import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  			display: ['var(--font-playfair)', 'Georgia', 'serif']
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				'50': 'var(--primary-50)',
  				'100': 'var(--primary-100)',
  				'200': 'var(--primary-200)',
  				'300': 'var(--primary-300)',
  				'400': 'var(--primary-400)',
  				'500': 'var(--primary-500)',
  				'600': 'var(--primary-600)',
  				'700': 'var(--primary-700)',
  				'800': 'var(--primary-800)',
  				'900': 'var(--primary-900)',
  				dark: 'var(--primary-dark)',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			gold: {
  				DEFAULT: 'var(--gold)',
  				'50': 'var(--gold-50)',
  				'100': 'var(--gold-100)',
  				'200': 'var(--gold-200)',
  				'400': 'var(--gold-400)',
  				'500': 'var(--gold-500)',
  				'600': 'var(--gold-600)',
  				'700': 'var(--gold-700)'
  			},
  			neutral: {
  				DEFAULT: 'var(--neutral)',
  				'400': 'var(--neutral-400)',
  				dark: 'var(--neutral-dark)',
  				light: 'var(--neutral-light)'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			soft: '0 10px 40px -15px rgba(29, 40, 87, 0.18)',
  			card: '0 20px 50px -20px rgba(29, 40, 87, 0.25)',
  		},
  		keyframes: {
  			'fade-up': {
  				'0%': { opacity: '0', transform: 'translateY(28px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in': {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' }
  			},
  			'scale-in': {
  				'0%': { opacity: '0', transform: 'scale(0.94)' },
  				'100%': { opacity: '1', transform: 'scale(1)' }
  			},
  			pop: {
  				'0%': { opacity: '0', transform: 'scale(0.9)' },
  				'100%': { opacity: '1', transform: 'scale(1)' }
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-12px)' }
  			},
  			'pulse-ring': {
  				'0%': { transform: 'scale(0.9)', opacity: '0.6' },
  				'70%, 100%': { transform: 'scale(1.6)', opacity: '0' }
  			}
  		},
  		animation: {
  			'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
  			'fade-in': 'fade-in 0.8s ease both',
  			'scale-in': 'scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
  			pop: 'pop 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
  			float: 'float 6s ease-in-out infinite',
  			'pulse-ring': 'pulse-ring 2s cubic-bezier(0.66, 0, 0, 1) infinite'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
