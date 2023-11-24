<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 sticky top-0">
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

          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="true"
            @click="toggleDarkTheme"
          >
            <span class="dark:hidden">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6"
              >
                <path
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  class=" fill-gray-900/20 stroke-gray-900"
                ></path>
                <path
                  d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                  class="stroke-gray-500"
                ></path>
              </svg>
            </span>

            <span class="hidden dark:inline">
              <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  class="fill-gray-400/20"
                ></path>
                <path
                  d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                  class="fill-gray-400"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                  class="fill-gray-400"
                ></path>
              </svg>
            </span>
          </button>
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
function toggleDarkTheme() {
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    return;
  }
  localStorage.setItem("theme", "dark");
  document.documentElement.classList.add("dark");
  console.log(localStorage.theme);
  return;
}

function setDefaultTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }
}
setDefaultTheme();
</script>
<style lang="scss" scoped></style>
