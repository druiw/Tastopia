import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      {
        name: "env-replace",
        config: () => ({
          define: {
            "process.env": env,
          },
        }),
      },
    ],
  };
});
