<template>
  <div>
    <router-view v-slot="{Component, route}">
      <component v-if="!route.meta.keep_alive" :is="Component" :key="route.path" />
      <keep-alive v-if="Component">
        <component v-if="route.meta.keep_alive" :is="Component" :key="route.path" />
      </keep-alive>
    </router-view>
    <tab-bar>
      <tab-bar-item link="/home">
        <span class="iconfont icon-shouye"></span>
        <span>首页</span>
      </tab-bar-item>
      <tab-bar-item link="/classify">
        <span v class="iconfont icon-fenlei"></span>
        <span>分类</span>
      </tab-bar-item>
      <tab-bar-item link="/buycar">
        <span v class="iconfont icon-gouwuchekong"></span>
        <span>购物车</span>
      </tab-bar-item>
      <tab-bar-item link="/mine">
        <span v class="iconfont icon-wode"></span>
        <span>我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tab_bar/TabBar";
import TabBarItem from "@/components/common/tab_bar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    "tab-bar": TabBar,
    "tab-bar-item": TabBarItem,
  },
};
</script>

<style>
  @import '@/assets/iconfont/iconfont.css'
</style>