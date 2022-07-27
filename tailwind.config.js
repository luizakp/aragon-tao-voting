module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: {
          DEFAULT: '#7C80F2',
          50: '#D6B7FF',
          100: '#C9BEF1',
          200: '#986AFF',
          300: '#975BF6',
          400: '#7D80EB',
          500: '#7479FF',
        },
        gray: {
          DEFAULT: '#20232C',
          0: '#F9FAFC',
          50: '#DDE4E9',
          100: '#ABBECF',
          200: '#637381',
          300: '#546992',
          400: '#212B36',
          500: '#1B1E2A',
        },
        blue: {
          DEFAULT: '#3164FA',
          50: '#7CA7F9',
          100: '#367BFF',
          200: '#4724D6',
        },
        cyan: {
          DEFAULT: '#0FEEF1',
          50: '#95ECFF',
          100: '#16E7F2',
          200: '#08BEE5',
          300: '#0792AF',
        },
      },
      dropShadow: {
        ss: '0px 1px 3px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
