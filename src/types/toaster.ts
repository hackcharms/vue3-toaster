export type ToasterType = "warning" | "success" | "info" | "error";
export type ToasterOption = Record<string, string>;
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
