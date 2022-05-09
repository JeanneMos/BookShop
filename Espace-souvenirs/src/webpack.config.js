const path = require("path");
const { nanoid } = require("nanoid");

const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
/* const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const isDevMode = env && env.NODE_ENV === 'development' ? true : false; */



module.exports = (env) => {
  const isDevMode = !env.production || env.production !== true;

  return {
    entry: {
      index: "./docroot/themes/custom/souvenirs/src/js/index.js",
      styles: "./docroot/themes/custom/souvenirs/src/scss/index.scss"
    },
    devtool: isDevMode ? "source-map" : false,
    mode: isDevMode ? "development" : "production",
    output: {
      filename: isDevMode ? "[name].bundle.js" : "[name].bundle.min.js",
      path: isDevMode ? path.resolve(__dirname, "./docroot/themes/custom/souvenirs/js/dist_dev") : path.resolve(__dirname, "./docroot/themes/custom/souvenirs/js/dist"),
      clean: true,
    },
    cache: false,
    resolve: {
      extensions: ["*", ".js", ".jsx"],
      alias: {
        Images: path.resolve(__dirname, "./docroot/themes/custom/souvenirs/src/assets/images"),
        Components: path.resolve(__dirname, "./docroot/themes/custom/souvenirs/src/js/components"),
      },
    },
    module: {
      rules: [
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.s[ac]ss|css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            /*  'style-loader', */
        
            {
              loader: "css-loader",
              options: {
                sourceMap: isDevMode,
                url: true,
                import: true,
              },
            },

            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
 
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      "postcss-preset-env",
                      {
                        // Options
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
        {
          test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
          use: ["raw-loader"],
        },
        {
          test: /(\.(png|jpe?g|gif|webp|avif)$|^((?!font).)$)/,
          //type: 'asset/resource',
          loader: "url-loader",
          options: {
            limit: 50000,
            url: true,
          }  
        },
        {
          test: /\.svg$/,
          use: ({resource}) => {
            const id = nanoid();
            return ({
              loader: "react-svg-loader",
              options: {
                svgo: {
                  plugins: [
                    {cleanupIDs: {
                      prefix: `${id}`,
                    }},
                  ],
                },
              },
            });},
        },
        { 
          test: /\.txt/,
          type: "asset/source",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    optimization: {
      usedExports: true,
      minimize: !isDevMode,
      minimizer: [
        new CssMinimizerPlugin({
          parallel: true,
          minimizerOptions: {
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.squooshMinify,
            options: {
              encodeOptions: {
                mozjpeg: {
                  // That setting might be close to lossless, but it’s not guaranteed
                  // https://github.com/GoogleChromeLabs/squoosh/issues/85
                  quality: 70,
                },
              },
            },
          },
        }),
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            sourceMap: true,
          }
        }),
      ],
    },
    plugins: [
      new ESLintPlugin({
        fix: false
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        defaultSizes: "gzip",
        analyzerMode: "static"
      }),
    ],
  };
};

