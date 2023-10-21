// Require the 'webpack' module.
var webpack = require('webpack');

// Define and export a function that configures Karma.
module.exports = function (config) {
  config.set({

    // Specify the browser to use for testing, in this case, PhantomJS.
    browsers: ['PhantomJS'],

    // Configure whether to run tests only once (for continuous integration).
    singleRun: !!process.env.CI,

    // Define testing frameworks to use, in this case, Mocha.
    frameworks: ['mocha'],

    // Specify the files to include in the testing environment, including polyfills and test files.
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      process.env.WEBPACK_DLLS === '1' && './static/dist/dlls/dll__vendor.js',
      'tests.webpack.js'
    ].filter(function (x) { return !!x; }),

    // Set up preprocessors to transform the specified files (e.g., through Webpack and source mapping).
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    // Define the reporters for test results, in this case, using the 'mocha' reporter.
    reporters: ['mocha'],

    // Specify the Karma plugins used in the testing environment.
    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-phantomjs-launcher"),
      require("karma-sourcemap-loader")
    ],

    // Configure Webpack settings to be used during testing.
    webpack: {
      devtool: 'inline-source-map',
      entry: '',
      // ... (module rules, resolve, and other settings)

      // Define Webpack plugins used during testing (e.g., LoaderOptionsPlugin, IgnorePlugin).
      plugins: [
        new webpack.LoaderOptionsPlugin({
          test: /\.(less|scss)/,
          options: {
            postcss: function (webpack) {
              return [
                // ... (various PostCSS plugins)
              ]
            }
          }
        }),
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          // Define global variables for the application.
          __CLIENT__: true,
          __SERVER__: false,
          __DEVELOPMENT__: true,
          __DEVTOOLS__: false,
          __DLLS__: false
        })
      ]
    },

    // Configuration for the WebpackDevServer used during testing.
    webpackServer: {
      noInfo: true
    },

    // Additional configuration for the development server.
    devServer: {
      stats: 'errors-only',
    }

  });
};
