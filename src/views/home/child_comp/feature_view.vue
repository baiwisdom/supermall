<template>
  <div :style="WapperStyle">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/recommend_bg.jpg" id="feature-img">
    </a>
  </div>
</template>

<script>
export default {
  name: 'featureView',
  computed: {
    WapperStyle(){
      const width = 100
      const height = 100/740 * 543
      return {
        'width' : width + 'vw',
        'height' : height + 'vw'
      }
    }
  }
}
</script>

<style scoped>
  img {
    width: 100vw;
    margin-left: 1vw;
  }
</style>