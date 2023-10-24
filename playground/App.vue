<script setup lang="ts">
// import { Toaster, useContainer } from 'module-x';
import { onMounted } from 'vue';
import { Toaster } from '../src/components';
import { useContainer } from '../src/composable';
import { VBtn } from 'vuetify/components';
// import 'module-x/styles'

const toasters = useContainer().toasters;
let count = 0;
function addToaster() {
  console.log('adding Toaster')
  count++;
  useContainer().add({
    type: "info",
    text: `this is info dud count==> ${count}`,
    title: `title no ${count}`,
  });
}
</script>
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>
    <div>
      <h1>toaster containers</h1>
      <Toaster></Toaster>
    </div>
    <v-btn @click="addToaster" color="primary"> Add Toaster </v-btn>
  </div>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
