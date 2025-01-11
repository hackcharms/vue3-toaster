<script setup lang="ts">
import { watch, reactive } from "vue";
import { useToasterConfig, defaultConfig } from "vue3-toaster";
import ColorInput from "./Form/ColorInput.vue";
import TextInput from "./Form/TextInput.vue";
import SwitchInput from "./Form/SwitchInput.vue";
const { theme: defaultTheme, ...defaultOptions } = defaultConfig;
const theme = {
  ...defaultTheme,
};
const themeData = reactive<typeof theme>(Object.assign({}, theme));

const reset = () => {
  console.log("resetting theme");
  Object.assign(themeData, theme);
  return "resetted";
};
const updateTheme = () => {
  console.log("updating theme");
  useToasterConfig().update({ ...defaultConfig, theme: themeData });
};
watch(themeData, updateTheme);
defineExpose({
  reset,
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-4 mb-4">
    <TextInput
      v-model="themeData.top"
      label="top(with unit)"
      class="flex items-center has-tooltip"
    >
      <span class="tooltip">
        bottom should be
        <code class="code">auto</code>
        to apply top value
      </span>
    </TextInput>
    <TextInput
      v-model="themeData.bottom"
      label="bottom (with unit)"
      class="flex items-center has-tooltip"
    >
      <span class="tooltip">
        top should be <code class="code">auto</code> to apply bottom value
      </span>
    </TextInput>
    <TextInput
      v-model="themeData.left"
      label="left (with unit)"
      class="flex items-center has-tooltip"
    >
      <span class="tooltip">
        right should be <code class="code">auto</code> to apply left value
      </span>
    </TextInput>
    <TextInput
      v-model="themeData.right"
      label="right (with unit)"
      class="flex items-center has-tooltip"
    >
      <span class="tooltip">
        left should be <code class="code">auto</code> to apply right value
      </span>
    </TextInput>
    <TextInput
      v-model="themeData.zIndex"
      type="number"
      label="z-index"
      class="flex items-center"
    />
    <TextInput
      v-model="themeData.animationDuration"
      type="number"
      label="animationDuration(ms)"
      class="flex items-center"
    />
    <TextInput
      v-model="themeData.iconSize"
      label="iconSize (with unit)"
      class="flex items-center"
    />
    <TextInput
      v-model="themeData.toasterMaxWidth"
      label="toasterMaxWidth (with unit)"
      class="flex items-center"
    />
    <TextInput
      v-model="themeData.translateX"
      label="translateX"
      class="flex items-center"
    />
    <SwitchInput
      v-model="themeData.direction"
      :label="`Animation Direction(${
        themeData.direction === 1 ? 'right to left' : 'left to right '
      })`"
      :data-map="{ true: 1, false: -1 }"
      hide-indicator
      class="flex items-center"
    >
    </SwitchInput>
    <div class="flex items-center">
      <label class="mx-2 w-1/2">Animation Function</label>
      <select
        v-model="themeData.animationFunction"
        class="w-1/2 bg-gray-200 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option disabled value="">Please select one</option>
        <option value="linear">linear</option>
        <option value="ease">ease</option>
        <option value="ease-in">ease-in</option>
        <option value="ease-out">ease-out</option>
        <option value="ease-in-out">ease-in-out</option>
        <option value="step-end">step-end</option>
        <option value="step-start">step-start</option>
        <option :value="`cubic-bezier()`">{{ `cubic-bezier()` }}</option>
      </select>
    </div>

    <color-input
      v-model="themeData.gray"
      label="new text color component"
      class="flex items-center"
    />
    <color-input
      v-model="themeData.toastBackgroundColor"
      label="Toaster Background"
      class="flex items-center"
    />
    <color-input
      v-model="themeData.successColor"
      label="Success Color"
      class="flex items-center"
    />
    <color-input
      v-model="themeData.infoColor"
      label="infoColor"
      class="flex items-center"
    />
    <color-input
      v-model="themeData.warnColor"
      label="warnColor"
      class="flex items-center"
    />
    <color-input
      v-model="themeData.errorColor"
      label="errorColor"
      class="flex items-center"
    />
  </div>
</template>
