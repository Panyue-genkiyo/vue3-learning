<template>
  <div class="app">
    <h2>app</h2>
    <Child/>
  </div>
</template>

<script>
import Child from "./components/Child";
import {reactive, toRefs, provide} from "vue";
export default {
  name: 'App',
  components: {Child},
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
