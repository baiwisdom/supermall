<template>
  <div :class="{message : is_show}">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
    return {
      message: '默认消息',
      is_show: false
    }
  },
  methods: {
    show(message){
      this.message = message
      this.is_show = true
    }
  }
}
</script>

<style scoped>
  .message{
    background-color: red;
    width: 10vw;
    height: 10vh;
    color: white;
    /* transform: translate(-50%, -50%); */
    position: fixed;
    left: 50vw;
    height: 50vh;
  }
</style>