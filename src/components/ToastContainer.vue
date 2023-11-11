<template>
  <Teleport to="body">
    <div class="main-container" :style="useToasterConfig().cssVariables">
      <div class="container">
        <TransitionGroup name="ts__animation" tag="div">
          <Toast v-for="toast in toasters" :key="toast.id" v-bind="toast">
            <template #default="slotData">
              <slot name="default" v-bind="slotData" />
            </template>
            <template #content="slotData">
              <slot name="content" v-bind="slotData" />
            </template>
            <template #icon="slotData">
              <slot name="icon" v-bind="slotData" />
            </template>
            <template #clearIcon="slotData">
              <slot name="clearIcon" v-bind="slotData" />
            </template>
          </Toast>
        </TransitionGroup>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import Toast from "./Toast.vue";
import { useToaster, useToasterConfig } from "../composable";
import { ToastContainerConfigPartial, ToastSlotType } from "../types";
import { onMounted } from "vue";
const toasters = useToaster().toasters;

defineSlots<ToastSlotType>();
const $props = defineProps<ToastContainerConfigPartial>();
onMounted(() => {
  if (Object.keys($props).length) {
    useToasterConfig().update($props);
  }
});
</script>
<style lang="scss" scoped>
@use "../scss/_variables" as _vars;
.main-container {
  background-color: transparent;
  position: fixed;
  z-index: 1;
  top: _vars.$top;
  left: _vars.$left;
  bottom: _vars.$bottom;
  right: _vars.$right;
  max-width: calc(_vars.$toaster-max-width + 4px);
  .container {
    position: relative;
    max-width: _vars.$toaster-max-width;
  }
  .ts__animation-move,
  .ts__animation-enter-active,
  .ts__animation-leave-active {
    transition-property: all;
    transition-timing-function: _vars.$animation-function;
    transition-duration: _vars.$animation-duration;
  }

  .ts__animation-enter-from,
  .ts__animation-leave-to {
    opacity: 0;
    transform: translateX(calc(_vars.$translateX * _vars.$direction));
  }

  .ts__animation-leave-active {
    position: absolute;
  }
}
</style>
