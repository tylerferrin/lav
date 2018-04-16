require('dotenv').config()

module.exports = {
  head: {
    title: 'Holland Andrews',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Like A Villain Web Site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900|Open+Sans:300,400,600,700,800'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Environment Variables
  */
  env: {
    spaceId: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: ['~/assets/global.css'],
  plugins: [
    '~/plugins/contentful'
  ]
}
