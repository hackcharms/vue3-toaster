import { useToaster } from "../composable";
import ToastContainer from "../components/ToastContainer.vue";
export {};

declare module "vue" {
  interface ComponentCustomProperties {
    $toast: ReturnType<typeof useToaster>;
    Toaster: typeof ToastContainer;
    globalProperties: {
      $toast: ReturnType<typeof useToaster>;
    };
  }
}
