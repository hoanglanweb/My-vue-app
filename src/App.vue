<template>
  <WebHeader />
  <WebSection />
  <WebFeatures />
</template>

<script>

import WebHeader from './components/WebHeader.vue';
import WebSection from './components/WebSection.vue';
import WebFeatures from './components/WebFeatures.vue';

export default {
  name: 'App',
  components: {
    WebHeader,
    WebSection,
    WebFeatures,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  box-sizing: border-box;
}

* {
  list-style: none;
}
</style>
