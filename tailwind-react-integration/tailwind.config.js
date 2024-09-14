module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],  // This ensures only used styles are included in the final build.
  darkMode: false,  
  theme: { extend: {} },  
  variants: { extend: {} },
  plugins: [],
};
