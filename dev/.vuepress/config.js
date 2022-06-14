module.exports = {
  title: 'vuepress-plugin-girls-frontline',
  base: '/vuepress-plugin-girls-frontline/',
  plugins: [
    [
      require('../../src'),
      {
        width: 380,
        height: 600,
        model: '',
        right: 10,
        bottom: 10,
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/sunnyxujian/vuepress-plugin-girls-frontline',
      },
    ],
  },
}
