import { useToaster, useToasterConfig } from "../composable";
import { ToastContainer } from "../components";
import type { App } from "vue";
import { ToastContainerConfigPartial } from "../types";
export default {
  install: (app: App, options: Partial<ToastContainerConfigPartial>) => {
    useToasterConfig().update(options);
    app.config.globalProperties.$toaster = useToaster();
    app.component("ToastContainer", ToastContainer);
    app.provide("$toaster", useToaster());
  },
};
