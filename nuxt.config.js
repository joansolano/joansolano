import getRoutes from './utils/getRoutes'
import getSiteMeta from './utils/getSiteMeta'

const meta = getSiteMeta();

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'es'
    },
    titleTemplate: '%s | Joan Solano',
    title: 'Joan Solano',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: "HandheldFriendly", content: "True" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Personal website about Joan Solano' 
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Joan Solano"
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      { name: "twitter:site", content: "@joansolano21" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: "canonical",
        rel: "canonical",
        href: process.env.BASE_URL
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vueTyped.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  pwa: {
    source: '~/static/favicon.ico'
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faArrowRight',
        'faUserCircle',
        'faMapMarkerAlt',
        'faEnvelope',
        'faShareSquare',
        'faArrowCircleRight',
        'faDownload',
        'faAngleDoubleLeft',
        'faAngleLeft',
        'faAngleRight',
        'faAngleDoubleRight',
        'faRedo',
        'faUndoAlt',
        'faHome',
        'faBlog',
        'faTools',
        'faPhone'
      ],
      brands: [
        'faFacebook',
        'faInstagram',
        'faTwitter',
        'faLinkedinIn',
        'faGithub'
      ]
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-coldark-dark.css'
      }
    }
  },

  //Sitemap module configuration
  sitemap: {
    path: "/sitemap.xml",
    hostname: process.env.BASE_URL,
    gzip: true,
    routes() {
      return getRoutes()
    }
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Open Sans'
      }
    },
    theme: {
      dark: true,
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty',
        net: 'empty'
      }
    }
  }
}
