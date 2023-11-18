<script setup lang="ts">
// import OptionComponent from "./components/OptionComponent.vue";
// import SetupComponent from "./components/SetupComponent.vue";
// import DefineCompo from './components/DefineCompo'
import TheController from "./components/TheController.vue";
</script>
<template>
  <div >
    <div class="flex justify-center item-center">
      <TheController class="w-100 lg:w-3/5" />
      <!-- <OptionComponent /> -->
      <!-- <DefineCompo /> -->
      <!-- <SetupComponent /> -->
      <ToastContainer/>
    </div>
  </div>
</template>
<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
