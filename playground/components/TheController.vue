<script setup lang="ts">
import { watch, ref, withDefaults, defineProps, reactive } from "vue";
import {
  ToastContainer,
  useToasterConfig,
  defaultConfig,
  ToastVariant,
  ToastContainerConfig,
  useToaster,
} from "vue3-toaster";
const { theme, ...config } = defaultConfig;
const controller = reactive<Omit<ToastContainerConfig, "theme">>(
  Object.assign({}, config)
);
const toasterData = reactive({
  type: "info" as ToastVariant,
  title: "Information",
  text: "Hey This is an Information",
});

const reset = () => {
  Object.assign(controller, config);
};
const setGlobalConfig = () => {
  useToasterConfig().update({ ...controller });
};
const toast = () => {
  useToaster().add({ ...toasterData, options: { ...controller } });
};
</script>

<template>
  <div>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="flex items-center">
        <input v-model="controller.duration" type="range" />
        <label class="ms-2">duration: {{ controller.duration }}s</label>
      </div>
      <div class="flex items-center">
        <input
          v-model="controller.closable"
          id="closable"
          type="checkbox"
          class="checkbox"
        />
        <label for="closable" class="ms-2"
          >closable : {{ controller.closable }}</label
        >
      </div>
      <div class="flex items-center">
        <input
          v-model="controller.pauseOnHover"
          id="pauseOnHover"
          type="checkbox"
          value=""
          class="checkbox"
        />
        <label for="pauseOnHover" class="ms-2"
          >pauseOnHover: {{ controller.pauseOnHover }}</label
        >
      </div>
      <div class="flex items-center">
        <input
          v-model="controller.closeOnDoubleClick"
          id="closeOnDoubleClick"
          type="checkbox"
          value=""
          class="checkbox"
        />
        <label for="closeOnDoubleClick" class="ms-2"
          >closeOnDoubleClick : {{ controller.closeOnDoubleClick }}</label
        >
      </div>
      <div>
        <label
          class="block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-white"
          >Select Toaster Type</label
        >
        <select
          v-model="toasterData.type"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled value="">Please select one</option>
          <option value="info">Info</option>
          <option value="success">Success</option>
          <option value="warn">Warning</option>
          <option value="error">Error</option>
        </select>
      </div>
      <div class="col-span-2">
        <h1 class="text-lg text-center w-full">Title</h1>
        <input
          v-model="toasterData.title"
          type="text"
          class="input-text"
          placeholder="Toaster title here"
          required
        />
      </div>
      <div class="col-span-2">
        <h1 class="text-lg text-center w-full">Text</h1>
        <textarea
          v-model="toasterData.text"
          class="input-text"
          placeholder="Toaster text here"
          required
        />
      </div>
      <div class="col-span-2 text-center">
        <button class="btn btn-primary mr-3" type="button" @click="toast">
          Fire Toast
        </button>
        <button
          class="btn btn-primary mr-3"
          type="button"
          @click="setGlobalConfig"
        >
          Update global config
        </button>
        <button class="btn btn-error" type="button" @click="reset">
          Reset config
        </button>
      </div>
    </div>
    <pre class="text-black dark:text-gray-200">
      {{ controller }},
      {{ toasterData }}
      {{ useToasterConfig().all }}
      </pre
    >
  </div>
</template>
