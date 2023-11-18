import { createApp } from "vue";
import "./style.css";
import ToastPlugin from "vue3-toaster";
// import ToastPlugin from "../src";
import App from "./App.vue";
createApp(App)
  .use(ToastPlugin, {
    closable: false,
  })
  .mount("#app");
