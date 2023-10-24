import { Toaster } from "../types";

export function generateToastId() {
  return Math.random().toString(36).substring(2, 9);
}
export function getDefaultToastData(): Toaster {
  console.log(generateToastId());
  return {
    id: generateToastId(),
    type: "info",
    title: "info",
    text: "this is your info",
    options: {},
  };
}
