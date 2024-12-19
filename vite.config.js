import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Ensure the server binds to all network interfaces
    port: process.env.PORT || 3000, // Use the port provided by Render or fall back to 3000
  },
});
