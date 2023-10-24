<template>
  <div
    class="toaster"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    @dblclick="handleDoubleClick"
  >
    <div class="content">
      <h4>{{ $props.id }}</h4>
      <h1>{{ $props.title }}</h1>
      <p>{{ $props.text }}</p>
      <p>{{ countDown }} / {{ TOTAL_DURATION }}</p>
      <ProgressBar
      :value="countDown"
      :max="TOTAL_DURATION"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Toaster } from "../types";
import { useContainer } from "../composable";
import ProgressBar from './ProgressBar.vue'
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
.toaster {
  &:hover {
    border-width: 20px;
  }
  //   height: 150px;
  //   position: absolute;
  right: 0px;
  z-index: 1000;
  .content {
    border: 2px solid red;
    background-color: yellow;
    color: green;
  }
}
</style>
