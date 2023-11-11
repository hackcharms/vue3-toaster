/** @format */

import {
  convertToCSSVariables,
  defaultConfig,
  shallowMerge,
} from "./../utils/generator";
import { computed, ComputedRef, reactive, readonly } from "vue";
import { ToastContainerConfig, ToastContainerConfigPartial } from "../types/";
const _config = reactive<ToastContainerConfig>(
  Object.assign({}, defaultConfig)
);
interface UseToasterConfigType {
  update(
    Option: ToastContainerConfigPartial
  ): ComputedRef<ToastContainerConfig>;
  all: ComputedRef<ToastContainerConfig>;
  cssVariables: Record<string, string>;
}
export function useToasterConfig(): UseToasterConfigType {
  function update(options: ToastContainerConfigPartial) {
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
    Object.assign(_config, shallowMerge(_config, options));
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
