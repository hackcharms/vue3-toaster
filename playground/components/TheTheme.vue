<script setup lang="ts">
import { watch, reactive } from "vue";
import { useToasterConfig, defaultConfig } from "vue3-toaster";
import ColorInput from "./Form/ColorInput.vue";
import TextInput from "./Form/TextInput.vue";
const theme = {
  ...defaultConfig.theme,
  errorColor: RGBAToHexA(defaultConfig.theme.errorColor),
  infoColor: RGBAToHexA(defaultConfig.theme.infoColor),
  successColor: RGBAToHexA(defaultConfig.theme.successColor),
  warnColor: RGBAToHexA(defaultConfig.theme.warnColor),
  gray: RGBAToHexA(defaultConfig.theme.gray),
};
const themeData = reactive<typeof theme>(Object.assign({}, theme));
function RGBAToHexA(rgba, forceRemoveAlpha = true) {
  return (
    "#" +
    rgba
      .replace(/^rgba?\(|\s+|\)$/g, "") // Get's rgba / rgb string values
      .split(",") // splits them at ","
      .filter((string, index) => !forceRemoveAlpha || index !== 3)
      .map((string) => parseFloat(string)) // Converts them to numbers
      .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
      .map((number) => number.toString(16)) // Converts numbers to hex
      .map((string) => (string.length === 1 ? "0" + string : string)) // Adds 0 when length of one number is 1
      .join("")
  ); // Puts the array to together to a string
}

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
  <div class="grid grid-cols-2 gap-1 lg:gap-4 mb-4">
    <TextInput v-model="themeData.top" label="top" class="flex items-center" />
    <TextInput
      v-model="themeData.bottom"
      label="bottom"
      class="flex items-center"
    />
    <TextInput
      v-model="themeData.left"
      label="left"
      class="flex items-center"
    />
    <TextInput
      v-model="themeData.right"
      label="right"
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
      label="iconSize"
      class="flex items-center"
    />
    <TextInput
      v-model="themeData.toasterMaxWidth"
      label="toasterMaxWidth"
      class="flex items-center"
    />
    <TextInput
      v-model="themeData.translateX"
      label="translateX"
      class="flex items-center"
    />
    <div class="flex items-center">
      <h4 class="w-1/2">Animation Direction</h4>
      <div class="w-1/2">
        <input
          v-model="themeData.direction"
          id="dir-left"
          name="direction"
          type="radio"
          value="-1"
          class="w-4 h-4"
        />
        <label for="dir-left" class="ms-2 mr-4">Left</label>
        <input
          v-model="themeData.direction"
          name="direction"
          id="dir-right"
          type="radio"
          value="1"
          class="w-4 h-4"
        />
        <label for="dir-right" class="ms-2">Right </label>
      </div>
    </div>
    <div class="flex items-center">
      <label
        class="w-1/2 block mb-2 pl-2 text-sm font-medium text-gray-900 dark:text-white"
        >Animation Function</label
      >
      <select
        v-model="themeData.animationFunction"
        class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
