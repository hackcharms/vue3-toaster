import { useContainer } from "../composable";
import ToastContainer from "../components/ToastContainer.vue";
export {};

declare module "vue" {
  interface ComponentCustomProperties {
    $toast: ReturnType<typeof useContainer>;
    Toaster: typeof ToastContainer;
  }
}
