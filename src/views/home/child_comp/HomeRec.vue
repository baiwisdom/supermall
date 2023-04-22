<template>
  <recommend>

    <rec-item v-for="item in rec_list" :key="item.link" :link = 'item.link'>
        <img :src="item.image" alt="">
        <span>{{ item.title }}</span>
    </rec-item>
  </recommend>
</template>

<script>

import Recommend from 'components/content/recommend/Recommend.vue'
import RecItem from 'components/content/recommend/RecItem.vue'

export default {
  name: 'HomeRecommend',
  props: {
    rec_list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    'recommend': Recommend,
    'rec-item': RecItem
  }
}
</script>

<style scoped>
img{
  width: 12vh;
}
</style>