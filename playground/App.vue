<script setup lang="ts">
import { Toaster, useContainer } from 'module-x';
// import { Toaster } from "../src/components";
// import { useContainer } from "../src/composable";
import { VBtn } from "vuetify/components";
import { ToasterType } from "../src/types";
import 'module-x/styles'
// import "../src/scss/index.scss";

const toasters = useContainer().toasters;
let count = 0;
function addToaster() {
  console.log("adding Toaster");
  const types: ToasterType[] = ["error", "info", "success", "warning"];
  const messages = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum asperiores nam consequuntur soluta porro. Distinctio, dolores!",
    "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum asperiores nam consequuntur soluta porro. Distinctio, dolores!",
    "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum asperiores nam consequuntur soluta porro.",
    "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum consequuntur soluta ",
    "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum ",
    "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum ",
  ];
  count++;
  useContainer().add({
    type: types[count % types.length],
    text: messages[count % messages.length] + `dud count==> ${count}`,
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
      <Toaster>
         <!-- <template #clearIcon="props">
          <span>
            click here to clear => {{ props }}
          </span>
        </template>
         <template #icon="props">
          <span>
            {{props}}
          </span>
        </template>
         <template #content="props">
          <span>
            {{props}}
          </span>
        </template> -->
        <template #default="props">
          <pre v-bind="props.on">
              {{ Object.keys(props.on) }}
              {{ Object.keys(props.props) }}
          </pre>
          <v-btn color="error" @click="props.props.destroyToaster">
            close
          </v-btn>
        </template>
      </Toaster>
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
