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

