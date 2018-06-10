module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'buildatl',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */


  modules: [
    // '@nuxtjs/font-awesome',
    ['@nuxtjs/google-analytics', {
      id: 'UA-116553139-3'
    }],
    ['@nuxtjs/markdownit', { linkify: true } ]
    // {
    //   src: '@nuxtjs/markdownit',
    //   options: { linkify: true }
    // }
  ],


  css: [
    // coeur style guide
    '@/node_modules/coeur/stylecoeur/index.scss', // this imports EVERYTHING; is going to be huge




    // main project styles
    '@/assets/css/main.scss'
  ],

  // router: {
  //   extendRoutes (routes, resolve) {
  //     routes.push({
  //       name: 'animals',
  //       path: '/animals/:name',
  //       component: resolve(__dirname, 'pages/hello.vue')
  //     })
  //   }
  // },

  build: {
    /*
    ** Run ESLint on save
    */

    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: ["transform-vue-jsx", "transform-runtime", "transform-object-rest-spread"],
    },
    vendor: ['cytosis'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push(
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        },{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  generate: {
    fallback: true, // if you want to use '404.html'
  }

}
