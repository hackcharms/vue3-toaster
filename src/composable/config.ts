import { convertToCSSVariables, defaultConfig } from "./../utils/generator";
import { computed, reactive, readonly } from "vue";
import { ToastContainerConfig } from "../types/";
const _config = reactive<ToastContainerConfig>(
  Object.assign({}, defaultConfig)
);
export function useToasterConfig() {
  function update(options: Partial<ToastContainerConfig>) {
    if (options?.theme?.bottom && options.theme?.bottom !== "auto") {
      _config.theme.top = "auto";
    }
    if (options?.theme?.right && options.theme?.right !== "auto") {
      _config.theme.left = "auto";
    }
    /**
     * Nested values would be override instead of merge
     * thats why did not used Object.assign on top level
     */
    Object.assign(_config.theme, options.theme);
    const { theme: _, ...other } = options;
    Object.assign(_config, other);
    return all;
  }
  const all = computed(() => {
    return _config;
  });
  return {
    update,
    all,
    cssVariables: readonly(convertToCSSVariables(all.value.theme)),
  };
}
