# Configuration

## Global Configuration
- ## 1. During Plugin Registration:
    When registering the ToastPlugin in your main file, you can pass configuration options to the plugin. These options will be globally to all toasts.
    - ### In Vuejs
        ```ts
        import ToastPlugin from "vue3-toaster";
        createApp(App)
        .use(ToastPlugin, {
            closable: false, 
            pauseOnHover: false, 
            closeOnDoubleClick: true,
            theme: { 
            // Customize colors, positions, etc.
            }
        })
        .mount('#app');
        ```
    - ### In Nuxt.js:
        ```ts
        import ToastPlugin from "vue3-toaster";

        export default defineNuxtPlugin((_nuxtApp) => {
        _nuxtApp.vueApp.use(ToastPlugin, {
            closable: false, 
            pauseOnHover: false, 
            closeOnDoubleClick: true,
            // ... other options
        });
        });
        ```
- ## 2. Using ToastContainer Props:
    When using ToastContainer directly, you can pass configuration options as props:
    Code snippet
```html
    <template>
    <div>
        <ToastContainer 
        v-bind="defaultOptions" 
        />
        </div>
    </template>

    <script lang="ts" setup>
    import { ToastContainer, ToastContainerConfig } from "vue3-toaster";

    const defaultOptions: ToastContainerConfig = {
    pauseOnHover: true,
    closable: true,
    closeOnDoubleClick: false,
    theme: {
        // Customize theme here
    }
    };
    </script>
```

- ## 3. Using useToasterConfig:
    If using useToasterConfig, you can update the global configuration:
    Code snippet
    ```html
    <script lang="ts" setup>
    import { ToastContainer, ToastContainerConfig, useToasterConfig } from "vue3-toaster";

    const defaultOptions: ToastContainerConfig = {
    // ... your configuration
    };

    useToasterConfig().update(defaultOptions); 
    </script>
    ```
## Individual Toast Configuration:

- ## Using  `useToaster().add():`
    When using `useToaster().add()`, you can pass specific options for each individual toast:
    ```ts
    useToaster().add({
        title: "Server Error",
        type: "error",
        text: "Please try again later.",
        duration: 5000 // Override default duration 
    });
    ```
> [!IMPORTANT]
> **Priority:**
> Local configurations (using ToastContainer props or useToasterConfig().update()) will override global configurations.

> [!INFO]
> **Theme Customization:**
> Refer to the ToastContainerTheme interface in the documentation for a complete list of theme options (colors, positions, etc.).
> By using these methods, you can effectively customize the appearance and behavior of toasts to match your application's design and user experience preferences.


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