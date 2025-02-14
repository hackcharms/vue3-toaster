# API
 This section outlines the core APIs and composables available within the vue3-toaster library.

| name                                  | Interface                                     | description                             |
| ------------------------------------- | --------------------------------------------- | --------------------------------------- |
| [useToaster](#usetoaster)             | [Toaster](/interfaces#toaster)                           | Composable to manipulate toaster        |
| [useToasterConfig](#usetoasterconfig) | [UseToasterConfigType](/interfaces#usetoasterconfigtype) | Composable to manipulate toaster Config |

## useToaster

It implements the [Toaster](/interfaces#toaster) interface, following are the purpose of it's methods and data.

- ### add
  `useToaster().add()` method is the most flexible method, it takes `Partial<ToastProps>` as argument where you can define the title if you want to use it different than the native titles and many more option to control the UI and UX. You can check the [ToastProps](/interfaces#toastprops) interface for more details.
- ### success
  `useToaster().success()` accept string and create toaster with title as `Success`.
- ### info
  `useToaster().info()` accept string and create toaster with title as `Information`.
- ### warn
  `useToaster().warn()` accept string and create toaster with title as `Warning`.
- ### error
  `useToaster().error()` accept string and create toaster with title as `Error`.

::: info
_*Note:*_ - All above methods return a unique uuid that can be use to manually remove the toast component before it expired.
:::
## useToasterConfig

It take cares of configuration of theme and options, it implements [UseToasterConfigType](/interfaces#usetoasterconfigtype), it has following methods

- ### update

`useToasterConfig().update()` method is used to update the global config of toaster.

::: info
_note_:- Alternatively you can pass props in `<ToastContainer/>` component same as shown in the [configration page](/configration#_2-using-toastcontainer-props).
:::
- ### all
  `useToasterConfig().all` it return the all applied global configurations.
- ### cssVariables
  `useToasterConfig().cssVariables` it return the converted global theme options values in css variables.
- ### default configuration

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