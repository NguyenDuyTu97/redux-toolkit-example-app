/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@redux': path.resolve(__dirname, './src/redux'),
    }
  },
};