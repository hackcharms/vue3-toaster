import { getDefaultToastData, links } from ".";
import { ToasterType } from "../types";
import { Toaster } from "./../../dist/types/toaster.d";
export function validateToastObject(_toastObj: Partial<Toaster>): Toaster {
  const _defaultToastData = getDefaultToastData();
  let _tempToast: Toaster = Object.assign({}, _defaultToastData, _toastObj);
  if (
    !(["error", "info", "success", "warning"] as ToasterType[]).includes(
      _tempToast?.type
    )
  ) {
    console.warn(
      `"${_tempToast.type}" is not a valid type using default type info
        @see ${links.interfaces.ToasterType} for "ToasterType" interfaces
        `
    );
    _tempToast.type = _defaultToastData.type;
  }
  if (!_tempToast.title) {
    _tempToast.title = _tempToast.type as string;
  }
  return _tempToast;
}
