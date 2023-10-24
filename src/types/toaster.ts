export type ToasterType = "warning" | "success" | "info";
export type ToasterOption = Record<string, string>;
export interface Toaster {
  id: string;
  title: string;
  type: ToasterType;
  text: string;
  options: ToasterOption;
}
