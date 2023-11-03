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
   toastBackgroundColor: string;
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
export interface Toaster {
  id: string;
  title: string;
  type: ToasterType;
  text: string;
  options: ToasterOption;
}

type ToasterSlotProps = Readonly<
  Toaster & {
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
