import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'fluxe-bg': '#0F1115',
        'fluxe-card': '#1A1D24',
        'status-red': '#B91C1C',
        'status-yellow': '#D97706',
        'status-green': '#15803D',
        'action-blue': '#2563EB',
        'badge-purple': '#7E22CE',
        'text-muted': '#9CA3AF',
      },
    },
  },
  plugins: [],
};
export default config;