## Interfaces

| name                                          | description                                            |
| --------------------------------------------- | ------------------------------------------------------ |
| [ToastVariant](#toastvariant)                 | main Cont                                              |
| [ToastContainerTheme](#toastcontainertheme)   | Interface for Theme                                    |
| [ToastContainerConfig](#toastcontainerconfig) | Interface for available option for plugin registration |
| [ToastProps](#toastprops)                     | Interface for Toast message                            |
| [ToastSlotType](#toastslottype)               | Available Slots for component                          |

#### ToastVariant

```ts
type ToastVariant = "warn" | "success" | "info" | "error";
```

#### ToastContainerTheme

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

#### ToastContainerConfig

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

#### ToastSlotType

```ts
export type ToastSlotType = {
  default(props: ToastSlotProps): any;
  icon(props: Pick<ToastSlotProps, "type">): any;
  clearIcon(props: {}): any;
  content(props: Pick<ToastSlotProps, "type" | "text" | "title">): any;
};
```

#### ToastProps

```ts
export interface ToastProps {
  id: string;
  title: string;
  type: ToastVariant;
  text: string;
  options: Partial<Exclude<ToastContainerConfig, "theme">>;
}
```

#### Toaster

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

#### UseToasterConfigType

```ts
interface UseToasterConfigType {
  update(Option: ToastContainerConfig): ComputedRef<ToastContainerConfig>;
  all: ComputedRef<ToastContainerConfig>;
  cssVariables: Record<string, string>;
}
```
#### Plugin Properties
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

## Composable

| name                                  | Interface                                     | description                             |
| ------------------------------------- | --------------------------------------------- | --------------------------------------- |
| [useToaster](#usetoaster)             | [Toaster](#toaster)                           | Composable to manipulate toaster        |
| [useToasterConfig](#usetoasterconfig) | [UseToasterConfigType](#usetoasterconfigtype) | Composable to manipulate toaster Config |

### useToaster

It implements the [Toaster](#toaster) interface, following are the purpose of it's methods and data.

- #### add
  `useToaster().add()` method is the most flexible method, it takes `Partial<ToastProps>` as argument where you can define the title if you want to use it different than the native titles and many more option to control the UI and UX. You can check the [ToastProps](#toastprops) interface for more details.
- #### success
  `useToaster().success()` accept string and create toaster with title as `Success`.
- #### info
  `useToaster().info()` accept string and create toaster with title as `Information`.
- #### warn
  `useToaster().warn()` accept string and create toaster with title as `Warning`.
- #### error
  `useToaster().error()` accept string and create toaster with title as `Error`.

_*Note:*_ - All above methods return a unique uuid that can be use to manually remove the toast component before it expired.

## useToasterConfig

It take cares of configuration of theme and options, it implements [UseToasterConfigType](#usetoasterconfigtype), it has following methods

- #### update

`useToasterConfig().update()` method is used to update the global config of toaster.

_note_:- Alternatively you can pass props in `<ToastContainer/>` component same as shown in the [Vue.js project](#vuejs-project) section

- #### all
  `useToasterConfig().all` it return the all applied global configurations.
- #### cssVariables
  `useToasterConfig().cssVariables` it return the converted global theme options values in css variables.
- #### default configuration

```ts
export const defaultConfig: ToastContainerConfig = {
  theme: {
    zIndex: 9999,
    top: "0",
    bottom: "auto",
    left: "0",
    right: "auto",
    iconSize: "40px",
    successColor: "#2bde3f",
    warnColor: "#ffc007",
    infoColor: "#1d72f3",
    errorColor: "#de0909",
    gray: "#aaaaaa",
    toasterMaxWidth: "500px",
    animationDuration: 1000,
    animationFunction: "ease-in-out",
    translateX: "200px",
    direction: 1,
    toastBackgroundColor: "#ffff",
  },
  closable: true,
  pauseOnHover: true,
  closeOnDoubleClick: true,
  duration: 10,
};
```

## Slots
<p align="center">
  <img width="800px" alt="image" src="https://github.com/hackcharms/vue3-toaster/assets/48487312/f0babb2c-7067-4408-892a-15e402853b8e"/>
</p>

Slots interface had been defined here [ToastSlotType](#toastslottype),
there are 4 slots provided by the component.

### 1. default

```ts
interface {
  id: string;
  title: string;
  type: ToastVariant;
  text: string;
  destroyToaster: () => void;
  pauseCountdown: (value: boolean) => void;
}

```

### 2. icon

```ts
interface {
  type: "warn" | "success" | "info" | "error";
  title: string;
}
```

### 3. clearIcon

```ts
interface {
}
```

### 4. content

```ts
interface {
  type: "warn" | "success" | "info" | "error";
  title: string;
  text: string;
}
```
