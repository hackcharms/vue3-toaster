<template>
  <Teleport to="#app">
    <div class="main-container">
      <div class="container">
        <Toast v-for="toast in toasters" v-bind="toast" :key="toast.id"></Toast>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import Toast from "./Toast.vue";
import { useContainer } from "../composable";
const toasters = useContainer().toasters;
</script>
<style lang="scss" scoped>
.main-container {
  position: fixed;
  z-index: 1;
  top: 0px;
  right: 0px;
  left: 0px;
//   width: 100dvw;
//   height: 100dvh;

  .container {
    background-color: rgba(132, 126, 126, 0.4);
    position: relative;
  }
}
</style>
