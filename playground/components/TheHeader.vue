<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="https://hackcharms.github.io/vue3-toaster/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="/assets/vue3-toaster/Vue3-toaster-logo-color.png"
          class="h-8"
          alt="vue3-toaster Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Vue3-toaster</span
        >
      </a>
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          @click="isCollapsed = !isCollapsed"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        :class="['w-full md:block md:w-auto', isCollapsed && 'hidden']"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li v-for="link in links">
            <a
              :href="link.link"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              :title="link.title"
              :target="link.target || '_blank'"
            >
              <img
                v-if="link.iconSrc"
                :src="link.iconSrc"
                class="h-8"
                alt="NPM logo"
              />
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { ref } from "vue";
interface LinkData {
  link: string;
  label?: string;
  title?: string;
  iconSrc?: string;
  target?: "_blank" | "_self";
}
const isCollapsed = ref(true);
const links: LinkData[] = [
  {
    link: "https://www.npmjs.com/package/vue3-toaster",
    label: "NPM",
    title: "open package in npm",
    target: "_blank",
  },
  {
    link: "https://github.com/hackcharms/vue3-toaster",
    label: "Github Repo",
    title: "open github repo",
    target: "_blank",
  },
];
</script>
<style lang="scss" scoped></style>
