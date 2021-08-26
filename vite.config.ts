import { UserConfig } from "vite";

const config: UserConfig = {
  optimizeDeps: {
    include: ["@ant-design/colors"],
  },
};

export default config;
