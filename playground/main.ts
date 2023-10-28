import { createApp } from 'vue'
import './style.css'
import { createVuetify } from "vuetify";
import "../src/scss/index.scss";
const vuetify = createVuetify();
import App from "./App.vue";
createApp(App).use(vuetify).mount("#app");
