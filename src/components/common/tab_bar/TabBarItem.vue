<template>
  <div class="tab-bar-item" @click="itemClick" :class="{'active': is_active}"> 
      <slot>font</slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  computed: {
    // 一个重要特征，它是响应式的，内部的值一旦更改，他会自动调用
    is_active(){
      // console.log(this.$route.path, '---nb', this.$route.path, this.link);
      return this.$route.path === this.link || (this.$route.path === '/' && this.link === '/home')
    }
  },
  methods: {
    itemClick(){
      console.log(this.$route.path);
      if(this.$route.path !== this.link)
        this.$router.push(this.link)
    }
  },
  props: {
    link: String
  }
}
</script>

<style scoped>
  .tab-bar-item{
    width: 13vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
  }
  .active{
    color: red;
  }
</style>