import { ToasterOption } from "./../types/toaster";
import { getDefaultToastData, links } from ".";
import { ToasterType, ToasterInterface } from "../types";
export function validateToastObject(
  _toastObj: Partial<ToasterInterface>,
  defaultOptions: ToasterOption
): ToasterInterface {
  const _defaultToastData = getDefaultToastData();
  const _theme = Object.assign(
    {},
    _toastObj.options?.theme,
    defaultOptions.theme
  );
  const _options = Object.assign({}, _toastObj.options, defaultOptions);
  _options.theme = _theme;
  _toastObj.options = _options;
  let _tempToast = Object.assign(
    {},
    _defaultToastData,
    _toastObj
  ) as ToasterInterface;
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
