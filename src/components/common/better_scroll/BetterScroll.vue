<template>
  <div id="wrapper">
    <div id="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import Bscroll from 'better-scroll'

export default {
  name: 'BetterScroll',
  data(){
    return {
      scroll: null
    }
  },
  mounted(){
    let wrapper = document.getElementById('wrapper')
    let content = document.getElementById('content')
    console.log(content.clientHeight, content.offsetHeight, content.scrollHeight)
    console.log(content);
    let childs = content.children
    console.log(childs);
    // for(item of childs){
    //   // console.log(item.clientHeight, item.offsetHeight, item.scrollHeight);
    // }
    for(let i = 0; i < childs.length; i++){
      let item = childs[i]
      console.log(item.clientHeight, item.offsetHeight, item.scrollHeight);
    }
    this.scroll = new Bscroll(wrapper, {
      click: true,
      probeType: 3,
      pullUpLoad: true
    })
    console.log(this.scroll.maxScrollY)

    this.scroll.on('scroll', (position)=>{
      this.$emit('scroll', position)
    })

    this.scroll.on('pullingUp', ()=>{
      this.$emit('pullingUp')
    })
  }
}
</script>

<style scoped>
  #wrapper{
    width: 100vw;
    height: calc(100% - 8vh);
    overflow: hidden;
    margin-top: 8vh;
  }
</style>