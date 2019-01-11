const withPlugins = require("next-compose-plugins");
const emoji = require("remark-emoji");
const optimizedImages = require("next-optimized-images");
const withStylus = require("@zeit/next-stylus");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [emoji]
  }
});

module.exports = withPlugins([
  [withStylus, {}],
  [optimizedImages, { optimizeImagesInDev: true }],
  [withMDX, { pageExtensions: ["js", "jsx", "md", "mdx"] }]
]);
