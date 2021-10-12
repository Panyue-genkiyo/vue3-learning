<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <h1>我是app组件</h1>
  <h1>我叫{{ name }}, {{ age }}岁</h1>
  <h3>职位:{{ job.type }}</h3>
  <h3>薪水:{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',
  setup(){
    //表演的舞台(setup)
    //准备数据 data
    //ref实现响应式(基本类型)也是采用Object.definedProperty()来实现的 getter和setter
    let name = ref('py'); //ref引用对象
    let age = ref(21);
    //ref实现响应式(对象类型)也是采用Proxy来实现
    let job = ref({
      type: 'frontend developer',
      salary: '30'
    });

    function changeInfo(){
      name.value = '李四';
      age.value = 42;
      job.value.type = 'UI developer';
      console.log(name, age); //不是响应式的
    }

    //返回一个对象
    return {
      name,
      age,
      job,
      changeInfo
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
</style>
