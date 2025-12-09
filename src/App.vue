<template>
  <div>
    <WebHeader />
    <router-view />
    <WebFooter />
  </div>
</template>

<script>

import WebHeader from './components/WebHeader.vue';
import WebFooter from './components/WebFooter.vue';

export default {
  name: 'App',
  components: {
    WebHeader,
    WebFooter,

  }
}
</script>

<style>
* {
  /* text-align: center; */
  /* font-family: 'BrotherJhonBoldItalic', sans-serif; */
  text-decoration: none !important;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background-color: #1a1a1a;
  /* 1a1a1a */
}
</style>
