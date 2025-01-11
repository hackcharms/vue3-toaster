# Interfaces

| name                                          | description                                            |
| --------------------------------------------- | ------------------------------------------------------ |
| [ToastVariant](#toastvariant)                 | main Cont                                              |
| [ToastContainerTheme](#toastcontainertheme)   | Interface for Theme                                    |
| [ToastContainerConfig](#toastcontainerconfig) | Interface for available option for plugin registration |
| [ToastProps](#toastprops)                     | Interface for Toast message                            |
| [ToastSlotType](#toastslottype)               | Available Slots for component                          |

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