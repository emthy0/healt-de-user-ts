module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
          "module-resolver",
          {
              alias: {
                  "@": "./src",
                  "@config": "./src/config",
                  "@components": "./src/components",
                  "@pages": "./src/pages",
                  "@hooks": "./src/hooks",
                  "@utils": "./src/utils",
                  "@assets": "./src/assets",
                  "@styles": "./src/styles",
                  "@constants": "./src/constants",
                  "@contracts": "./src/contracts",
                  "@providers": "./src/providers",
                  "@services": "./src/services",
                  "@store": "./src/store",
                  "@types": "./src/types",
              }
          }
      ]
  ]
  };
};
