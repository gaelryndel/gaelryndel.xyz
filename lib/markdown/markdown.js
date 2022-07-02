const markdown = require('markdown-it');

module.exports = (() => {
  const options = Object.assign({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
    quotes: '“”‘’',
  });

  const plugins = [
    require('markdown-it-abbr'),
    require('markdown-it-accessible-lists'),
    [
      require('markdown-it-attribution'),
      {
        classNameContainer: false,
        classNameAttribution: false,
        marker: '—',
        removeMarker: false,
      },
    ],
    require('markdown-it-deflist'),
    require('markdown-it-footnote'),
    require('./footnote.js'),
    require('markdown-it-link-attributes'),
    require('markdown-it-sub'),
    require('markdown-it-sup'),
  ];

  const parser = markdown(options);

  if (plugins) {
    plugins.forEach((plugin) => {
      if (Array.isArray(plugin)) {
        parser.use(...plugin);
      } else {
        parser.use(plugin);
      }
    });
  }

  return parser;
})();
