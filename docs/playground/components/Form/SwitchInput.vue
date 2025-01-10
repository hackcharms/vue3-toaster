<template>
  <div class="flex items-center">
    <label class="w-1/2 mx-2">{{ $props.label }} </label>
    <span
      v-if="Object.keys(dataMap ?? {}).length && !$props.hideIndicator"
      class="mx-2"
    >
      {{ $props.dataMap?.["false"] }}
    </span>
    <label :for="$props.label" class="relative h-6 w-10 cursor-pointer">
      <input
        v-model="localModal"
        type="checkbox"
        :id="$props.label"
        class="peer sr-only"
      />

      <span
        :class="{
          'bg-gray-300': !localModal,
          'bg-green-700 dark:bg-green-600': localModal,
        }"
        class="absolute inset-0 rounded-full transition"
      ></span>

      <span
        :class="{ 'start-0': !localModal, 'start-4': localModal }"
        class="absolute inset-y-0 m-1 h-4 w-4 rounded-full bg-white transition-all"
      ></span>
    </label>
    <span
      v-if="Object.keys(dataMap ?? {}).length && !$props.hideIndicator"
      class="mx-2"
    >
      {{ $props.dataMap?.["true"] }}
    </span>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
const $props = defineProps<{
  modelValue?: boolean | string | number;
  label: string;
  dataMap?: Record<string, string | number>;
  hideIndicator?: boolean;
}>();
const $emit = defineEmits<{
  "update:modelValue": [value?: boolean | string | number];
}>();
const localModal = computed({
  get() {
    for (const [key, value] of Object.entries($props.dataMap ?? {})) {
      if (value === $props.modelValue) {
        return key === "true";
      }
    }
    if (!Object.keys($props.dataMap ?? {}).length)
      return $props.modelValue as boolean;
    return false;
  },
  set(value: boolean) {
    let data: boolean | string | number | undefined = value;
    if (Object.keys($props.dataMap ?? {}).length) {
      data = $props.dataMap?.[value?.toString()];
    }
    $emit("update:modelValue", data);
  },
});
</script>
<style lang="scss" scoped></style>
