<template>
   <h2>我是test组件</h2>
   <h3>{{ point }}</h3>
</template>

<script>
import usePoint from "../hooks/usePoint";

export default {
  name: "Test",
  setup(){
    const point = usePoint(); //复用打点hook(封装数据以及其要用的生命周期钩子) 组合式api的好处
    return {
      point
    }
  }
}
</script>

<style scoped>

</style>
