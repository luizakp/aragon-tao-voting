module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'Arial', 'sans-serif'],
      over: ['Overpass', 'Arial', 'sans-serif'],
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
          600: '#4724D6',
        },
        gray: {
          DEFAULT: '#20232C',
          0: '#F9FAFC',
          50: '#F5F5F5',
          100: '#DDE4E9',
          200: '#ABBECF',
          300: '#637381',
          400: '#546992',
          500: '#212B36',
          600: '#1B1E2A',
        },
        blue: {
          DEFAULT: '#3164FA',
          0: '#EDF3F9',
          20: '#B8D5F7',
          50: '#7CA7F9',
          100: '#00A3FF',
          200: '#367BFF',
          300: '#4724D6',
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
      backgroundImage: (theme) => ({
        home: "url('/images/homeBg.svg')",
        aboutBanner: "url('/images/aboutBanner.png')",
        about: "url('/images/aboutBg.svg')",
        aboutParameters: "url('/images/aboutParameters.png')",
        config: "url('/images/configBg.png')",
        form: "url('/images/submitBg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
