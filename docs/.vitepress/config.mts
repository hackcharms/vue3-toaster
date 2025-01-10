import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vue3-toaster",
  description: `A lightweight and fully customizable toast notification package that seamlessly blends into your design, requiring zero third-party dependencies for a cleaner bundle size and offering effortless customization to match your exact design requirements.
Easily integrate toast notifications into your Vue.js components and tailor their look and feel to match your exact requirements.`,
  themeConfig: {
    logo:'https://github.com/hackcharms/vue3-toaster/blob/gh-pages/assets/Vue3-toaster-logo-color-1139e330.png?raw=true',
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'playground', link: '/playground' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Index',
        items: [
          { text: 'introduction', link: '/introduction' },
          { text: 'How to', link: '/how-to' },
          { text: 'Register as plugin', link: '/register-as-plugin' },
          { text: 'Direct Import', link: '/direct-import' },
          { text: 'How To Fire Toast', link: '/how-to-fire-toast' },
          { text: 'Interface/Types', link: '/interface' },



          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hackcharms/vue3-toaster' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/vue3-toaster' }
    ]
  }
})
