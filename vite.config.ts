import { defineConfig } from 'vite'; // ✅ This line was missing
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" && process.env.DEPLOY_TARGET === "GH_PAGES"
      ? "/votarikarishravan-portfolio/"
      : "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
