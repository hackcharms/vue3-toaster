<template>
  <div class="hello">
    <div
      v-if="$props.variant == 'linear'"
      class="progress-main-linear progress-bar-size"
    >
      <div
        class="progress-linear-content transition-smooth"
        :style="`width:${statusPercentage}%`"
      ></div>
    </div>
    <div
      v-else
      class="progress-circular-content transition-smooth progress-bar-size"
    >
      <div class="inner-circle">{{ statusPercentage }}%</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const $props = withDefaults(
  defineProps<{
    value?: number;
    max?: number;
    width?: string;
    height?: string;
    color?: string;
    foreground?: string;
    background?: string;
    variant?: "linear" | "circular";
  }>(),
  {
    value: 50,
    max: 100,
    width: "100px",
    height: "100px",
    variant: "circular",
    foreground: "gray",
    background: "white",
    color: "black",
  }
);
const statusPercentage = computed(() => {
  return ($props.value / $props.max) * 100;
});
const progressDeg = computed(() => {
  return 3.6 * statusPercentage.value + "deg";
});
</script>
<style lang="scss" scoped>
.progress-main-linear {
  background-color: rgba(121, 119, 119, 0.5);
  padding: 2px 4px;
  border-radius: 50px;
  .transition-smooth {
    transition: width 500ms ease;
  }
  .progress-linear-content {
    background-color: red;
    min-height: 20px;
    border-radius: 50px;
  }
}
.progress-circular-content {
  background-color: v-bind('$props.foreground');
  display: flex;
  justify-content: center;
  align-items: center;
  background: conic-gradient(
    red 0deg v-bind("progressDeg"),
    green v-bind("progressDeg") 360deg
  );
  border-radius: 50%;
  // transform: rotate(45deg);
}
.inner-circle {
  background-color: v-bind('$props.background');
  color: v-bind('$props.color');
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(v-bind("$props.width") - 30px);
  height: calc(v-bind("$props.height") - 30px);
  border-radius: 50%;
}
.progress-bar-size {
  width: v-bind("$props.width");
  height: v-bind("$props.height");
}
.animate-background{
}
</style>
