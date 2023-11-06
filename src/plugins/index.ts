import { useToaster, useToasterConfig } from "../composable";
import { ToastContainer } from "../components";
import type { App } from "vue";
import { ToastContainerConfig } from "../types";
export default {
  install: (app: App, options: Partial<ToastContainerConfig>) => {
    useToasterConfig().update(options);
    app.config.globalProperties.$toast = useToaster();
    app.component("ToastContainer", ToastContainer);
    app.provide("$toast", useToaster());
  },
};
