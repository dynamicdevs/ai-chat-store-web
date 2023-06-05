/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      "2xl": "1920px"
    },
    extend: {
      spacing: {
        15: '3.75rem',
        22: '5.5rem',
        32: '8rem',
        50: '12.5rem',
      },
    },
    fontSize: {
      "display-01": [
        "3rem",
        {
          lineHeight: "3.75rem",
        },
      ],
      "display-02": [
        "2.25rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "display-03": [
        "1.875rem",
        {
          lineHeight: "2.25rem",
        },
      ],
      "display-04": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "headline-01": [
        "1.25rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      "headline-02": [
        "1.125rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      "body-01": [
        "1rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      "body-02": [
        "0.875rem",
        {
          lineHeight: "1.25rem",
        },
      ],
      "body-03": [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      "button-01": [
        "1rem",
        {
          lineHeight: "1rem",
        },
      ],
      "button-02": [
        "0.875rem",
        {
          lineHeight: "1rem",
        },
      ],
      "button-03": [
        "0.75rem",
        {
          lineHeight: "0.75rem",
        },
      ],
      "button-04": [
        "0.625rem",
        {
          lineHeight: "0.75rem",
        },
      ],
      "caption-01": [
        "0.625rem",
        {
          lineHeight: "0.75rem",
          letterSpacing: "0.015em",
        },
      ],
      "caption-02": [
        "0.5rem",
        {
          lineHeight: "0.75rem",
          letterSpacing: "0.015em",
        },
      ],
    },
    fontFamily: {
      inter: ["Inter", "Helvetica", "Arial", "sans-serif"],
      phonk: ['var(--font-phonk)'],
    },
    colors: {
      core: {
        default: {
          content: '#3c414b',
          inverted: '#ffffff',
        },
        grey: {
          100: '#D2D2D2',
        },
        secondary: {
          light: '#251f6a',
          dark: '#1c174a',
        },
        interactive: {
          200: '#cb0046',
          100: '#f40054',
        },
        purple: '#6b68ff',
        muted: '#7e8592',
        subtle: '#d2d2d2',
        disabled: '#acb2bc',
        component: '#f6f6f6',
      },
      transparent: "transparent",
      transparency: {
        light: {
          900: 'rgba(255, 255, 255, 0.9)',
          800: 'rgba(255, 255, 255, 0.8)',
          700: 'rgba(255, 255, 255, 0.7)',
          600: 'rgba(255, 255, 255, 0.6)',
          500: 'rgba(255, 255, 255, 0.5)',
          400: 'rgba(255, 255, 255, 0.4)',
          300: 'rgba(255, 255, 255, 0.3)',
          200: 'rgba(255, 255, 255, 0.2)',
          100: 'rgba(255, 255, 255, 0.1)',
        },
        black: {
          900: 'rgba(0, 0, 0, 0.9)',
          800: 'rgba(0, 0, 0, 0.8)',
          700: 'rgba(0, 0, 0, 0.7)',
          600: 'rgba(0, 0, 0, 0.6)',
          500: 'rgba(0, 0, 0, 0.5)',
          400: 'rgba(0, 0, 0, 0.4)',
          300: 'rgba(0, 0, 0, 0.3)',
          200: 'rgba(0, 0, 0, 0.2)',
          100: 'rgba(0, 0, 0, 0.1)',
        }
      }
    },
    backgroundImage: {
      'gradient-blue': 'linear-gradient(135deg, #cf0063 0%, #5671ff 100%)',
      'gradient-pink': 'linear-gradient(180deg, #f40092 0%, #951f33 100%)',
      'banner-mobile': 'linear-gradient(179.73deg, rgba(0, 0, 0, 0.79) 0.23%, rgba(0, 0, 0, 0) 99.76%)',
      'banner-desktop': 'linear-gradient(90.05deg, rgba(0, 0, 0, 0.79) 0.04%, rgba(0, 0, 0, 0) 99.96%)',
    },
    boxShadow: {
      '01': '0px 4px 15px rgba(0, 0, 0, 0.1)',
      '02': '0px 5px 20px rgba(0, 0, 0, 0.25)',
    },
    container: () => ({
      center: true,
    }),
  },
  plugins: [],
}
