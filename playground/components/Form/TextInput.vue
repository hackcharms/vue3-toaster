<template>
  <div>
    <label :for="$props.label" class="ms-2 w-1/2">{{ $props.label }}</label>
    <input
      v-model="localModel"
      :type="$props.type"
      :id="$props.label"
      class="block py-2.5 px-0 w-1/2 text-center text-lg text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
    />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const $props = withDefaults(
  defineProps<{
    modelValue?: string | number | null;
    label: string;
    type?: string;
  }>(),
  {
    type: "text",
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
