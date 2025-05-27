// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(4px)' },
        },
      },
      animation: {
        'bounce-x': 'bounceX 0.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
