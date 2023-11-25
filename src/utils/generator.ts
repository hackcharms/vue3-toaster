import type { ToastProps, ToastContainerConfig } from "../types";

export const defaultConfig: ToastContainerConfig = {
  theme: {
    zIndex: 9999,
    top: "0",
    bottom: "auto",
    left: "0",
    right: "auto",
    iconSize: "40px",
    successColor: "#2bde3f",
    warnColor: "#ffc007",
    infoColor: "#1d72f3",
    errorColor: "#de0909",
    gray: "#aaaaaa",
    toasterMaxWidth: "500px",
    animationDuration: 1000,
    animationFunction: "ease-in-out",
    translateX: "200px",
    direction: 1,
    toastBackgroundColor: "#ffff",
  },
  closable: true,
  pauseOnHover: true,
  closeOnDoubleClick: true,
  duration: 10,
};

export function generateToastId() {
  return Math.random().toString(36).substring(2, 9);
}
export function getDefaultToastData(): ToastProps {
  return {
    id: generateToastId(),
    type: "info",
    title: "info",
    text: "this is your info",
    options: defaultConfig,
  };
}
export function convertToCSSVariables<T = Record<string, string | number>>(
  data: T
): Record<string, string> {
  const cssVariables = {} as any;
  for (const i in data) {
    cssVariables[`--${i}`] = data[i];
  }
  return cssVariables;
}

export function shallowMerge(
  obj1: Record<string, any> = {},
  obj2: Record<string, any> = {}
) {
  const _obj1 = removeUndefinedKeys(obj1);
  const _obj2 = removeUndefinedKeys(obj2);
  for (const i in _obj1) {
    if (
      _obj1 &&
      typeof _obj1[i] === "object" &&
      _obj1.hasOwnProperty(i) &&
      !Array.isArray(_obj1[i])
    ) {
      _obj1[i] = Object.assign({}, _obj1[i], _obj2[i]);
      delete _obj2[i];
    }
  }
  return Object.assign(_obj1, _obj2);
}
function removeUndefinedKeys(obj: Record<string, any> | any) {
  const _obj = {} as Record<string, any>;
  if (typeof obj !== "object") return obj;
  for (const i in obj) {
    if (obj[i] == undefined) continue;
    _obj[i] = removeUndefinedKeys(obj[i]);
  }
  return _obj;
}
