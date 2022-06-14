const { resolve } = require("path");

module.exports = (options = {}) => ({
  name: "vuepress-plugin-girls-frontline",
  enhanceAppFiles: resolve(__dirname, "enhanceAppFile.js"),
  globalUIComponents: "GirlsFrontline",
  define: {
    OPTIONS: options,
  },
});
