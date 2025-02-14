import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue3-toaster/',
  title: "vue3-toaster",
  description: `A lightweight and fully customizable toast notification package that seamlessly blends into your design, requiring zero third-party dependencies for a cleaner bundle size and offering effortless customization to match your exact design requirements.
Easily integrate toast notifications into your Vue.js components and tailor their look and feel to match your exact requirements.`,
  head: [
    [
      'script',
      {
        crossOriginIsolated: 'anonymous',
        async: "true",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8308372251369966"
      }
    ],
    [
      'script',
      {
        async: "true",
        src: "https://www.googletagmanager.com/gtag/js?id=G-1DJ0W1YPJ9"
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-1DJ0W1YPJ9");`
    ]
  ],
  themeConfig: {
    logo: 'https://github.com/hackcharms/vue3-toaster/blob/gh-pages/assets/Vue3-toaster-logo-color-1139e330.png?raw=true',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/introduction' },
      { text: 'Playground', link: '/playground' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar:  [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Interfaces', link: '/interfaces' },
          { text: 'API', link: '/api' },
          { text: 'Configration', link: '/configration' },
          { text: 'Slots', link: '/slots' },
          { text: 'How to fire toast (working example) 🎉', link: '/how-to-fire-toast' },
          { text: 'Playground', link: '/playground' },


          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
        ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hackcharms/vue3-toaster' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/vue3-toaster' }
    ]
  }
})
