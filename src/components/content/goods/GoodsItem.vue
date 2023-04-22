<template>
  <div @click="itemClick">
      <div :style="ImgHeight">
        <img :src="goods_item.show.img" alt="" class="goods-img">
      </div>
      <div class="goods-info">
        <p>{{ goods_item.title }}</p>
        <span>{{ goods_item.price }}</span>
        <span class="iconfont icon-shoucang iconf"></span>
        <span>{{ goods_item.cfav }}</span>
      </div>
  </div>
</template>

<script>

export default {
  name: 'GoodsItem',
  props: {
    goods_item: {
      type: Object,
      default: () => { }
    },
    scroll:{
      type: Object,
      default: ()=>{}
    }
  },
  data() {
    return {
      img_w_vw: 44
    }
  },
  computed: {
    ImgHeight() {
      const img_w_vw = this.img_w_vw
      // console.log(this.list[0]);

      //通过网络请求得到的数据，传送给子组件时，该数据不能以数组下标形式访问（异步的原因）
      const img_w = this.goods_item.show.w
      // this.goods_item.show.h不正确
      const img_h_vw = 480 * (img_w_vw / img_w)
      console.log(this.goods_item.show.w, this.goods_item.show.h)
      return {
        'width': img_w_vw + 'vw',
        'height': img_h_vw + 'vw'
      }
    }
  },
  mounted(){
    console.log('-=-=-=-=-=-=') 
    this.scroll.refresh()
  },
  methods: {
    itemClick(){
      this.$router.push({
        path: '/detail' + '/' +this.goods_item.iid,
        // query: {iid: this.goods_item.iid}
      })
    }
  }
}
</script>

<style scoped>
.goods-img , .goods-info{
  width: 44vw;
}

.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.iconf{
  font-size: 5vw;
  margin: 0 2vw;
}
</style>