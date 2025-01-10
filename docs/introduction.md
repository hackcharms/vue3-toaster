<!-- @format -->
<p align="center">
<img width="200px" align="center" src="https://github.com/hackcharms/vue3-toaster/blob/gh-pages/assets/Vue3-toaster-logo-color-1139e330.png?raw=true"/>
</p>
<h2 align="center">Vue3 Toaster</h2>

## Introduction

Revolutionize your Vue.js 3 development with `vue3-toaster`, a lightweight and fully customizable toast notification package that seamlessly blends into your design, requiring zero third-party dependencies for a cleaner bundle size and offering effortless customization to match your exact design requirements.
Easily integrate toast notifications into your Vue.js components and tailor their look and feel to match your exact requirements.
Easy-to-use composables and plugins for effortless integration.

<p align="center">
<img width="100%" align="center" src="https://github.com/hackcharms/vue3-toaster/assets/48487312/eb462f4b-c8be-4005-b19e-9164bf1cbef0"/>
</p>

## Index
- [Introduction](/introduction)
- [How to Install](/how-to-install)
- [How to use](/how-to-use)
  - [Register as plugin](/register-as-plugin)
    - [in vue](/register-as-plugin#in-vue)
    - [in nuxt](/register-as-plugin#in-nuxt)
  - [Direct import](/direct-import)
    - [Vue.js project](/direct-import#vuejs-project)
    - [Nuxt.js Project](/direct-import#nuxtjs-project)
- [How to fire toast (working example)](/how-to-fire-toast)
    - [Using Composable (Composition API)](/how-to-fire-toast#using-composable-composition-api)
    - [Using inject method (if registerd as a plugin in `(Composition API)`)](/how-to-fire-toast#using-inject-method-if-registerd-as-a-plugin-in-composition-api)
    - [Using `this` (if registerd as a plugin `(Option API)`)](/how-to-fire-toast#using-this-if-registerd-as-a-plugin-option-api)
- [Interfaces](/interfaces)
    - [ToastVariant](/interfaces#toastvariant)
    - [ToastContainerTheme](/interfaces/#toastcontainertheme)
    - [ToastContainerConfig](/interfaces/#toastcontainerconfig)
    - [ToastSlotType](/interfaces/#toastslottype)
    - [ToastProps](/interfaces/#toastprops)
    - [Toaster](/interfaces/#toaster)
    - [UseToasterConfigType](/interfaces/#usetoasterconfigtype)
    - [Plugin Properties](/interfaces/#plugin-properties)
- [Composable](#composable)
  - [useToaster](#usetoaster)
- [useToasterConfig](#usetoasterconfig)
- [Slots](#slots)
  - [1. default](#1-default)
  - [2. icon](#2-icon)
  - [3. clearIcon](#3-clearicon)
  - [4. content](#4-content)