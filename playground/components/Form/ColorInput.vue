<template>
  <div>
    <label for="gray" class="ms-2 w-3/6">{{ $props.label }}</label>
    <input
      v-model="localModel"
      :style="`color: ${localModel}`"
      type="text"
      class="block py-2.5 px-0 w-2/6 text-center text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
    />
    <input v-model="localModel" id="gray" type="color" class="w-1/6 h-full cursor-crosshair" />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const $props = withDefaults(
  defineProps<{
    modelValue?: string | number | null;
    label: string;
  }>(),
  {
    label: "Field label",
  }
);
const localModel = computed({
  get() {
    return $props.modelValue;
  },
  set(value) {
    $emit("update:modelValue", value);
  },
});
const $emit = defineEmits<{
  "update:modelValue": [value: typeof $props.modelValue];
}>();
</script>
<style lang="scss" scoped></style>
