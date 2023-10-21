// Export an object containing a list of PostCSS plugins to use.
module.exports = {
  use: [
    // The 'postcss-import' plugin allows you to @import CSS files.
    'postcss-import',

    // The 'postcss-url' plugin handles URLs and data URIs in CSS.
    'postcss-url',

    // The 'postcss-cssnext' plugin provides support for future CSS features.
    'postcss-cssnext',

    // The 'postcss-browser-reporter' plugin reports errors in the browser console.
    'postcss-browser-reporter',

    // The 'postcss-reporter' plugin reports PostCSS messages in the console.
    'postcss-reporter'
  ]
};
