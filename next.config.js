const withPlugins = require("next-compose-plugins");
const emoji = require("remark-emoji");
const optimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [emoji]
  }
});

module.exports = withPlugins([
  [withCSS, {}],
  [withFonts, {}],
  [optimizedImages, { optimizeImagesInDev: true }],
  [withMDX, { pageExtensions: ["js", "jsx", "md", "mdx"] }]
]);
