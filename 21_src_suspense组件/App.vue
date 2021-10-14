<template>
  <div class="app">
    <h2>app</h2>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <!--退路-->
        <h3>loading...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child"; 静态引入组件
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import('./components/Child')); //动态引入组件(异步)
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
