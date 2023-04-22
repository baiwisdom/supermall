<template>
  <div>
    <div class="middle-wrapper">
      <div v-for=" (item, index) in font_list" :key="item" class="middle-item" :class="{ active: index === active_index }"
        @click="itemClick(index)">
        <span>{{ item }}</span>
      </div>
    </div>
    <!-- <span v-show="false">{{ getNowShow }}</span> -->
  </div>
</template>

<script>
export default {
  name: 'MiddleBar',
  data() {
    return {
      active_index: 0
    }
  },
  props: {
    font_list: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    itemClick(index) {
      this.active_index = index
      this.$emit('middle_bar_click', index)
    },
  },
}
</script>

<style scoped>
.middle-wrapper {
  display: flex;
  text-align: center;
  height: 6vh;
  line-height: 6vh;
  width: 100vw;
  background-color: white;
}

.middle-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.active span {
  padding-bottom: 1vw;
  border-bottom: 1vw solid var(--color-tint);
}
</style>