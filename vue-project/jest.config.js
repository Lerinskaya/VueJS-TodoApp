module.exports = {
  // testEnvironment: 'jsdom',
  preset: "@vue/cli-plugin-unit-jest",
  globals: {
    "vue-jest": {
      experimentalCSSCompile: true,
      resources: {
        scss: ["./src/styles/main.scss"],
      },
    },
  },
};
