# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
3. 

# Index

 - [Introduction](#introduction)
 - [How to use](#how-to-use)
 - [Register as plugin](#register-as-plugin)
 - [Interfaces](#interfaces)
 - [Composable](#composable)
 - [Composable Methods](#composable-methods)
 - [Events](#events)
 - [Slots](#slots)
 - [Examples](#examples)

# Introduction
`vue3-toaster` is a VueJs 3 package for toasting/notification for the web page. It's light weight no external dependency and fully customizable. It has easy to use composable and plug in that can be directly use.

# How to use
## Register as plugin
## using composable
  
# Interfaces

|name|description|
|----|-----|
|[ToastVariant](#ToastVariant)| main Cont
|[ToastContainerTheme](#toastcontainertheme)| Interface for Theme
|[ToastContainerConfig](#ToastContainerConfig)| Interface for available option for plugin registration
|[MouseEvents](#MouseEvents)| Available mouse events on Toaster Component
|[ToastProps](#ToastProps)| Interface for Toast message
|[ToastSlotType](#ToastSlotType)| Available Slots for component 

### ToastVariant
```ts
type ToastVariant = "warn" | "success" | "info" | "error";
```
### ToastContainerTheme
```ts
 type ToastContainerTheme = {
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
   toasterMaxWidth: string ;
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
   theme: ToastContainerTheme;
   // on: MouseEvents;
   pauseOnHover: boolean;
   closable: boolean;
   closeOnDoubleClick: boolean;
 };

```
### MouseEvents
```ts
export type MouseEvents = {
  onMouseover: (event: Event) => void;
  onMouseleave: (event: Event) => void;
  onDblclick: (event: Event) => void;
};

```
### ToastSlotType
```ts
export type ToastSlotType = {
  default(props: { props: ToastSlotProps; on: MouseEvents }): any;
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

# Composable

|name|description|
|----|-----|
|[useToaster](toaster-type)| Composable to manipulate toaster

## useToaster
```ts
interface Toaster {
  add(toastObj: Partial<ToastProps>): string;
  success(message: string | Partial<ToastProps>): string | undefined;
  info(message: string | Partial<ToastProps>): string | undefined;
  warn(message: string | Partial<ToastProps>): string | undefined;
  error(message: string | Partial<ToastProps>): string | undefined;
  remove(toastId: string): string | void;
  toasters: ToastProps[];
}
```

## Composable Methods
### add
- Add method is use to fire an toast with all over ridden properties, and return the unique uuid that can be use to manually remove the toast component before it expired.
- ___examples___
### Using Composable (Composition API)
```ts
import { useToaster } from 'vue3-toaster'
const ToasterId = useToaster().add({
  title: Congratulations,
  type: success,
  text: 'You have Done it.',
})
```
### Using inject method if you have [register as a plugin](#register-as-plugin) (Composition API)
```ts
import { useToaster } from 'vue3-toaster'
const toaster = inject('$toast');
const ToasterId = toaster.add({
  title: Congratulations,
  type: success,
  text: 'You have Done it.',
})
```
### Using `this` , if you have [register as a plugin](#register-as-plugin) (Option API)
```ts
export default{
  methods:{
    fireToast(){
      const ToasterId = this.$toast.add({
        title: Congratulations,
        type: success,
        text: 'You have Done it.',
      })
    }
  }
}
```
- _Please Note this.$toast only works in Option API if have [registered as Plugin](#register-as-plugin)_