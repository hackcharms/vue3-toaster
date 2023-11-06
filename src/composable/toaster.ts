import { computed, reactive } from "vue";
import { ToastProps, ToastVariant, Toaster } from "../types";
import { links, validateToastObject } from "../utils";
import { useToasterConfig } from ".";
const _toasters = reactive<ToastProps[]>([]);
export function useToaster(): Toaster {
  /**
   * Description
   * @returns {string} ToasterId you can use it uniquely identify _toasters
   */
  function add(_toastObj: Partial<ToastProps>): string {
    const defaultOptions = useToasterConfig().all;
    const _tempToast = validateToastObject(
      Object.assign({}, _toastObj),
      defaultOptions.value
    );
    _toasters.push(_tempToast);
    return _tempToast.id;
  }
  function addSpecificToast({
    message = "info" as string | Partial<ToastProps>,
    type = "info" as ToastVariant,
  }): ReturnType<typeof add> | undefined {
    if (!["string", "object"].includes(typeof message)) {
      console.warn(
        `${type} function accept only typeof string or Object with "Toaster" interface
            @see ${links.interfaces.Toaster} for interfaces
            ${links.methods?.[type] ? "or @see " + links.methods?.[type] : ""}
            `
      );
      return;
    }

    if (typeof message === "string") {
      return add({
        type: type,
        text: message,
      });
    }
    return add(message);
  }
  function success(
    message: string | Partial<ToastProps>
  ): ReturnType<typeof addSpecificToast> {
    return addSpecificToast({
      type: "success",
      message,
    });
  }
  function info(
    message: string | Partial<ToastProps>
  ): ReturnType<typeof addSpecificToast> {
    return addSpecificToast({
      type: "info",
      message,
    });
  }
  function warn(
    message: string | Partial<ToastProps>
  ): ReturnType<typeof addSpecificToast> {
    return addSpecificToast({
      type: "warn",
      message,
    });
  }
  function error(
    message: string | Partial<ToastProps>
  ): ReturnType<typeof addSpecificToast> {
    return addSpecificToast({
      type: "error",
      message,
    });
  }

  function remove(_toastId: string): string | void {
    let index = _toasters.findIndex((_toast) => _toast.id === _toastId);
    if (index < 0) {
      return console.warn(`No active Toaster Found with Id "${_toastId}"`);
    }
    _toasters.splice(index, 1);
    return _toastId;
  }
  function clear(_toastIds?: string[]): string[] {
    if (!_toastIds || !_toastIds?.length) {
      _toastIds = _toasters.map((toast) => toast.id);
    }
    if (_toastIds?.length) {
      _toastIds.forEach((id) => remove(id));
    }
    return _toastIds;
  }
  const toasters = computed(() => {
    return _toasters;
  });
  return {
    add,
    success,
    warn,
    error,
    info,
    remove,
    clear,
    toasters,
  };
}
