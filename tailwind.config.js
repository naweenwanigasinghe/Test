/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F1EFFF',
          100: '#E8E4FF',
          500: '#390C90',
          600: '#290967',
          700: '#310A7B',
          900: '#100329',
        },
        teal: {
          500: '#12CEB0',
          50: 'rgba(18, 206, 176, 0.10)',
        },
        orange: {
          500: '#CE5212',
        },
        alert: {
          500: '#DA1E28',
        },
        gray: {
          50: '#F2F4F7',
          100: '#F2F4F8',
          400: '#A9ABAD',
          500: '#7E7E7E',
          600: '#6C6C6C',
          700: '#434343',
          800: '#232323',
          900: '#0B0B0B',
        },
        status: {
          draft: '#B4B100',
          draftBg: '#FFFFF0',
          operational: '#290967',
          operationalBg: '#F1EFFF',
        },
        border: {
          light: 'rgba(108, 108, 108, 0.94)',
          DEFAULT: '#C1C7CD',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, #310A7B 0%, #100329 100%)',
        'gradient-text': 'linear-gradient(90deg, #080114 0%, #290967 100%)',
        'gradient-step': 'linear-gradient(90deg, #390C90 0%, #128ECE 100%)',
      },
      boxShadow: {
        'custom': '123px 175px 60px 0 rgba(252, 252, 252, 0.00), 79px 112px 55px 0 rgba(252, 252, 252, 0.01), 44px 63px 46px 0 rgba(252, 252, 252, 0.05), 20px 28px 34px 0 rgba(252, 252, 252, 0.09), 5px 7px 19px 0 rgba(252, 252, 252, 0.10)',
        'card': '0 4px 23px 0 rgba(0, 0, 0, 0.08)',
        'avatar': '0 4px 10px 0 rgba(0, 0, 0, 0.10)',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
