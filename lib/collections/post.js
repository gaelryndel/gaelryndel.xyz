module.exports = (collectionApi) => {
  return collectionApi
    .getFilteredByTag('post')
    .filter((item) => item.data.permalink !== false)
    .sort((a, b) => {
      return b.date - a.date;
    });
};
