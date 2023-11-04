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
# How to use
# Register as plugin
  
# Interfaces

|name|description|
|----|-----|
|[ToasterType](#toastertype)| main Cont
|[ToasterTheme](#toastertheme)| Interface for Theme
|[ToasterOption](#toasteroption)| Interface for available option for plugin registration
|[MouseEvents](#mouseevents)| Available mouse events on Toaster Component
|[ToasterInterface](#toasterinterface)| Interface for Toast message
|[ToasterSlotType](#toasterslottype)| Available Slots for component 

### ToasterType
```ts
type ToasterType = "warning" | "success" | "info" | "error";
```
### ToasterTheme
```ts
 type ToasterTheme = {
   top: string | number;
   bottom: string | number;
   left: string | number;
   right: string | number;
   iconSize: number | string;
   successColor: string;
   warningColor: string;
   infoColor: string;
   errorColor: string;
   gray: string;
   toasterMaxWidth: string | number;
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
   translateX: number;
   direction: -1 | 1;
 };

```
### ToasterOption
```ts
 export type ToasterOption = {
   theme: ToasterTheme;
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
### ToasterSlotType
```ts
export type ToasterSlotType = {
  default(props: { props: ToasterSlotProps; on: MouseEvents }): any;
  icon(props: Pick<ToasterSlotProps, "type">): any;
  clearIcon(props: {}): any;
  content(props: Pick<ToasterSlotProps, "type" | "text" | "title">): any;
};
```
### ToasterInterface
```ts
export interface ToasterInterface {
  id: string;
  title: string;
  type: ToasterType;
  text: string;
  // options: ToasterOption;
}

```

# Composable

|name|description|
|----|-----|
|[useToaster](toaster-type)| Composable to manipulate toaster

## useToaster
```ts
interface UseToasterInterface {
  add(toastObj: Partial<ToasterInterface>): string;
  success(message: string | Partial<ToasterInterface>): string | undefined;
  info(message: string | Partial<ToasterInterface>): string | undefined;
  warning(message: string | Partial<ToasterInterface>): string | undefined;
  error(message: string | Partial<ToasterInterface>): string | undefined;
  remove(toastId: string): string | void;
  toasters: ToasterInterface[];
}
```

## Composable Methods
### add
- Add method is use to fire an toast with all over ridden properties, and return the unique uuid that can be use to manually remove the toast component before it expired.
- ___examples___
### Using Composable (Composition API)
```ts
import { useToaster } from 'module-x'
const ToasterId = useToaster().add({
  title: Congratulations,
  type: success,
  text: 'You have Done it.',
})
```
### Using inject method if you have [register as a plugin](#register-as-plugin) (Composition API)
```ts
import { useToaster } from 'module-x'
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