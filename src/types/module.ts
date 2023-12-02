import ToastContainer from "../components/ToastContainer.vue";
import type { Toaster } from "../types";
export {};

declare module "vue" {
  interface ComponentCustomProperties {
    $toaster: Toaster;
    ToastContainer: typeof ToastContainer;
    globalProperties: {
      $toaster: Toaster;
    };
  }
}
