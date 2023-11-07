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
Revolutionize your Vue.js 3 development with `vue3-toaster`, a lightweight and fully customizable toast notification package that seamlessly blends into your design, requiring zero third-party dependencies for a cleaner bundle size and offering effortless customization to match your exact design requirements.
Easily integrate toast notifications into your Vue.js components and tailor their look and feel to match your exact requirements.
Easy-to-use composables and plugins for effortless integration.

# How to use
  There are multiple way to use `vue3-toaster` package
  - [Register as plugin](#Register-as-plugin)
  - [Direct import](#Direct-import)
## Register as plugin
## Direct import
  
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