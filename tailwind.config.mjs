import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Metropolis', ...defaultTheme.fontFamily.sans],
			},
			screens: {
				'2xl': '1408px',
				'3xl': '1536px',
				// => @media (min-width: 1600px) { ... }
				'maxlg': { 'max': '1023px' },
				// => @media (max-width: 1023px) { ... }
			},
			keyframes: {
				'cd-bounce-1': {
					'0%': {
						opacity: 0,
						transform: 'scale(.5)'
					},

					'60%': {
						opacity: 1,
						transform: 'scale(1.2)'
					},

					'to': {
						transform: 'scale(1)'
					}
				},
				'moving-background': {
					'0%': {
						transform: 'translateY(0)',
						opacity: 0
					},
					'66%': {
						opacity: 0.4
					},
					'100%': {
						transform: 'translateY(-150px)',
						opacity: 0
					}
				},
				scrolldown: {
					'0%': {
						opacity: 0,
						height: '6px'
					},

					'40%': {
						opacity: 1,
						height: '10px'
					},

					'80%': {
						transform: 'translate(0, 20px)',
						height: '10px',
						opacity: 0
					},

					'100%': {
						height: '3px',
						opacity: 0
					},
				},
				pulse54: {
					'from': {
						opacity: 0
					},

					'to': {
						opacity: 0.5
					}
				},
				sombras: {

					'0%': {
						'box-shadow': '0 0 0 0 rgba(255, 255, 255, 0.45),  0 0 0 10px rgba(255, 255, 255, 0.45)'
					},
					'100%': { 'box-shadow': ' 0 0 0 10px rgba(255, 255, 255, 0.45), 0 0 0 25px rgba(255, 255, 255, 0)' },
				},
				typing: {
					'from': {
						width: 0
					},
				},
				blink: {
					'50%': {
						'border-color': 'transparent',
					},
				},
				marquee: {
					'from': { transform: 'translateX(0%)' },
					'to': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
			animation: {
				typing: 'typing 2s steps(17), blink .5s infinite step-end alternate',
				sombras: 'sombras 1.5s linear infinite',
				scrolldown: 'scrolldown 1.5s infinite',
				pulse54: 'pulse54 500ms ease infinite alternate',
				'moving-background': 'moving-background 5s ease-in-out',
				'cd-bounce-1': 'cd-bounce-1 .6s',
				marquee: 'marquee 40s linear infinite',
				marquee2: 'marquee2 30s linear infinite',
			},
			backgroundImage: {
				'gradient-card': 'linear-gradient(45deg, #4f39fa, #da62c4 30%, hsl(17, 24%, 90%) 60%);',
				360: 'linear-gradient(180deg,rgba(46,229,216,.2),rgba(6,46,81,.7)),url(../src/images/fondo-360.jpg)',
				'homepage-hero-before': 'radial-gradient(100% 68% at 70% 15%,transparent 40%,white 79%),conic-gradient(from 90deg at 1px 1px,rgba(0,0,0,0) 90deg,rgba(202,212,215,.2) 0)',
				'homepage-hero-after': 'linear-gradient(0deg,rgba(3,25,51,.45),rgba(11,22,82,.45)),url(../src/images/hero-image.jpg)'
			},
			transitionProperty: {
				'dropShadow': 'drop-shadow, filter',
			},
			dropShadow: {
				'4xl': ['0px 0px 20px rgba(255, 221, 31, 0.75)', '0 0px 30px rgba(255, 221, 31, 0.95)']
			},
			backgroundPosition: {
				100: '100%'
			},
			colors: {
				'freshmarket-primary': '#3ca837',
				'freshmarket-secondary': '#b1c81b',
				'ic-primary': '#192543',
				'ic-secondary': '#c19227'
			},
			boxShadow: {
				'3xl': 'rgb(16 254 254 / 32%) 0px 47px 165px, rgb(16 254 254 / 24%) 0px 30.463px 96.6319px, rgb(16 254 254 / 20%) 0px 18.1037px 52.5556px, rgb(16 254 254 / 16%) 0px 9.4px 26.8125px, rgb(16 254 254 / 13%) 0px 3.82963px 13.4444px, rgb(16 254 254 / 8%) 0px 0.87037px 6.49306px',
				card: '0 0.5em 1em -0.125em hsl(0deg 0% 4% / 10%), 0 0 0 1px hsl(0deg 0% 4% / 2%)'
			}
		},
		container: {
			center: true
			// padding: {
			// '2xl': '1rem',
			// }
		},
	},
	plugins: [],
}
