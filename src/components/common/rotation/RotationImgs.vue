<template>
  <div :style="{ width: '100vw', height: one_px * 390 + 'vw', overflow: 'hidden' }" class="wrapper">
    <div class="rotation" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <div v-for="item in list" :key="item.image" class="rotation-item">
        <img :src="item.image" class="rotation-img" :style="{ width: '100vw', height: one_px * 390 + 'vw' }">
      </div>
    </div>
    <div class="point-wrapper">
      <div class="point" v-for="(item, i) in list" :key="item.link" :class="{ active: i + 1 == index }"></div>
    </div>
  </div>
</template>

<!-- 1.使用transition, transform移动图片
    2. 使用定时器轮播图片
    3. 头尾添加实现循环
    4. touch实现
-->
<script>

import { one_px } from 'common/one_px'
console.log(one_px)
export default {
  name: 'RotationImg',

  data() {
    return {
      index: 1,
      img_width: 0,
      waitTime: 2000,
      runTime: 300,
      timer: undefined,
      imgs_num: 0,
      rotation_style: null,
      is_rotate: false,
      start_x: 0,
      current_x: 0,
      distance: 0,
      move_ratio: 0.3,
      one_px: one_px
    }
  },
  props: {
    list: {
      type: Array,
      default: () => [],  //重点
    }
  },
  mounted() {
    
    setTimeout(() => {
      this.addImg()
      // 2.开启定时器
      this.startTimer()
    }, this.waitTime)
    // this.addImg()    
    // this.move(-this.index * this.img_width)
  },

  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.index++
        this.move(-this.index * this.img_width)
      }, this.waitTime);
    },
    addImg() {
      let rotation = document.querySelector('.rotation')
      let img_arr = rotation.getElementsByClassName('rotation-item')
      this.imgs_num = img_arr.length

      if (this.imgs_num > 1) {
        let cloneFirst = img_arr[0].cloneNode(true)
        let cloneLast = img_arr[this.imgs_num - 1].cloneNode(true)
        rotation.insertBefore(cloneLast, img_arr[0])
        rotation.appendChild(cloneFirst)
        this.img_width = rotation.offsetWidth
        this.rotation_style = rotation.style
        this.rotation_style.transform = `translateX(${-this.img_width}px)`
        this.rotation_style.transition = 'transform ' + this.runTime + 'ms'
      }
    }, 
    move(to) {
      this.is_rotate = true
      this.rotation_style.transition = 'transform ' + this.runTime + 'ms'
      this.rotation_style.transform = `translateX(${to}px)` 

      this.resetImgPostion()
      this.is_rotate = false
    },

    resetImgPostion() {
      //与move动作并行发生，当move完成，他也将执行
      setTimeout(() => {
        //reset动作需要瞬间发生保证轮回
        this.rotation_style.transition = '0ms'
        if (this.index == this.imgs_num + 1) {
          this.index = 1
          this.rotation_style.transform = `translateX(${-this.index * this.img_width}px)`
        }
        else if (this.index == 0) { // 当touch向左时会到达被insertbefore的那张图片
          this.index = this.imgs_num
          this.rotation_style.transform = `translateX(${-this.index * this.img_width}px)`
        }

      }, this.runTime);
    },

    touchStart(e) {
      if (this.is_rotate) return

      clearInterval(this.timer)

      this.start_x = e.touches[0].pageX
    },

    touchMove(e) {
      this.current_x = e.touches[0].pageX
      this.distance = this.current_x - this.start_x

      let o = -this.index * this.img_width
      this.rotation_style.transform = `translateX(${o + this.distance}px)`
    },

    touchEnd(e) {
      let move_distance = Math.abs(this.distance)

      if (move_distance == 0)
        return
      else if (this.distance > 0 && move_distance > this.img_width * this.move_ratio)
        this.index--
      else if (this.distance < 0 && move_distance > this.img_width * this.move_ratio)
        this.index++

      // this.rotation_style.transform = `translateX(${-this.index * this.img_width}px)`
      this.move(-this.index * this.img_width)

      this.startTimer()
    }
  }
}
</script>

<style scoped>
.wrapper{
  position: relative;
}
.rotation {
  display: flex;
  width: 100vw;
}

.point {
  width: 3vw;
  height: 3vw;
  background-color: white;
  margin: 0 0.8vw;
  border-radius: 1.5vw;
}

.point-wrapper {
  display: flex;
  height: 3vw;
  position: absolute;
  left: 40vw;
  top: 26vh;
  z-index: 9999;
}

.active {
  background-color: red;
}
</style>