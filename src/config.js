module.exports = {
  siteTitle: 'Ehmad Saeed | Developer & Designer',
  siteDescription:
    'Ehmad is a Computer Scientist based in Pakistan, exploring (and occasionally designing) exceptional websites, applications, and designs.',
  siteKeywords:
    'Ehmad Saeed, Ehmad, Saeed, bchiang7, software engineer, front-end engineer, web developer, javascript, pakistan',
  siteUrl: 'https://ehmadsaeed.me',
  siteLanguage: 'en_US',
  name: 'Ehmad Saeed',
  location: 'Lahore, PK',
  email: 'justehmadsaeed@gmail.com',
  github: 'https://github.com/justEhmadSaeed',
  twitterHandle: '@justEhmadSaeed',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/justEhmadSaeed',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/justEhmadSaeed',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/justEhmadSaeed',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/justEhmadSaeed',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
