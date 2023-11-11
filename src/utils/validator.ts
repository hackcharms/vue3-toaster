import { ToastContainerConfig } from "./../types/toaster";
import { getDefaultToastData, links, shallowMerge } from ".";
import { ToastVariant, ToastProps } from "../types";
export function validateToastObject(
  _toastObj: Partial<ToastProps>,
  defaultOptions: ToastContainerConfig
): ToastProps {
  const _defaultToastData = getDefaultToastData();
  _toastObj.options = shallowMerge(defaultOptions, _toastObj.options);
  let _tempToast = shallowMerge(_defaultToastData, _toastObj) as ToastProps;
  if (
    !(["error", "info", "success", "warn"] as ToastVariant[]).includes(
      _tempToast?.type
    )
  ) {
    console.warn(
      `"${_tempToast.type}" is not a valid type using default type info
        @see ${links.interfaces.ToastVariant} for "ToastVariant" interfaces
        `
    );
    _tempToast.type = _defaultToastData.type;
  }
  if (!_tempToast.title) {
    _tempToast.title = _tempToast.type as string;
  }
  return _tempToast;
}
