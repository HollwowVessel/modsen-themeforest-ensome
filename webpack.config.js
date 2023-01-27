const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  entry: './src/index.tsx',

  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/'),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.bundle\.ts$/,
        use: {
          loader: 'bundle-loader',
          options: {
            name: '[name]',
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        exclude: /fonts/,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@/src': path.resolve(__dirname, 'src/'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/containers': path.resolve(__dirname, 'src/containers'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/store': path.resolve(__dirname, 'src/store'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/ui': path.resolve(__dirname, 'src/ui'),
      '@/images': path.resolve(__dirname, 'src/assets/images'),
      '@/api': path.resolve(__dirname, 'src/api'),
      '@/types': path.resolve(__dirname, 'src/types'),
      '@/theme': path.resolve(__dirname, 'src/theme'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public', 'index.html'),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
};
