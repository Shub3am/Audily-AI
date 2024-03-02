import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'primary-blue': '#1D213E',
        'primary-pink': '#3F1026',
        'text-100': '#fff',
        'text-200': '#BBB8B8',
        'text-300': '#474444',
        black: '#000000',
        'nav-bg': '#0C0A14',
        'nav-highlighted-text': '#8E488E',
      },
      screens: {
        xs: '200px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
        // xs: '280px',
        // sm: '540px',
        // md: '768px',
        // lg: '991px',
        // xl: '1024px',
        // xxl: '1140px',
        // xxxl: '1440px',
      },
      borderRadius: {
        // lg: 'var(--radius)',
        // md: 'calc(var(--radius) - 2px)',
        // sm: 'calc(var(--radius) - 4px)',
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        large: '12px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
}
export default config
