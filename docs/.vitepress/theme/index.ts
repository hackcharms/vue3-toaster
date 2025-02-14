// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ToastPlugin from "vue3-toaster";
import "vue3-toaster/styles";
// import ToastPlugin from "../src";
// import App from "../../playground/App.vue";




export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(ToastPlugin, {
      closable: false,
    })
  }
} satisfies Theme
