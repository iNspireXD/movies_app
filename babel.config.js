module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      // Required for expo-router
      "expo-router/babel",
      "react-native-reanimated/plugin",
    ],
  };
};
