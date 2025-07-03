/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-left': 'fadeInLeft 1s ease-out forwards',
        'fade-in-right': 'fadeInRight 1s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'expand': 'expand 1.5s ease-out forwards',
        'skill-bar': 'skillBar 2s ease-out forwards',
        'skill-bar-hover': 'skillBarHover 1s ease-out forwards',
        'scroll-horizontal': 'scrollHorizontal 30s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 10s ease-in-out infinite',
        'float-diagonal': 'floatDiagonal 12s ease-in-out infinite',
        'corner-light': 'cornerLight 4s ease-in-out infinite',
        'corner-light-delay': 'cornerLight 4s ease-in-out infinite 1s',
        'corner-light-reverse': 'cornerLight 4s ease-in-out infinite 2s',
        'corner-light-delay-reverse': 'cornerLight 4s ease-in-out infinite 3s',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
        'typing-enhanced': 'typingEnhanced 6s steps(50, end) infinite, blinkCaret 1s step-end infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        expand: {
          '0%': {
            width: '0',
          },
          '100%': {
            width: '8rem',
          },
        },
        skillBar: {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
        skillBarHover: {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
        scrollHorizontal: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '25%': {
            transform: 'translateY(-20px) translateX(10px)',
          },
          '50%': {
            transform: 'translateY(-10px) translateX(-10px)',
          },
          '75%': {
            transform: 'translateY(-30px) translateX(5px)',
          },
        },
        floatReverse: {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '25%': {
            transform: 'translateY(20px) translateX(-10px)',
          },
          '50%': {
            transform: 'translateY(10px) translateX(10px)',
          },
          '75%': {
            transform: 'translateY(30px) translateX(-5px)',
          },
        },
        floatDiagonal: {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '25%': {
            transform: 'translateY(-15px) translateX(15px)',
          },
          '50%': {
            transform: 'translateY(15px) translateX(-15px)',
          },
          '75%': {
            transform: 'translateY(-25px) translateX(25px)',
          },
        },
        cornerLight: {
          '0%, 100%': {
            opacity: '0.05',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.1',
            transform: 'scale(1.2)',
          },
        },
        pulseSlow: {
          '0%, 100%': {
            opacity: '0.01',
          },
          '50%': {
            opacity: '0.03',
          },
        },
        bounceSlow: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-10px)',
          },
          '60%': {
            transform: 'translateY(-5px)',
          },
        },
        typingEnhanced: {
          'from, to': {
            width: '0',
          },
          '10%, 90%': {
            width: '100%',
          },
        },
        blinkCaret: {
          'from, to': {
            borderColor: 'transparent',
          },
          '50%': {
            borderColor: 'black',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};