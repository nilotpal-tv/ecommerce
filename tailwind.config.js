/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['src/components/**/*.{ts,tsx}', 'src/app/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        'display-1': [
          '96px',
          { fontWeight: '700', letterSpacing: '0px', lineHeight: '128px' },
        ],
        'display-2': [
          '72px',
          { letterSpacing: '0px', fontWeight: '700', lineHeight: '96px' },
        ],
        'heading-1': [
          '48px',
          { letterSpacing: '0px', fontWeight: '700', lineHeight: '64px' },
        ],
        'heading-2': [
          '40px',
          { letterSpacing: '0px', fontWeight: '700', lineHeight: '48px' },
        ],
        'heading-3': [
          '32px',
          { letterSpacing: '0px', fontWeight: '700', lineHeight: '40px' },
        ],
        'heading-4': [
          '24px',
          { letterSpacing: '0px', fontWeight: '700', lineHeight: '32px' },
        ],
        'heading-5': [
          '20px',
          { letterSpacing: '0px', fontWeight: '700', lineHeight: '24px' },
        ],
        'heading-6': [
          '16px',
          { letterSpacing: '0px', fontWeight: '700', lineHeight: '20px' },
        ],
        'heading-sm': [
          '14px',
          { letterSpacing: '0px', fontWeight: '700', lineHeight: '16px' },
        ],
        lg: [
          '18px',
          { letterSpacing: '0px', fontWeight: '500', lineHeight: '26px' },
        ],
        md: [
          '16px',
          { letterSpacing: '0px', fontWeight: '500', lineHeight: '24px' },
        ],
        sm: [
          '14px',
          { letterSpacing: '0px', fontWeight: '500', lineHeight: '21px' },
        ],
        xs: [
          '12px',
          { letterSpacing: '0px', fontWeight: '500', lineHeight: '18px' },
        ],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
