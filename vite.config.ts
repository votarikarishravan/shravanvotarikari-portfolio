import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => ({
  base: process.env.DEPLOY_TARGET === 'GH_PAGES'
    ? '/shravanvotarikari-portfolio/'  // For GitHub Pages
    : '/',                              // For Vercel or local dev
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
}));
