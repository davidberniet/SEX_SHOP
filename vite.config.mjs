import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [tailwindcss(), react(), symfonyPlugin()],
    build: {
        rollupOptions: {
            input: {
                app: "./assets/app.jsx",
            },
        },
    },
});
