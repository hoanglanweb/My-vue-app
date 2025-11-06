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
}
</style>
