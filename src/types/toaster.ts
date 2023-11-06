import { ComputedRef } from "vue";
export type ToastVariant = "warn" | "success" | "info" | "error";
type ToastContainerTheme = {
  top: string | number;
  bottom: string | number;
  left: string | number;
  right: string | number;
  iconSize: number | string;
  successColor: string;
  warnColor: string;
  infoColor: string;
  errorColor: string;
  gray: string;
  toasterMaxWidth: string | number;
  animationDuration: number;
  animationFunction:
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "step-end"
    | "step-start"
    | `cubic-bezier(${number},${number},${number},${number})`;
  toastBackgroundColor: string;
  translateX: number;
  direction: -1 | 1;
};
export type ToastContainerConfig = {
  theme: ToastContainerTheme;
  // on: MouseEvents;
  pauseOnHover: boolean;
  closable: boolean;
  closeOnDoubleClick: boolean;
  duration: number;
};
export type MouseEvents = {
  onMouseover: (event: Event) => void;
  onMouseleave: (event: Event) => void;
  onDblclick: (event: Event) => void;
};
export interface ToastProps {
  id: string;
  title: string;
  type: ToastVariant;
  text: string;
  options: Partial<Exclude<ToastContainerConfig, "theme">>;
}

type ToastSlotProps = Readonly<
  ToastProps & {
    destroyToaster: () => void;
    stopCountdown: (value: boolean) => void;
  }
>;
export type ToastSlotType = {
  default(props: { props: ToastSlotProps; on: MouseEvents }): any;
  icon(props: Pick<ToastSlotProps, "type">): any;
  clearIcon(props: {}): any;
  content(props: Pick<ToastSlotProps, "type" | "text" | "title">): any;
};
export interface Toaster {
  add(_toastObj: Partial<ToastProps>): string;
  success(message: string | Partial<ToastProps>): string | undefined;
  info(message: string | Partial<ToastProps>): string | undefined;
  warn(message: string | Partial<ToastProps>): string | undefined;
  error(message: string | Partial<ToastProps>): string | undefined;
  remove(_toastId: string): string | void;
  clear(_toastIds?: string[]): void;
  toasters: ComputedRef<ToastProps[]>;
}
