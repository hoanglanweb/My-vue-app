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
  font-family: "Roboto Condensed", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  list-style: none;
}
</style>
