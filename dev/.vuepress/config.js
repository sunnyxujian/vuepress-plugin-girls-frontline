module.exports = {
  title: "vuepress-plugin-girls-frontline",
  base: "/vuepress-plugin-girls-frontline/",
  plugins: [
    [
      require("../../src"),
      {
          width: 300,
          height: 500,
          model: "",
          right: 20,
          bottom: 20
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/sunnyxujian/vuepress-plugin-girls-frontline",
      },
    ],
  },
};
