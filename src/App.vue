<template>
  <WebHeader />
  <router-view />
  <WebFooter />
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
  font-family: 'BrotherJhonBoldItalic', sans-serif;
  text-decoration: none !important;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  background-color: rgb(31,28,28);
}
</style>
