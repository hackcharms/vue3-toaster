import { AppContext } from "vue";
interface PluginOptions {}
export default {
  install: (app: AppContext, options: PluginOptions) => {
    app.config.globalProperties.$toast = () => {};
    console.log(options);
  },
};
