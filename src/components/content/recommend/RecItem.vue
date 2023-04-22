<template>
  <div>
    <a :href="link" class="rec-item"> 
      <slot>img</slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'RecItem',
  props: {
    link:{
      type: String,
      default: '#'
    }
  }
}
</script>

<style scoped>
  .rec-item{
    width: 25vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
  }
  
</style>