<!-- @format -->
<p align="center">
<img width="200px" align="center" src="https://github.com/hackcharms/vue3-toaster/blob/gh-pages/assets/Vue3-toaster-logo-color-1139e330.png?raw=true"/>
</p>
<h2 align="center">Vue3 Toaster</>
<h2 align="center"><a href="https://hackcharms.github.io/vue3-toaster/" target="_blank">Demo and Playground</a></h2>
<p align="center">
<img width="100%" align="center" src="https://github.com/hackcharms/vue3-toaster/assets/48487312/eb462f4b-c8be-4005-b19e-9164bf1cbef0"/>
</p>

## Index
- [Demo and Playground](#demo-and-playground)
- [Index](#index)
- [Introduction](#introduction)
- [How to Install](#how-to-install)
- [How to use](#how-to-use)
  - [Register as plugin](#register-as-plugin)
    - [in vue](#in-vue)
    - [in nuxt](#in-nuxt)
  - [Direct import](#direct-import)
    - [Vue.js project](#vuejs-project)
    - [Nuxt.js Project](#nuxtjs-project)
- [How to fire toast (working example)](#how-to-fire-toast-working-example)
    - [Using Composable (Composition API)](#using-composable-composition-api)
    - [Using inject method (if registerd as a plugin in `(Composition API)`)](#using-inject-method-if-registerd-as-a-plugin-in-composition-api)
    - [Using `this` (if registerd as a plugin `(Option API)`)](#using-this-if-registerd-as-a-plugin-option-api)
- [Interfaces](#interfaces)
    - [ToastVariant](#toastvariant)
    - [ToastContainerTheme](#toastcontainertheme)
    - [ToastContainerConfig](#toastcontainerconfig)
    - [ToastSlotType](#toastslottype)
    - [ToastProps](#toastprops)
    - [Toaster](#toaster)
    - [UseToasterConfigType](#usetoasterconfigtype)
    - [Plugin Properties](#plugin-properties)
- [Composable](#composable)
  - [useToaster](#usetoaster)
- [useToasterConfig](#usetoasterconfig)
- [Slots](#slots)
  - [1. default](#1-default)
  - [2. icon](#2-icon)
  - [3. clearIcon](#3-clearicon)
  - [4. content](#4-content)


## Introduction

Revolutionize your Vue.js 3 development with `vue3-toaster`, a lightweight and fully customizable toast notification package that seamlessly blends into your design, requiring zero third-party dependencies for a cleaner bundle size and offering effortless customization to match your exact design requirements.
Easily integrate toast notifications into your Vue.js components and tailor their look and feel to match your exact requirements.
Easy-to-use composables and plugins for effortless integration.

## How to Install
using NPM
```sh
npm i vue3-toaster
```
using Yarn
```sh
yarn add vue3-toaster
```

## How to use

There are mainly two ways to use `vue3-toaster` package.

- [Register as plugin](#register-as-plugin)
- [Direct import](#direct-import)

### Register as plugin

#### in vue

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

#### in nuxt

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

### Direct import

#### Vue.js project

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

[CodeSandBox Composition Api example](https://codesandbox.io/p/sandbox/vue3-toaster-composition-api-5pcknh?file=%2Fsrc%2FApp.vue&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clpnu8cy100063b6hldsy043k%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clpnu8cy100023b6hili730ca%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clpnu8cy100033b6h59po2i0l%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clpnu8cy100053b6h85occd4u%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clpnu8cy100023b6hili730ca%2522%253A%257B%2522id%2522%253A%2522clpnu8cy100023b6hili730ca%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpnvukqn01aw3b6hqs5mg3a5%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A5%252C%2522startColumn%2522%253A21%252C%2522endLineNumber%2522%253A5%252C%2522endColumn%2522%253A21%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.vue%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpnvukqn01aw3b6hqs5mg3a5%2522%257D%252C%2522clpnu8cy100053b6h85occd4u%2522%253A%257B%2522id%2522%253A%2522clpnu8cy100053b6h85occd4u%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpnu8cy100043b6hjt31ucqa%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpnu8cy100043b6hjt31ucqa%2522%257D%252C%2522clpnu8cy100033b6h59po2i0l%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clpnu8cy100033b6h59po2i0l%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

#### Nuxt.js Project

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


## How to fire toast (working example) 
#### Using Composable (Composition API)

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

#### Using inject method (if [registerd as a plugin](#register-as-plugin) in `(Composition API)`)

```ts
import { useToaster } from "vue3-toaster";
const toaster = inject("$toaster");
const ToasterId = toaster.add({
  title: Congratulations,
  type: success,
  text: "You have Done it.",
});
```

#### Using `this` (if [registerd as a plugin](#register-as-plugin) `(Option API)`)

```ts
export default {
  methods: {
    fireToast() {
      const ToasterId = this.$toaster.add({
        title: Congratulations,
        type: success,
        text: "You have Done it.",
      });
    },
  },
};
```

[CodeSandBox Option Api example](https://codesandbox.io/p/sandbox/vue3--jr3q5w?file=%2Fsrc%2FApp.vue&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clpnu8cy100063b6hldsy043k%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clpnu8cy100023b6hili730ca%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clpnu8cy100033b6h59po2i0l%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clpnu8cy100053b6h85occd4u%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clpnu8cy100023b6hili730ca%2522%253A%257B%2522id%2522%253A%2522clpnu8cy100023b6hili730ca%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpnw178z00023b6hnh29cgnt%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.vue%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpnw178z00023b6hnh29cgnt%2522%257D%252C%2522clpnu8cy100053b6h85occd4u%2522%253A%257B%2522id%2522%253A%2522clpnu8cy100053b6h85occd4u%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpnu8cy100043b6hjt31ucqa%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpnu8cy100043b6hjt31ucqa%2522%257D%252C%2522clpnu8cy100033b6h59po2i0l%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clpnu8cy100033b6h59po2i0l%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

- _Please Note `this.$toaster` only works in Option API if you have [registered as Plugin](#register-as-plugin)_

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
  <img width="800px" alt="image" src="https://github.com/hackcharms/vue3-toaster/assets/48487312/f0babb2c-7067-4408-892a-15e402853b8e">
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
