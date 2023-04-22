<template>
  <div class="recommend">
    <slot>默认内容</slot>
  </div>
</template>

<script>
export default {
  name: "Recommend",
};
</script>

<style scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 20vh;
  box-shadow: 0 1vw 1vw rgba(100, 100, 100, .1);
}
</style>