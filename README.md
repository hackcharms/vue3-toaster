<!-- @format -->
<center>
<img width="300px" src="https://github.com/hackcharms/vue3-toaster/blob/gh-pages/assets/Vue3-toaster-logo-color-1139e330.png?raw=true"/>
<h1> Vue3 Toaster</h1>
<a href="https://hackcharms.github.io/vue3-toaster/">
<h1>Demo and Playground </h1>
</a>
</center>

# Index

- [Introduction](#introduction)
- [How to use](#how-to-use)
- [Interfaces](#interfaces)
- [Composable](#composable)
- [Slots](#slots)
- [Examples](#examples)

# Introduction

Revolutionize your Vue.js 3 development with `vue3-toaster`, a lightweight and fully customizable toast notification package that seamlessly blends into your design, requiring zero third-party dependencies for a cleaner bundle size and offering effortless customization to match your exact design requirements.
Easily integrate toast notifications into your Vue.js components and tailor their look and feel to match your exact requirements.
Easy-to-use composables and plugins for effortless integration.

# How to use

There are mainly two ways to use `vue3-toaster` package.

- [Register as plugin](#register-as-plugin)
- [Direct import](#direct-import)

## Register as plugin

### in vue

```ts
//main.ts/.js
import ToastPlugin from "vue3-toaster";
createApp(App)
  .use(ToastPlugin, {
    closable: false,
    //.. other options
  })
  .mount("#app");
```

```html
<!-- App.vue -->
<template>
  <div>
    <!-- you don't need to import the ToastContainer component, it's auto imported in plugin -->
    <ToastContainer />
    <!--  Other stuffs -->
  </div>
</template>
```

### in nuxt

```ts
import ToastPlugin from "vue3-toaster";
export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.vueApp.use(ToastPlugin, {
    closable: false,
    pauseOnHover: false,
    closeOnDoubleClick: true,
    // other options ToastContainerConfig
  });
});
```

```html
<!-- layouts/default.vue -->
<template>
  <div>
    <!-- you don't need to import the ToastContainer component, it's auto imported in plugin -->
    <ToastContainer />
    <slot />
    <!--  Other stuffs -->
  </div>
</template>
```

## Direct import

- ### Vue.js project

```html
<!-- App.vue -->
<script lang="ts" setup>
  import { ToastContainer, ToastContainerConfig } from "vue3-toaster";
  const defaultOptions: ToastContainerConfig = {
    pauseOnHover: true,
    closable: true,
    closeOnDoubleClick: false,
    theme: {
      //
    },
  };
</script>
<template>
  <div>
    <ToastContainer v-bind="defaultOptions" />
    <!--  Other stuffs -->
  </div>
</template>
```

```html
<!-- MyComponent.vue -->
<script lang="ts" setup>
  import { useToaster } from "vue3-toaster";
  function toast() {
    useToaster().add({
      type:'info',
      title:'Congratulations'
      text:'You have successfully completed.'
      });
    useToaster().success('this is My success toaster');
  }
</script>
<template>
  <div>
    <!--  Your component templated here -->
  </div>
</template>
```

### Nuxt.js Project

for Nuxt js project code would be same, you just need to put <ToastContainer /> in your layouts.
eg

```html
<!-- layouts/default.vue -->
<script lang="ts" setup>
  import {
    ToastContainer,
    ToastContainerConfig,
    useToasterConfig,
  } from "vue3-toaster";
  const defaultOptions: ToastContainerConfig = {
    pauseOnHover: true,
    closable: true,
    closeOnDoubleClick: false,
    theme: {
      //
    },
  };
  useToasterConfig().update(defaultOptions);
</script>
<template>
  <div>
    <!-- you don't need to import the ToastContainer component, it's auto imported in plugin -->
    <ToastContainer />
    <slot />
    <!--  Other stuffs -->
  </div>
</template>
```

_*Please Note:-*_ `<ToastContainer v-bind="defaultOptions"/>` and `useToasterConfig().update(defaultOptions);` are alternative of each other it's recommended to use only one of them.

# Interfaces

| name                                          | description                                            |
| --------------------------------------------- | ------------------------------------------------------ |
| [ToastVariant](#toastvariant)                 | main Cont                                              |
| [ToastContainerTheme](#toastcontainertheme)   | Interface for Theme                                    |
| [ToastContainerConfig](#toastcontainerconfig) | Interface for available option for plugin registration |
| [ToastProps](#toastprops)                     | Interface for Toast message                            |
| [ToastSlotType](#toastslottype)               | Available Slots for component                          |

### ToastVariant

```ts
type ToastVariant = "warn" | "success" | "info" | "error";
```

### ToastContainerTheme

```ts
export type ToastContainerTheme = {
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

### ToastContainerConfig

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

### ToastSlotType

```ts
export type ToastSlotType = {
  default(props: ToastSlotProps): any;
  icon(props: Pick<ToastSlotProps, "type">): any;
  clearIcon(props: {}): any;
  content(props: Pick<ToastSlotProps, "type" | "text" | "title">): any;
};
```

### ToastProps

```ts
export interface ToastProps {
  id: string;
  title: string;
  type: ToastVariant;
  text: string;
  // options: ToastContainerConfig;
}
```

### Toaster

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

### UseToasterConfigType

```ts
interface UseToasterConfigType {
  update(Option: ToastContainerConfig): ComputedRef<ToastContainerConfig>;
  all: ComputedRef<ToastContainerConfig>;
  cssVariables: Record<string, string>;
}
```

# Composable

| name                                  | Interface                                     | description                             |
| ------------------------------------- | --------------------------------------------- | --------------------------------------- |
| [useToaster](#usetoaster)             | [Toaster](#toaster)                           | Composable to manipulate toaster        |
| [useToasterConfig](#usetoasterconfig) | [UseToasterConfigType](#usetoasterconfigtype) | Composable to manipulate toaster Config |

## useToaster

It implements the [Toaster](#toaster) interface, following are the purpose of it's methods and data.

- ### add
  `useToaster().add()` method is the most flexible method, it takes `Partial<ToastProps>` as argument where you can define the title if you want to use it different than the native titles and many more option to control the UI and UX. You can check the [ToastProps](#toastprops) interface for more details.
- ### success
  `useToaster().success()` accept string and create toaster with title as `Success`.
- ### info
  `useToaster().info()` accept string and create toaster with title as `Information`.
- ### warn
  `useToaster().warn()` accept string and create toaster with title as `Warning`.
- ### error
  `useToaster().error()` accept string and create toaster with title as `Error`.

_*Note:*_ - All above methods return a unique uuid that can be use to manually remove the toast component before it expired.

- **_examples_**

### Using Composable (Composition API)

```ts
import { useToaster } from "vue3-toaster";
// let for some use case I want only this toast message to be cleared after some event executed
function performSomeTask() {
  const ToasterId = useToaster().add({
    title: "Server Error",
    type: "error",
    text: "Please try again after some time.",
  });
  // in next try we got success response so we don't want it to be visible so we will remove it.
  useToaster().remove(ToasterId);
}
```

### Using inject method if you have [register as a plugin](#register-as-plugin) (Composition API)

```ts
import { useToaster } from "vue3-toaster";
const toaster = inject("$toast");
const ToasterId = toaster.add({
  title: Congratulations,
  type: success,
  text: "You have Done it.",
});
```

### Using `this` , if you have [register as a plugin](#register-as-plugin) (Option API)

```ts
export default {
  methods: {
    fireToast() {
      const ToasterId = this.$toast.add({
        title: Congratulations,
        type: success,
        text: "You have Done it.",
      });
    },
  },
};
```

# Slots

Slots interface had been defined here [ToastSlotType](#toastslottype),
there are 4 slots provided by the component.

## 1. default

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

## 2. icon

```ts
interface {
  type: "warn" | "success" | "info" | "error";
  title: string;
}
```

## 3. clearIcon

```ts
interface {
}
```

## 4. content

```ts
interface {
  type: "warn" | "success" | "info" | "error";
  title: string;
  text: string;
}
```

- _Please Note `this.$toast` only works in Option API if you have [registered as Plugin](#register-as-plugin)_
