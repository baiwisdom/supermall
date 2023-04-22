<template>
  <div>
    <tab-bar class="tab-bar" @click.native="add">
        <span>加入购物车</span>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from "@/components/common/tab_bar/TabBar";
import TabBarItem from "@/components/common/tab_bar/TabBarItem";
import {StoreMutations} from 'common/store_mutations/StoreMutations.js'

export default {
  name: 'DetailTabBar',
  components: {
    "tab-bar": TabBar,
    "tab-bar-item": TabBarItem,
  },
  methods: {
    add(){
      this.$store.commit(StoreMutations.addIntoBuyCar, this.$route.params.iid)
    }
  }
};
</script>

<style scoped>
.tab-bar{
  background-color: yellow;
  position: absolute;
  z-index: 9999;
  line-height: 9vh;  
}
</style>