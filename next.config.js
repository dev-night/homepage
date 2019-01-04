const withPlugins = require("next-compose-plugins");
const emoji = require("remark-emoji");
const withImages = require("next-images");
const withStylus = require("@zeit/next-stylus");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [emoji]
  }
});

module.exports = withPlugins([
  [withStylus, {}],
  [withImages, {}],
  [withMDX, { pageExtensions: ["js", "jsx", "md", "mdx"] }]
]);
