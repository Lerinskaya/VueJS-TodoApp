const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: '/ToDo-VUE-project/',
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/main.scss";`,
      },
    },
  },
});
