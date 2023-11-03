import { convertToCSSVariables, toasterOption } from "./../utils/generator";
import { reactive, readonly } from "vue";
import { ToasterOption } from "../types/";
const config = reactive<ToasterOption>({ ...toasterOption });
export function useToasterConfig() {
  function update(options: Partial<ToasterOption>) {
    if (options?.theme?.bottom && options.theme?.bottom !== "auto") {
      config.theme.top = "auto";
    }
    if (options?.theme?.right && options.theme?.right !== "auto") {
      config.theme.left = "auto";
    }
    /**
     * Nested values would be override instead of merge
     * thats why did not used Object.assign on top level
     */
    Object.assign(config.theme, options.theme);
    const { theme: _, ...other } = options;
    Object.assign(config, other);
    return readonly(config);
  }
  return {
    update,
    getAll: readonly(config),
    cssVariables: readonly(convertToCSSVariables(config.theme)),
  };
}
