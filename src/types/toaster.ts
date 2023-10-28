export type ToasterType = "warning" | "success" | "info" | "error";
export type ToasterOption = Record<string, string>;
export interface Toaster {
  id: string;
  title: string;
  type: ToasterType;
  text: string;
  options: ToasterOption;
}
