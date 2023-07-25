const path = require('path');
module.exports = {
  stories: ['../**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', {
          flow: false,
          typescript: true
        }]]
      }
    });
    config.module.rules.push({
      test: /\.css$/,
      use: [{
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            config: path.resolve(__dirname, '../postcss.config.js')
          }
        }
      }],
      include: path.resolve(__dirname, '../')
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  }
};