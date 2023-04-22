<template>
  <div>
    详情页
    {{ $route.params.iid }}
    <detail-tab-bar @click="showMessage"></detail-tab-bar>
  </div>
</template>

<script>

import DetailTabBar from './child_comps/DetailTabBar.vue'

export default {
  name: 'Detail',
  components: {
    'detail-tab-bar': DetailTabBar
  },
  methods: {
    showMessage(){
      
    }
  }
}
</script>

