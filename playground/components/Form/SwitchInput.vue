<template>
  <div class="flex items-center">
    <label class="w-1/2 mx-2">{{ $props.label }} </label>
    <label :for="$props.label" class="relative h-6 w-10 cursor-pointer">
      <input
        v-model="localModal"
        type="checkbox"
        :id="$props.label"
        class="peer sr-only"
      />

      <span
        :class="{ 'bg-gray-300': !localModal, 'bg-green-700 dark:bg-green-600': localModal }"
        class="absolute inset-0 rounded-full transition"
      ></span>

      <span
        :class="{ 'start-0': !localModal, 'start-4': localModal }"
        class="absolute inset-y-0 m-1 h-4 w-4 rounded-full bg-white transition-all"
      ></span>
    </label>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
const $props = defineProps<{
  modelValue?: boolean;
  label: string;
}>();
const $emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();
const localModal = computed({
  get() {
    return $props.modelValue;
  },
  set(value) {
    $emit("update:modelValue", value);
  },
});
</script>
<style lang="scss" scoped></style>
