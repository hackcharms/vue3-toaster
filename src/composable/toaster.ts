import { computed, reactive } from "vue";
import { ToasterInterface, ToasterType, UseToasterInterface } from "../types";
import { links, validateToastObject } from "../utils";
import { useToasterConfig } from ".";
const _toasters = reactive<ToasterInterface[]>([]);
export function useToaster(): UseToasterInterface {
  /**
   * Description
   * @returns {string} ToasterId you can use it uniquely identify _toasters
   */
  function add(_toastObj: Partial<ToasterInterface>): string {
    const defaultOptions = useToasterConfig().all;
    const _tempToast = validateToastObject(
      Object.assign({}, _toastObj),
      defaultOptions.value
    );
    _toasters.push(_tempToast);
    return _tempToast.id;
  }
  function addSpecificToast({
    message = "info" as string | Partial<ToasterInterface>,
    type = "info" as ToasterType,
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
    message: string | Partial<ToasterInterface>
  ): ReturnType<typeof addSpecificToast> {
    return addSpecificToast({
      type: "success",
      message,
    });
  }
  function info(
    message: string | Partial<ToasterInterface>
  ): ReturnType<typeof addSpecificToast> {
    return addSpecificToast({
      type: "info",
      message,
    });
  }
  function warning(
    message: string | Partial<ToasterInterface>
  ): ReturnType<typeof addSpecificToast> {
    return addSpecificToast({
      type: "warning",
      message,
    });
  }
  function error(
    message: string | Partial<ToasterInterface>
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
    warning,
    error,
    info,
    remove,
    clear,
    toasters,
  };
}
