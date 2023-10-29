import { createApp } from "vue";
import "./style.css";
import ToastPlugin from "module-x";
import { createVuetify } from "vuetify";
const vuetify = createVuetify();
import App from "./App.vue";
const _app = createApp(App).use(vuetify).use(ToastPlugin, {}).mount("#app");
