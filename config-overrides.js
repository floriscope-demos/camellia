const rewireEmotion = require("react-app-rewire-emotion");
const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

/* config-overrides.js */
module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", style: true }],
    config
  ); // change importing css to less
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" }
  })(config, env);

  return rewireEmotion(config, env, {
    inline: process.env.NODE_ENV !== "production"
  });
};
