export type ToasterType = "warning" | "success" | "info" | "error";
 type ToasterTheme = {
   top: string | number;
   bottom: string | number;
   left: string | number;
   right: string | number;
   iconSize: number | string;
   successColor: string;
   warningColor: string;
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
 export type ToasterOption = {
   theme: ToasterTheme;
   // on: MouseEvents;
   pauseOnHover: boolean;
   closable: boolean;
   closeOnDoubleClick: boolean;
 };
export type MouseEvents = {
  onMouseover: (event: Event) => void;
  onMouseleave: (event: Event) => void;
  onDblclick: (event: Event) => void;
};
export interface ToasterInterface {
  id: string;
  title: string;
  type: ToasterType;
  text: string;
  // options: ToasterOption;
}

type ToasterSlotProps = Readonly<
  ToasterInterface & {
    destroyToaster: () => void;
    stopCountdown: (value: boolean) => void;
  }
>;
export type ToasterSlotType = {
  default(props: { props: ToasterSlotProps; on: MouseEvents }): any;
  icon(props: Pick<ToasterSlotProps, "type">): any;
  clearIcon(props: {}): any;
  content(props: Pick<ToasterSlotProps, "type" | "text" | "title">): any;
};
export interface UseToasterInterface {
  add(_toastObj: Partial<ToasterInterface>): string;
  success(message: string | Partial<ToasterInterface>): string | undefined;
  info(message: string | Partial<ToasterInterface>): string | undefined;
  warning(message: string | Partial<ToasterInterface>): string | undefined;
  error(message: string | Partial<ToasterInterface>): string | undefined;
  remove(_toastId: string): string | void;
  toasters: ToasterInterface[];
}

