import { reactive } from "vue";
import { Toaster } from "../types";
import { generateToastId, getDefaultToastData } from "../utils";

const toasters = reactive<Toaster[]>([]);
export function useContainer() {
  function add(_toastObj: Partial<Toaster>): string {
    const id = generateToastId();
    const _defaultToastData = getDefaultToastData();
    const _tempToast: Toaster = Object.assign(_defaultToastData, _toastObj);
    toasters.push(_tempToast);
    return id;
  }
  function remove(_toastId: string): string | void {
    let index = toasters.findIndex((_toast) => _toast.id === _toastId);
    if (index < 0) {
      return console.warn(`Not active Toaster Found with Id "${_toastId}"`);
    }
    toasters.splice(index, 1);
    return _toastId;
  }
  return {
    add,
    remove,
    toasters,
  };
}
