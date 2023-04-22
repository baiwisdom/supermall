<template>
  <div>
    <!-- 若把goods类赋给外面的div，那么就会出现无法滚动的情况 -->
    <div class="goods">
      <goods-item v-for="(item, i) in list"
      :key="i"
      :goods_item="item"
      :scroll="scroll">
    </goods-item>
    </div>
  </div> 
</template>

<script>

import GoodsItem from './GoodsItem.vue'

export default {
  name: 'Goods',
  props: {
    list: {
      type: Array,
      default : ()=>[]
    },
    scroll: {
      type: Object, 
      default : ()=>{}
    },
    type: {
      type: Number,
      default: undefined
    }
  },
  components: {
    'goods-item': GoodsItem
  },
  mounted(){
    //保证第一次刷新
    // this.scroll.refresh()
    // console.log(this.scroll.maxScrollY);
  }

}
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: space-evenly;
  }
</style>