module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  lang: 'bg',
  title: 'Друмник',
  description:
    'Тези, които търсят истината, винаги трябва да бъдат предпочитани пред онези, които твърдят, че вече са я открили',

  feed: {
    atom: 'https://gaelryndel.xyz/feed.xml',
    json: 'https://gaelryndel.xyz/feed.json',
  },
  endpoint: {
    auth: "https://indieauth.com/auth",
    token: "https://tokens.indieauth.com/token",
    micropub: "https://kit.gaelryndel.xyz/micropub",
    microsub: "https://aperture.p3k.io/microsub/765",
    webmention: "https://webmention.io/gaelryndel.xyz/webmention",
  },
  author: {
    name: 'Gael Ryndel',
    handle: 'gaelryndel',
    url: 'https://gaelryndel.xyz',
    email: 'gaelryndel@pm.me',
    avatar: 'https://gaelryndel.xyz/assets/icons/avatar.png',
  },
  social: {
    github: 'https://github.com/gaelryndel',
    twitter: 'https://twitter.com/gaelryndel',
    mastodon: 'https://mastodon.social/@gaelryndel',
    pixelfed: 'https://pixelfed.social/gaelryndel',
    instagram: 'https://instagram.com/gaelryndel',
  },
  gitrepo: 'https://github.com/gaelryndel/gaelryndel.xyz',
  environment: process.env.NODE_ENV,
};
