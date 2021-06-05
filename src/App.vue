<template>
  <MainPage />
</template>

<script lang="ts">
import MainPage from './views/Home.vue'

export default {
  name: 'App',
  components: {
    MainPage,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: $MainBackgroundColor;
  margin: 0;
}
</style>
