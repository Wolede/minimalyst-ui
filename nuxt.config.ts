// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Minimalyst Design - Creative Design Consultancy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'We are a creative design agency, specializing in Brand Identity, Graphics, Illustrations, and Web Design and Development',
        },
        {
          name: 'keywords',
          content:
            'minimalyst, minimalyst design, minimal, minimalism, minimalist, creative design agency',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Round',
        },
        {
          rel: 'stylesheet',
          href: '/fonts/sheet.css', // Satoshi Font
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
})
