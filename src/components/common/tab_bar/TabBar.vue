<template>
  <div class="tab-bar">
    <slot>默认内容</slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
.tab-bar {
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  height: 10vh;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0vw -0.3vw 1vw rgba(100, 100, 100, .1);
}
</style>