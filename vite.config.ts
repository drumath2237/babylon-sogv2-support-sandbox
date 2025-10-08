import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      base: "/babylon-sogv2-support-sandbox/",
    };
  }

  return {};
});
