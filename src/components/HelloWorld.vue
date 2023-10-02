<template>
  <section class="module__section">
    <div class="module__container">
      <div class="module__rectangle">
        <slot v-bind="$props">
          <div class="module__notification-box">
            <div style="display: flex">
              <slot name="iconElement">
                <svg
                  class="icon-size"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </slot>
              <div class="module__notification-text">
                <slot :title="$props.title" name="title">
                  <h3>Info</h3>
                </slot>
                <slot :text="$props.text" name="text">
                  <p>This is a test notification.</p>
                </slot>
              </div>
            </div>
            <button class="btn">x</button>
          </div>
        </slot>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const $props = defineProps({
  title: {
    type: String,
    required:true,
    validate: (value:string) => ["info",'success','error'].includes(value?.toLowerCase()),
  },
  text: {
    type: String,
    required:true
  },
});
const defaultSlot = defineSlots<{
  default(props: typeof $props): any;
  iconElement(): any;
  title(props: { title: string | HTMLElement }): any;
  text(props: { text: string | HTMLElement }): any;
}>();
</script>
<style lang="scss" scoped>
$icon-size: 40px;
// $toast-background:#380848;
$alpha: 1;
$toast-background: rgba(183, 90, 214, $alpha);
* {
  margin: 0;
  padding: 0;
}
.module__container {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.module__rectangle {
  &:hover {
    filter: drop-shadow(0 0 2em $toast-background);
  }
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: $toast-background;
  transform: scale(0);
  border-radius: 50%;
  color: white;
  opacity: 0;
  overflow: hidden;
  animation: scale-in 0.3s ease-out forwards,
    expand 0.35s 0.25s ease-out forwards;
  .module__notification-box {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    animation: fade-in 0.65s ease-in forwards;
    .icon-size {
      width: $icon-size;
      height: $icon-size;
    }
    .module__notification-text {
      text-align: start;
      padding: 0px 12px;
    }
  }
}

@keyframes scale-in {
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes expand {
  50% {
    width: 350px;
    border-radius: 6px;
  }
  100% {
    width: 300px;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -1px rgba(0, 0, 0, 0.12);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
}
.btn {
  padding: 4px 8px;
  background-color: $toast-background;
  &:hover {
    opacity: 0.9;
  }
}
</style>
