import { useContainer, useToasterConfig } from "../composable";
import { Toaster } from "../components";
import type { App } from "vue";
import { ToasterOption } from "../types";
export default {
  install: (app: App, options: Partial<ToasterOption>) => {
    useToasterConfig().update(options);
    app.config.globalProperties.$toast = useContainer();
    app.component("Toaster", Toaster);
    app.provide("$toast", useContainer());
  },
};
