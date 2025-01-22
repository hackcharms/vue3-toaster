# Interfaces

| name                                          | description                                            |
| --------------------------------------------- | ------------------------------------------------------ |
| [ToastVariant](#toastvariant)                 | Represents the available types for toast notifications.|
| [ToastContainerTheme](#toastcontainertheme)   | Defines the visual and styling options for the toast container.|
| [ToastContainerConfig](#toastcontainerconfig) | Defines the global configuration options for the toast container|
| [ToastSlotType](#toastslottype)               | Defines the available slots for the ToastContainer component |
| [ToastProps](#toastprops)                     | Defines the properties of an individual toast notification. |
| [Toaster](#toaster)                           | Defines the interface for the useToaster() composable, providing methods for interacting with toasts.|
| [UseToasterConfigType](#usetoasterconfigtype) | Defines the interface for the useToasterConfig() composable, providing methods for managing the global toaster configuration.|
| [PluginProperties](#plugin-properties)         | Defines the properties available to the vue3-toaster plugin.|

## ToastVariant

```ts
type ToastVariant = "warn" | "success" | "info" | "error";
```

## ToastContainerTheme

```ts
export type ToastContainerTheme = {
  zIndex: string | number;
  top: string;
  bottom: string;
  left: string;
  right: string;
  iconSize: string;
  successColor: string;
  warnColor: string;
  infoColor: string;
  errorColor: string;
  gray: string;
  toasterMaxWidth: string;
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
  translateX: string;
  direction: -1 | 1;
};
```

## ToastContainerConfig

```ts
export type ToastContainerConfig = {
  theme: Partial<ToastContainerTheme>;
  pauseOnHover: boolean;
  closable: boolean;
  closeOnDoubleClick: boolean;
  duration: number;
};
```

## ToastSlotProps
```ts
type ToastSlotProps = Readonly<
ToastProps & {
    destroyToaster: () => void;
    pauseCountdown: (value: boolean) => void;
  }
>;
```

## ToastSlotType

```ts
export type ToastSlotType = {
  default(props: ToastSlotProps): any;
  icon(props: Pick<ToastSlotProps, "type">): any;
  clearIcon(props: {}): any;
  content(props: Pick<ToastSlotProps, "type" | "text" | "title">): any;
};
```

## ToastProps

```ts
export interface ToastProps {
  id: string;
  title: string;
  type: ToastVariant;
  text: string;
  options: Partial<Exclude<ToastContainerConfig, "theme">>;
}
```

## Toaster

```ts
export interface Toaster {
  add(_toastObj: Partial<ToastProps>): string;
  success(message: string): string | undefined;
  info(message: string): string | undefined;
  warn(message: string): string | undefined;
  error(message: string): string | undefined;
  remove(_toastId: string): string | void;
  clear(_toastIds?: string[]): void;
  toasters: ComputedRef<ToastProps[]>;
}
```

## UseToasterConfigType

```ts
interface UseToasterConfigType {
  update(Option: ToastContainerConfig): ComputedRef<ToastContainerConfig>;
  all: ComputedRef<ToastContainerConfig>;
  cssVariables: Record<string, string>;
}
```
## Plugin Properties
```ts
import ToastContainer from "../components/ToastContainer.vue";

interface PluginProperties{
    $toaster: Toaster;
    ToastContainer: typeof ToastContainer;
    globalProperties: {
      $toaster: Toaster;
    };
  }
```