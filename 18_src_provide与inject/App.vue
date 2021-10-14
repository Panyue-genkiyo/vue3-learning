<template>
  <div class="app">
    <h2>app(祖) {{ name }}---{{ price }}</h2>
    <Child/>
  </div>
</template>

<script>
import Child from "./components/Child";
import {reactive, toRefs, provide} from "vue";
export default {
  name: 'App',
  components: {Child},
  setup(){
    let car = reactive({
      name: 'benz',
      price: 40
    });
    provide('car', car); //给自己的后代组件递数据 后代都可以
    return {
      ...toRefs(car)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app{
  background: grey;
  padding: 10px;
}
</style>
