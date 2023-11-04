import { reactive } from "vue";
import { ToasterInterface, ToasterType } from "../types";
import {
  generateToastId,
  getDefaultToastData,
  links,
  validateToastObject,
} from "../utils";

const toasters = reactive<ToasterInterface[]>([]);
export function useToaster() {
  /**
   * Description
   * @returns {string} ToasterId you can use it uniquely identify toasters
   */
  function add(_toastObj: Partial<ToasterInterface>): string {
    const id = generateToastId();
    const _defaultToastData = getDefaultToastData();
    let _tempToast: ToasterInterface = Object.assign(
      {},
      _defaultToastData,
      _toastObj
    );
    _tempToast = validateToastObject(_tempToast);
    toasters.push(_tempToast);
    return id;
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
    let index = toasters.findIndex((_toast) => _toast.id === _toastId);
    if (index < 0) {
      return console.warn(`No active Toaster Found with Id "${_toastId}"`);
    }
    toasters.splice(index, 1);
    return _toastId;
  }
  return {
    add,
    success,
    warning,
    error,
    remove,
    info,
    toasters,
  };
}
