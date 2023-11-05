<template>
  <div class="pa-4 ma-4 border text-white">
    <h4>TheController</h4>
    <v-form>
      <v-row>
        <v-col cols="6">
          <v-slider
            v-model="formData.duration"
            :label="`Duration ${formData.duration}`"
            :min="1"
            color="primary"
            max="100"
            step="1"
          >
          </v-slider>
        </v-col>
        <v-col cols="6">
          <v-switch
            color="primary"
            v-model="formData.closable"
            label="closable"
            required
          ></v-switch>
        </v-col>
        <v-col cols="6">
          <v-switch
            v-model="formData.closeOnDoubleClick"
            color="primary"
            label="Close On Double Click"
            required
          ></v-switch>
        </v-col>
        <v-col cols="6">
          <v-switch
            v-model="formData.pauseOnHover"
            color="primary"
            :label="`Pause On Hover`"
            required
          ></v-switch>
        </v-col>
        <v-col cols="12" class="text-center">
          <!-- <v-btn color="success" @click="emitChange" class="mr-4">
            Apply Default
          </v-btn> -->
          <v-btn color="error" class="mr-4" @click="reset">
            Reset Setting
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { ToasterOption } from "../../src";
import { toasterOption } from "../../src/utils";
import { watch } from "vue";

const $props = withDefaults(defineProps<ToasterOption>(), {
  duration: 10,
});
const formData = reactive(Object.assign({}, { ...$props }));
const reset = () => {
  Object.assign(formData, toasterOption);
};
const emitChange = () => {
  emit("apply", Object.assign({}, formData));
};
watch(
  () => formData,
  (value) => {
    console.log("changed", value);
    emitChange();
  },
  {
    deep: true,
  }
);
const emit = defineEmits<{
  apply: [options: ToasterOption];
}>();
</script>
<style lang="scss" scoped></style>
