export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "hunarli",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/stylesheets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/language.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/i18n",
      {
        strategy: "no_prefix",
        defaultLocale: "tm",
        lazy: true,
        langDir: "lang/",
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "hunarli_lang",
          onlyOnRoot: true,
        },
        locales: [
          {
            name: "TM",
            code: "tm",
            file: "tm.js",
          },
          {
            name: "RU",
            code: "ru",
            file: "ru.js",
          },
        ],
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
