const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin);
  eleventyConfig.addPassthroughCopy("./src/styles/*.scss");
  eleventyConfig.addPassthroughCopy("./src/assets/");

  return {
    dir: {
      input: "src",
    }
  }
}
