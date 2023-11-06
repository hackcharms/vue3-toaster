import "./scss/index.scss";
export { ToastContainer } from "./components";
export * from "./composable";
export type { ToastContainerConfig, ToastVariant, Toaster } from "./types";
export { defaultConfig } from "./utils";
import Plugin from "./plugins";
export default Plugin;