module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      backgroundImage: {
        'freshBg': "url('https://kachabazar-store.vercel.app/_next/image?url=%2Fbanner-1.jpg&w=1080&q=75')",
        "tastBg":"url('https://kachabazar-store.vercel.app/_next/image?url=%2Fbanner-2.jpg&w=1080&q=75')",
        "heroBg":"url('https://kachabazar-store.vercel.app/_next/image?url=%2Fslider%2Fslider-1.jpg&w=1080&q=75')",
        "cateBg1":"url('https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=1080&q=75')",
        "cateBg2":"url('https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fcta-bg-2.jpg&w=1080&q=75')",
        "cateBg3":"url('https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fcta-bg-3.jpg&w=1080&q=75')",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        openSans: "'Open Sans', sans-serif",
      },
      colors:{
        "title":"#000000",
        "paragraph":"#4b5563",
      }
    },
  },
  plugins: [],
};
