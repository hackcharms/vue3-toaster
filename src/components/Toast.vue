<template>
  <div class="ts__toaster">
    <div :class="`ts__${$props.type}`">
      <div :class="['ts__toast ts__content-center']">
        <slot
          v-bind="{
            ...$props,
            destroyToaster,
            pauseCountdown: stopCountdown,
          }"
        >
          <div class="ts__content-center" v-bind="bindings">
            <div>
              <slot
                name="icon"
                v-bind="{ title: $props.title, type: $props.type }"
              >
                <component
                  v-if="iconComponent"
                  :is="iconComponent"
                  class="ts__icon ts__icon-color"
                />
              </slot>
            </div>
            <div class="ts__content">
              <slot
                name="content"
                v-bind="{
                  title: $props.title,
                  text: $props.text,
                  type: $props.type,
                }"
              >
                <p class="ts__type ts__type-text">
                  {{ $props.title || $props.type }}
                </p>
                <p class="ts__message">
                  {{ $props.text }}
                </p>
              </slot>
            </div>
            <div
              v-if="$props.options.closable"
              class="ts__close ts__content-center"
              @click.stop="destroyToaster"
            >
              <slot name="clearIcon">
                <IconClose class="ts__text-gray ts__close-icon" />
              </slot>
            </div>
          </div>
        </slot>
      </div>
      <span
        class="ts__bottom-progress-bar"
        :style="`width: ${
          (countDown / Number($props.options.duration)) * 100
        }%`"
      ></span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, onUnmounted } from "vue";
import { ToastProps, ToastVariant, MouseEvents, ToastSlotType } from "../types";
import { useToaster } from "../composable";
import IconSuccess from "./icons/Success.vue";
import IconError from "./icons/Error.vue";
import IconWarning from "./icons/Warning.vue";
import IconInfo from "./icons/Info.vue";
import IconClose from "./icons/Close.vue";
const iconComponent = computed(() => {
  const iconComponents: Record<ToastVariant, any> = {
    success: IconSuccess,
    info: IconInfo,
    warn: IconWarning,
    error: IconError,
  };
  return iconComponents[$props.type];
});
const bindings: MouseEvents = {
  onMouseover: handleMouseOver,
  onMouseleave: handleMouseLeave,
  onDblclick: handleDoubleClick,
};
function stopCountdown(value: boolean) {
  pauseCountdown.value = value;
}
function handleMouseOver() {
  if ($props.options.pauseOnHover) {
    stopCountdown(true);
  }
}
function handleMouseLeave() {
  if ($props.options.pauseOnHover) {
    stopCountdown(false);
  }
}
function handleDoubleClick() {
  if ($props.options.closeOnDoubleClick) {
    destroyToaster();
  }
}
const $props = defineProps<ToastProps>();
defineSlots<ToastSlotType>();
const countDown = ref($props.options.duration as number);
const interval = ref(0);
const pauseCountdown = ref(false);
function destroyToaster() {
  useToaster().remove($props.id);
}

function startTimer() {
  interval.value = window.setInterval(() => {
    if (countDown.value <= 0) {
      destroyToaster();
    }
    if (!pauseCountdown.value) {
      countDown.value--;
    }
  }, 1000);
}
onMounted(() => {
  startTimer();
});
onUnmounted(() => {
  if (!interval.value) return;
  window.clearInterval(interval.value);
});
</script>
<style lang="scss" scoped>
@use "../scss/_variables" as _vars;
.ts__ {
  &content-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  &toast {
    text-align: left;
    padding: 6px 4px 12px 4px;
    width: max-content;
    max-width: _vars.$toaster-max-width;
    box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);
    &:before {
      content: "";
      background-color: _vars.$targetColor;
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
    }
    .ts__icon-color {
      color: _vars.$targetColor;
    }
    .ts__type-text {
      color: _vars.$targetColor;
    }
  }
  &type {
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 8px;
  }

  &message {
    font-size: 14px;
    color: #878787;
    margin: 0;
  }

  &content {
    padding-left: 10px;
    padding-right: 10px;
  }

  &close-icon {
    width: calc(_vars.$icon-size - 20px);
    height: calc(_vars.$icon-size - 20px);
  }
  &close {
    color: rgb(201, 200, 200);
    align-self: center;
    justify-self: center;
    padding: 2px 4px;
    cursor: pointer;
  }
  &bottom-progress-bar {
    position: absolute;
    height: 4px;
    bottom: 0;
    background-color: _vars.$targetColor;
    display: block;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    transition: all 1s linear;
    opacity: 0.8;
  }
}
</style>
