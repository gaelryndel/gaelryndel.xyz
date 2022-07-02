module.exports = (string, value) => {
  const md = require('../markdown/markdown.js');
  const normalise = require('../utils/normalise.js');

  string = normalise(string, '');
  if (value === 'inline') {
    return md.renderInline(string);
  }
  return md.render(string);
};
