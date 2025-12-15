/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          keyframes: {
          folderOpeningSequence: {
            '0%': { transform: 'translateX(0) scale(1)' },
            '50%': { transform: 'translateX(0) scale(1.05)' },
            '100%': { transform: 'translateX(-80px) scale(1)' },
          },
          folderReturningSequence: {
            '0%': { transform: 'translateX(-80px) scale(1)' },
            '50%': { transform: 'translateX(-40px) scale(1.05)' },
            '100%': { transform: 'translateX(0) scale(1)' },
          },
          iconFadeOut: {
            '0%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
            '50%': { opacity: '0.5', transform: 'scale(1.05) rotate(-5deg)' },
            '100%': { opacity: '0', transform: 'scale(0.9) rotate(-10deg)' },
          },
          iconFadeIn: {
            '0%': { opacity: '0', transform: 'scale(0.9) rotate(10deg)' },
            '50%': { opacity: '0.5', transform: 'scale(1.05) rotate(5deg)' },
            '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
          },
          slideIn: {
            '0%': { transform: 'translateX(-100px) translateY(0) scale(0.3)', opacity: '0' },
            '60%': { transform: 'translateX(20px) translateY(-10px) scale(1.05)', opacity: '0.8' },
            '100%': { transform: 'translateX(0) translateY(0) scale(1)', opacity: '1' },
          },
          slideOut: {
            '0%': { transform: 'translateX(0) translateY(0) scale(1)', opacity: '1' },
            '100%': { transform: 'translateX(-250px) translateY(0) scale(0.2)', opacity: '0' },
          },
          fadeIn: {
            from: { opacity: '0' },
            to: { opacity: '1' },
          },
          scaleIn: {
            from: { transform: 'scale(0.95) translateY(20px)', opacity: '0' },
            to: { transform: 'scale(1) translateY(0)', opacity: '1' },
          },
        },
        // Aquí defines las animaciones (nombre + duración + timing)
        animation: {
          'folderOpeningSequence': 'folderOpeningSequence 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
          'folderReturningSequence': 'folderReturningSequence 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
          'iconFadeOut': 'iconFadeOut 0.4s ease-out forwards',
          'iconFadeIn': 'iconFadeIn 0.4s ease-out 0.2s forwards',
          'fadeIn': 'fadeIn 0.4s ease-out',
          'scaleIn': 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        },
      },
    },
  plugins: [],
}
