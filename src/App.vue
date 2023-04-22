<template>
  <div>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue';
export default {
  name: 'App',
  components: {
    'main-tab-bar': MainTabBar
  },
}

</script>

<style>
  @import 'assets/css/base.css';
</style>
