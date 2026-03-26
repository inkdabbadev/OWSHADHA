/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        void:       '#0B0906',
        deep:       '#141210',
        warm:       '#FAF8F5',
        cream:      '#F3EDE5',
        stone:      '#EAE4DC',
        'stone-md': '#D5CEC0',
        wood:       '#8B5A2B',
        'wood-lt':  '#A67C52',
        ink:        '#1A1714',
        'ink-mid':  '#4A4540',
        'ink-muted':'#8A8480',
        'ink-ghost':'#B8B4AE',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        shimmer: {
          '0%,100%': { backgroundPosition: '0% 50%'   },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        scanLine: {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top'    },
          '45%':  { transform: 'scaleY(1)', transformOrigin: 'top'    },
          '55%':  { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'fade-up-1': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.12s both',
        'fade-up-2': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.26s both',
        'fade-up-3': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.40s both',
        'fade-up-4': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.54s both',
        'fade-up-5': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.68s both',
        'shimmer':   'shimmer 3s ease-in-out infinite',
        'scan-line': 'scanLine 2.5s ease-in-out infinite',
        'marquee':   'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
