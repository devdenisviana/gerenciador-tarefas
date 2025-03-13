import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adiciona a pasta src
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Azul do Tailwind (pode ser alterado)
        secondary: "#F59E0B", // Laranja do Tailwind
        backgroundDark: "#1E1E2E",
        backgroundLight: "#F8F9FA",
      },
    },
  },
  darkMode: "class", // Usa a classe "dark" para alternar temas
  plugins: [],
};

export default config;

