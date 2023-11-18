import { createApp } from "vue";
import "./style.css";
import ToastPlugin from "vue3-toaster";
import "vue3-toaster/styles";
// import ToastPlugin from "../src";
import App from "./App.vue";
createApp(App)
  .use(ToastPlugin, {
    closable: false,
  })
  .mount("#app");
