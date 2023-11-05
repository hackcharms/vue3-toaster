<script lang="ts">
// import { Toaster, useToaster } from "module-x";
import { Toaster, useToaster, useToasterConfig } from "module-x";
import { VBtn } from "vuetify/components";
import TheController from "./TheController.vue";
import { toasterOption } from "../../src/utils";
import "module-x/styles";
export default {
  // components: {
  //   Toaster,
  // },
  inject: ["$toast"],
  computed: {
    toasters() {
      return useToaster().toasters;
    },
  },
  data() {
    return {
      count: 0,
      configs: useToasterConfig().all,
      toastIds: [],
      // options: Object.assign({},toasterOption) ,
      options: toasterOption,
    };
  },
  methods: {
    addToaster() {
      console.log("adding Toaster");
      const types: ToasterType[] = ["errors", "infoa", "success", "warning"];
      const messages = [
        "Doloribus ",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum asperiores nam consequuntur soluta porro. Distinctio, dolores!",
        "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum asperiores nam consequuntur soluta porro. Distinctio, dolores!",
        "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum asperiores nam consequuntur soluta porro.",
        "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum consequuntur soluta ",
        "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum ",
        "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum ",
      ];
      this.count++;
      console.log(this.$toast);
      // const ToastId = this.$toast?.add({
      const ToastId = useToaster().add({
        type: types[this.count % types.length],
        text:
          messages[this.count % messages.length] + `dud count==> ${this.count}`,
        title: `title no ${this.count}`,
        options:this.options,
      });
      // const mapMethod = useToaster();
      // const ToastId = mapMethod?.[types[this.count % types.length]]?.(
      //   messages[this.count % messages.length] + `dud count==> ${this.count}`
      // );
      this.toastIds.push(ToastId);
    },
    popToaster() {
      const id = this.toastIds.pop();
      console.log("removing ", id);
      this.$toast.remove(id);
    },
    clearToaster() {
      useToaster().clear();
    },
    applyChanges(options) {
      console.log("options", options);
      this.options = options;
      // useToasterConfig().update(options);
      console.log({ ...this.options }, { ...options });
    },
  },
  mounted() {
    useToasterConfig().update({
      closable: false,
    });
    console.log(`Options APi coounted The initial count is ${this.count}.`);
  },
  components: { TheController },
};
</script>
<template>
  <div>
    <h1>Options Api</h1>
    {{ toasters }}
    <div>
      <div>
        <h1>toaster containers</h1>
        <TheController v-bind="options" @apply="applyChanges" />
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
          <!-- <template #default="props">
          <pre v-bind="props.on">
              {{ Object.keys(props.on) }}
              {{ Object.keys(props.props) }}
          </pre>
          <v-btn color="error" @click="props.props.destroyToaster">
            close
          </v-btn>
        </template> -->
        </Toaster>
      </div>
      <v-btn @click="addToaster" color="primary"> Add Toaster </v-btn>
      <v-btn @click="popToaster" color="error" class="mx-2">
        Remove Toaster
      </v-btn>
      <v-btn @click="clearToaster" color="error" class="mx-2">
        clear Toaster
      </v-btn>
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
