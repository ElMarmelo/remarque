import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "https://remarque.pockethost.io",
                changeOrigin: true,
                secure: false,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            },
        },
    },
});
