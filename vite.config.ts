
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: process.env.DEPLOY_TARGET === 'GH_PAGES'
    ? '/shravanvotarikari-portfolio/'  // For GitHub Pages
    : '/',                              // For Vercel or local dev
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  server: {
    host: "::",
    port: 8080
  },
  define: {
    // Make environment variables available to the client
    'import.meta.env.VITE_DEPLOY_TARGET': JSON.stringify(process.env.DEPLOY_TARGET)
  },
}));
