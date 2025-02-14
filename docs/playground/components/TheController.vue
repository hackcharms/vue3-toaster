<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  useToasterConfig,
  ToastVariant,
  ToastContainerConfig,
  useToaster,
} from "vue3-toaster";
import TheTheme from "./TheTheme.vue";
import TextInput from "./Form/TextInput.vue";
import SwitchInput from "./Form/SwitchInput.vue";
const { theme, ...config } = useToasterConfig().all.value;
const controller = reactive<Omit<ToastContainerConfig, "theme">>(
  Object.assign({}, config)
);
const useAddMethod = ref(true);
const toasterData = reactive({
  type: "info" as ToastVariant,
  title: "Information",
  text: "Hey This is an Information",
});
const themeRef = ref();
const copied = ref(false);
const configCodeRef = ref<HTMLPreElement>();
const reset = () => {
  Object.assign(controller, config);
  themeRef.value.reset();
};
const copyToClipboard = async () => {
  try {
    await window.navigator.clipboard.writeText(
      configCodeRef.value?.innerText as string
    );
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
    useToaster().success("Copied to clipboard");
  } catch (error) {
    console.log(error);
  }
};
const setGlobalConfig = () => {
  useToasterConfig().update({ ...controller });
};
const toast = () => {
  if (useAddMethod.value) {
    return useToaster().add({ ...toasterData, options: { ...controller } });
  }
  return useToaster()?.[toasterData.type]?.(toasterData.text);
};
</script>

<template>
  <div>
    <TheTheme ref="themeRef" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-4 mb-4">
      <div class="flex items-center">
        <label class="mx-2 w-1/2">Select Toaster Type</label>
        <select
          v-model="toasterData.type"
          class="w-1/2 bg-gray-200 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled value="">Please select one</option>
          <option value="info">Info</option>
          <option value="success">Success</option>
          <option value="warn">Warning</option>
          <option value="error">Error</option>
        </select>
      </div>

      <TextInput
        type="number"
        class="flex items-center"
        v-model="controller.duration"
        label="duration(s)"
      />
      <SwitchInput
        v-model="controller.closable"
        label="closable"
        class="flex items-center"
      />
      <SwitchInput
        v-model="controller.pauseOnHover"
        label="pauseOnHover"
        class="flex items-center"
      />
      <SwitchInput
        v-model="controller.closeOnDoubleClick"
        label="closeOnDoubleClick"
        class="flex items-center"
      />
      <SwitchInput
        v-model="useAddMethod"
        label="Use Custom Title and theme Options (If disable fire Toast will use global options)"
        class="flex items-center"
      />
      <div v-if="useAddMethod" class="col-span-1 md:col-span-2">
        <h1 class="text-lg text-center w-full">Title</h1>
        <input
          v-model="toasterData.title"
          type="text"
          class="input-text"
          placeholder="Toaster title here"
          required
        />
      </div>
      <div class="col-span-1 md:col-span-2">
        <h1 class="text-lg text-center w-full">Text</h1>
        <textarea
          v-model="toasterData.text"
          class="input-text"
          placeholder="Toaster text here"
          required
        />
      </div>
      <div class="col-span-1 md:col-span-2 text-center mt-4 mb-10">
        <button class="btn btn-primary mx-2 my-2" type="button" @click="toast">
          Toast
        </button>
        <button
          class="btn btn-success mx-2 my-2"
          type="button"
          @click="setGlobalConfig"
        >
          Apply Global Config
        </button>
        <button class="btn btn-error mx-2 my-2" type="button" @click="reset">
          Reset Selection
        </button>
        <p class="w-full">
          Please note that if
          <code class="code">Use Custom Title and theme Options</code> is enabled
          then only selected options would be applied when you click on
          <code class="code"> Toast</code> button, otherwise you have to click on
          <code class="code">Apply Global Config</code> to update the global config to see the changes.
        </p>
      </div>
    </div>
    <h1 class="my-4 text-center text-xl">Global Config Options</h1>
    <div
      class="relative p-2.5 w-full overflow-x-auto text-lg text-gray-900 bg-gray-200 dark:bg-gray-700 dark:text-white rounded"
    >
      <button
        type="button"
        class="flex absolute top-1 right-1 items-center px-3 py-2 text-xs font-medium text-gray-600 bg-gray-300 border-l border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-900 hover:text-blue-700 dark:hover:text-white"
        :disabled="copied"
        @click="copyToClipboard"
      >
        <svg
          class="w-3.5 h-3.5 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 20"
        >
          <path
            d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z"
          ></path>
          <path
            d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z"
          ></path>
        </svg>
        <span>{{ copied ? "Copied" : "Copy" }}</span>
      </button>
      <pre ref="configCodeRef">
        {{ useToasterConfig().all.value }}
      </pre>
    </div>
  </div>
</template>
