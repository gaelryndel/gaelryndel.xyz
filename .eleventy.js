require('dotenv').config();

const { EleventyRenderPlugin } = require('@11ty/eleventy');
const pluginRss = require('@11ty/eleventy-plugin-rss');

module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setLibrary('md', require('./lib/markdown/markdown.js'));
  eleventyConfig.setTemplateFormats(['njk', 'md', '11ty.js']);

  eleventyConfig.ignores.add('README.md');
  eleventyConfig.ignores.add('./src/**/template.md');

  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter('date', require('./lib/filters/datetime.js'));
  eleventyConfig.addFilter('hostname', require('./lib/filters/hostname.js'));
  eleventyConfig.addFilter('limit', require('./lib/filters/limit.js'));
  eleventyConfig.addFilter('markdown', require('./lib/filters/markdown.js'));

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  eleventyConfig.addCollection('category', require('./lib/collections/category.js'));
  eleventyConfig.addCollection('posts', require('./lib/collections/posts.js'));

  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/media');

  return {
    dir: {
      input: 'src',
      output: '_site',
      data: '_data',
      includes: '_includes',
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
