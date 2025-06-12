export default defineConfig(({ mode }) => {
  const plugins = [react()];

  if (mode === "development") {
    plugins.push(componentTagger());
  }

  return {
    base: mode === "production" && process.env.DEPLOY_TARGET === "GH_PAGES"
      ? "/votarikarishravan-portfolio/"
      : "/", // ✅ set to "/" for Vercel
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
