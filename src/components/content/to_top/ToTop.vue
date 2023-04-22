<template>
  <div>
    <div class="up">
      <span class="iconfont icon-xiangshang4"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToTop',
}
</script>

<style scoped>
  .up{
    width: 13vw;
    height: 13vw;
    border-radius: 6.5vw;
    background-color: var(--color-high-text);
    color: white;
    position: fixed;
    top: 80vh;
    left: 80vw;
    z-index: 99999;
    text-align: center;
    line-height: 13vw;
    font-size: 6vw;
  }
</style>