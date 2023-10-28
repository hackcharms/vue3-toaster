<template>
  <div class="ts__toaster">
    <!-- <ProgressBar :value="countDown" :max="TOTAL_DURATION" /> -->
    <div
      :class="['toast ts__content-center', `ts__${$props.type}`]"
      v-bind="bindings"
    >
      <div class="ts__content-center">
        <IconSuccess class="ts__icon ts__icon-color" />
      </div>
      <div class="ts__content">
        <p class="ts__type ts__type-text">
          {{ $props.title || $props.type }} #{{ $props.id }} {{ countDown }}
        </p>
        <p class="ts__message">
          {{ $props.text }}
        </p>
      </div>
      <div class="ts__close ts__content-center">
        <IconClose class="ts__text-gray ts__close-icon" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Toaster } from "../types";
import { useContainer } from "../composable";
// import ProgressBar from "./ProgressBar.vue";
import IconSuccess from "./icons/Success.vue";
import IconClose from "./icons/Close.vue";
const bindings = {
  onMouseover: handleMouseOver,
  onMouseleave: handleMouseLeave,
  onDblclick: handleDoubleClick,
};
function handleMouseOver(event: Event) {
  logEvent(event);
  pauseCountdown.value = true;
}
function handleMouseLeave(event: Event) {
  logEvent(event);
  pauseCountdown.value = false;
}
function logEvent(event: Event) {
  console.log("logEvent", event);
}
function handleDoubleClick(event: Event) {
  console.log("doubleClicked", event);
  destroyToaster();
}
const $props = withDefaults(defineProps<Toaster>(), {
  type: "info",
  title: "Info",
  text: "This is your information",
});
const TOTAL_DURATION = 10;
const countDown = ref(TOTAL_DURATION);
const interval = ref(0);
const pauseCountdown = ref(false);
function destroyToaster() {
  useContainer().remove($props.id);
  if (!interval.value) return;
  window.clearInterval(interval.value);
}

function startTimer() {
  console.log("startTimer");
  interval.value = window.setInterval(() => {
    console.log("interval running", $props);
    if (countDown.value <= 0) {
      //   destroyToaster();
      countDown.value = TOTAL_DURATION;
    }
    if (!pauseCountdown.value) {
      countDown.value--;
    }
  }, 1000);
}
onMounted(() => {
  startTimer();
});
</script>
<style lang="scss" scoped>
@use "../scss/_variables" as _vars;
.d-inline-block {
  display: inline-block;
}

.add-margin {
  margin-top: 20px;
}
.ts__content-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.toast {
  text-align: left;
  padding: 4px 8px;
  background-color: #fff;
  border-radius: 4px;
  max-width: 500px;
  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);
}

.toast:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.ts__type {
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 8px;
}

.ts__message {
  font-size: 14px;
  color: #878787;
  margin: 0;
}

.ts__content {
  padding-left: 10px;
  padding-right: 10px;
}

.ts__close-icon {
  width: calc(_vars.$icon-size - 20px);
  height: calc(_vars.$icon-size - 20px);
}
.ts__close {
  color: rgb(201, 200, 200);
  align-self: center;
  justify-self: center;
  padding: 2px 4px;
  cursor: pointer;
}
</style>
