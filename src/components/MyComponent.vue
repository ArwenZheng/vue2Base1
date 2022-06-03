<template>
  <div>
    <h2>I can find a good job</h2>
    <button @click="count++">工资:{{count}}+K</button>
  </div>
</template>
<script>
export default {
  name:'',
  data(){
   return {
      count:12
   }
  }
}
</script>
<style scoped>
  h2{
    color: crimson;
  }
</style>