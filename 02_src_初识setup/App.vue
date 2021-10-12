<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <h1>我是app组件</h1>
  <h1>我叫{{ name }}, {{ age }}岁</h1>
  <button @click="sayHello">hello!!</button>
  <h3>msg: {{ vue2 }}</h3>
  <p>数据冲突该怎么办？{{ a }}</p>
  <button @click="test1">测试一下在vue2中去读取vue3的配置</button>
  <button @click="test2">测试一下在vue3的setup中去读取vue2的配置</button>
</template>

<script>
// import { h } from 'vue';
export default {
  name: 'App',
  //此处只是测试setup，暂时先不考虑响应式的问题
  //测试使用vue2的内容
  data(){
    return {
      vue2: 'still can use vue2 in vue3 code',
      a:1
    }
  },
  methods:{
    //vue2配置方法的方式
    test1(){
      console.log(this.vue2);
      console.log(this.name);
      console.log(this.sayHello);
      this.sayHello();
    }
  },
  setup(){
    //表演的舞台
    //准备数据 data
    let name = 'py';
    let age = 21;
    let a = 300;

    //方法 methods
    function sayHello(){
      alert(`My name is ${name}, ${age} ${age === 1  ? 'year' : 'years'} old`);
    }


    //在vue3的配置里去读取vue2的属性
    function test2(){
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(this.vue2);
      console.log(this.test1);
    }


    //返回一个对象
    return {
      name,
      age,
      sayHello,
      test2,
      a
    }

    //返回一个渲染函数
    //这是直接将你在这里渲染的东西替换到template中
    // return () => h('h1', 'hello');
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
