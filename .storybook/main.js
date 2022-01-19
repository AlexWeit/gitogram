// const custom = require("../node_modules/@vue/cli-service/webpack.config")(null, "development");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  // "webpackFinal": config => {
  //   return {
  //     ...config,
  //     module: {...config.module, rules: custom.module.rules},
  //     resolve: custom.resolve
  //   };
  // }
};
