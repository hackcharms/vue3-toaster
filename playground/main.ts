import { createApp } from "vue";
import "./style.css";
import ToastPlugin from "vue3-toaster";
// import ToastPlugin from "../src";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});
import App from "./App.vue";
createApp(App)
  .use(vuetify)
  .use(ToastPlugin, {
    closable: false,
  })
  .mount("#app");
