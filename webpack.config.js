module.exports = {
  entry: "./src/index.js", // the first file we want to look at for webpack know how to buddle all together
  module: {
    // what webpack going to do while the process, transform jsx
    loaders: [
      { test: /\.js$/, loaders: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loaders: "babel-loader", exclude: /node_modules/ },
    ],
  },
  output: {
    // where we want to save output to save too
    filename: "bundle.js",
    path: __dirname + "/public",
  },
};
