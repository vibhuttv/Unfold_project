// Use Webpack's require.context to create a context for importing test files from the './src' directory.
var context = require.context('./src', true, /-test\.js$/);

// The context.keys() method returns an array of matching file paths based on the provided regular expression.
context.keys().forEach(context);
