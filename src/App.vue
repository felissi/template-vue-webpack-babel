<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
const configurator = require("core-js/configurator");

configurator({
  useNative: ["Promise"], // polyfills will be used only if natives are completely unavailable
  usePolyfill: ["Array.from", "String.prototype.padEnd"], // polyfills will be used anyway
  useFeatureDetection: ["Map", "Set"], // default behavior
});

export default {
  components: {
    HelloWorld,
  },
  mounted() {
    const t = new Map([[1, 2]]);

    // const s = new Set([1, 2, 3]);

    const p = new Promise(() => {});

    console.log(`🚀 // DEBUG 🍔  ~ file: App.vue:23 ~ `, t, p);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
