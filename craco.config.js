const path = require('path');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');

module.exports = {
  webpack: {
    alias: {
      '@/Components': path.resolve(__dirname, 'src/components/'),
    },
    mode: 'production',
    plugins: [
      new HtmlCriticalWebpackPlugin({
        base: path.resolve(__dirname, 'build'),
        src: 'index.html',
        dest: 'index.html',
        inline: true,
        minify: true,
        extract: true,
        width: 375,
        height: 565,
        penthouse: {
          blockJSRequests: false,
        },
      }),
    ],
  },
};
