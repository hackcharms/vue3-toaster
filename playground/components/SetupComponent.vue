<script setup lang="ts">
import { Toaster, useToaster } from "module-x";
// import { Toaster } from "../src/components";
// import { useToaster } from "../src/composable";
// import { Toaster,useToaster } from "../../src/";
// import { VBtn } from "vuetify/components";
// import { ToasterType } from "../../src/types";
import "module-x/styles";
import { inject } from "vue";
// import "../src/scss/index.scss";

// const toasters = useToaster().toasters;
// const $toast = inject('$toast');
const $toast = useToaster();
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
  $toast.add({
    type: types[count % types.length],
    text: messages[count % messages.length] + `dud count==> ${count}`,
    title: `title no ${count}`,
  });
}
</script>
<template>
  <div>
    <h1>Composition Api</h1>

    <div>
      <div>
        <h1>toaster containers</h1>
        <!-- <toaster-container/> -->
        <!-- <Toaster> -->
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
          <!-- <template #default="props">
          <pre v-bind="props.on">
              {{ Object.keys(props.on) }}
              {{ Object.keys(props.props) }}
          </pre>
          <v-btn color="error" @click="props.props.destroyToaster">
            close
          </v-btn>
        </template> -->
        <!-- </Toaster> -->
      </div>
      <v-btn @click="addToaster" color="primary"> Add Toaster </v-btn>
    </div>
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
