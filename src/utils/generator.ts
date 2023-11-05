import { ToasterInterface, ToasterOption } from "../types";

export const toasterOption: ToasterOption = {
  theme: {
    top: 0,
    bottom: "auto",
    left: 0,
    right: "auto",
    iconSize: "40px",
    successColor: "rgba(43, 222, 63, 1)",
    warningColor: "rgba(255, 192, 7, 1)",
    infoColor: "rgba(29, 114, 243, 1)",
    errorColor: "rgba(222, 9, 9, 1)",
    gray: "rgba(170, 170, 170, 1)",
    toasterMaxWidth: "500px",
    animationDuration: 1000,
    animationFunction: "ease-in-out",
    translateX: 200,
    direction: 1,
    toastBackgroundColor: "#fff",
  },
  closable: true,
  pauseOnHover: true,
  closeOnDoubleClick: true,
  duration: 10,
};

export function generateToastId() {
  return Math.random().toString(36).substring(2, 9);
}
export function getDefaultToastData(): ToasterInterface {
  return {
    id: generateToastId(),
    type: "info",
    title: "info",
    text: "this is your info",
    options: toasterOption,
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
