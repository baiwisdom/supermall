<template>
  <div class="content-wrapper clearfix">
    <nav-bar class="home-nav">
      <template v-slot:middle>
        购物街
      </template>
    </nav-bar>

    <to-top v-show="is_show_top" @click.native="scrollToTop" />
    <scroll @scroll="scrollP" 
    ref="scroll"
    @pullingUp="loadMore" >
      <rotation-imgs :list="banner.list"></rotation-imgs>
      <home-rec :rec_list="recommend.list"></home-rec>
      <feature-view></feature-view>

      <middle-bar :font_list="['流行', '新款', '精选']"
      ref="middle_bar" 
      @middle_bar_click="middleBarClick"
      />

      <goods v-if="is_accept"
       :list="show_goods"
       :scroll="$refs.scroll.scroll">
      </goods>
    </scroll>

    <middle-bar v-show="is_middle_bar_fixed" 
    :font_list="['流行', '新款', '精选']" 
    :class="{ 'middle-bar': is_middle_bar_fixed }"
    @middle_bar_click="middleBarClick" 
    ref="middle_bar2"
    />


  </div>
</template>

<script>
// 流行， 新款， 精选
import { getHomeMultidata, getHomeGoods } from 'network/home'

import NavBar from 'components/common/navbar/NavBar.vue'
import RotationImgs from '@/components/common/rotation/RotationImgs.vue'
import BetterScroll from 'components/common/better_scroll/BetterScroll.vue'
import MiddleBar from 'components/content/middle_bar.vue'
import Goods from '@/components/content/goods/Goods.vue'
import ToTop from '@/components/content/to_top/ToTop.vue'

import HomeRec from './child_comp/HomeRec.vue'
import FeatureView from './child_comp/feature_view.vue'
export default {
  name: 'Home',
  components: {
    'nav-bar': NavBar,
    'rotation-imgs': RotationImgs,
    'scroll': BetterScroll,
    'middle-bar': MiddleBar,
    'to-top': ToTop,
    'home-rec': HomeRec,
    'feature-view': FeatureView,
    'goods': Goods
  },
  data() {
    return {
      banner: [],
      recommend: [],
      dKeyword: [],
      keywords: [],
      goods_type: ['流行', '新款', '精选'],
      now_show: 0,
      e_goods_type: ['pop', 'new', 'sell'],
      is_show_top: false,
      is_middle_bar_fixed: false,
      middle_bar_oftop: 0,
      rememmber_position: 0,
      Goods_Map: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
    }
  },
  computed: {
    show_goods() {
      const type = this.e_goods_type[this.now_show]
      console.log(type);
      return this.Goods_Map[type].list
    },
    is_accept(){
      // console.log(this.show_goods.length);
      const is_accept = this.show_goods.length != 0

      // console.log(this.middle_bar_oftop);
      return is_accept
    }
  },
  
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    //项目搭建规范
    //create组件还未挂载模板，不要用document.querySelector
    //betterScroll
    //分页请求数据
    //对第三方框架进行单独封装
    //betterScroll上拉加载更多bug解决
    //middle_bar 虽然设置了fixed但是，也随着scroll移动
    //节流函数
    //Scroll内部无法使用固定定位，translate会再次移动他
    //vue 中父组件怎么将异步请求回来的数据传递给子组件
    //记住home浏览记录 
    //商品，参数，评论，推荐
    //mixins解决vue组件属性内容重复使用问题 
    //详情页各部件offsetTop获取
    //在异步数据传入子组件后，还要等子组件渲染后才能拿到值
    //因此要等一会，则可以用this.$nextTick
    //或者在update生命周期函数中，进行复制（会多次赋值，因为会渲染多次页面）
  },
  mounted(){
    this.middle_bar_oftop = this.$refs.middle_bar.$el.offsetTop
  },
  destroyed(){
    console.log('啊，我死了');
  },
  activated(){
    this.$refs.scroll.scroll.scrollTo(0, this.rememmber_position)
    this.$refs.scroll.scroll.refresh()
    console.log('进来了奥');
  },
  deactivated(){
    console.log('出去了');
    console.log(this.$refs);
    this.rememmber_position = this.$refs.scroll.scroll.y
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(
        (value) => {
          this.banner = value.data.banner
          this.recommend = value.data.recommend
          this.first_img = this.banner.list[0].image
          console.log(value);
        },
        (err) => {
          console.log(err);
        })
    },
    getHomeGoods(type) {
      const page = this.Goods_Map[type].page + 1

      getHomeGoods(type, page).then((value) => {
        console.log(value)
        this.Goods_Map[type].list.push(...value.data.list)
        this.Goods_Map[type].page += 1

      }).catch((err) => {
        console.log(err)
      })
    },
    middleBarClick(index) {
      this.now_show = index
      this.$refs.middle_bar.active_index = index
      this.$refs.middle_bar2.active_index = index
      if(this.is_middle_bar_fixed){
        const y = -this.$refs.middle_bar.$el.offsetTop
        this.$refs.scroll.scroll.scrollTo(0, y, 500)
      }
      // console.log(this.show_goods)
    },
    scrollP(position) {
      this.is_show_top = (-position.y) > 900
      // this.is_middle_bar_fixed = (this.middle_bar_oftop < (-position.y))
      this.is_middle_bar_fixed = (this.$refs.middle_bar.$el.offsetTop < (-position.y))
      // console.log(this.$refs.middle_bar.$el.offsetTop, (-position.y));
    },
    scrollToTop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    loadMore(){
      console.log('qwetrytyu');
      // this.getHomeGoods()
      let type = this.e_goods_type[this.now_show]
      this.getHomeGoods(type)
      this.$refs.scroll.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
  z-index: 9999;
}

.middle-bar {
  position: fixed;
  top: 8vh;
  background-color: white;
}

</style>
