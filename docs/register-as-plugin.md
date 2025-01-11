# Register as plugin

## vue.js 

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

## nuxt.js

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
