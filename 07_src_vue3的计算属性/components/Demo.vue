<template>
  <h1>一个人的信息</h1>
  姓:<input type="text" v-model="person.firstName"/>
  <br/>
  名:<input type="text" v-model="person.lastName"/>
  <p>姓名:{{ person.fullName }}</p>
  <br/>
  修改全名:<input type="text" v-model="person.fullName"/>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  name: 'Demo',
  //vue2的写法
  // computed:{
  //   fullName(){
  //     //vue2看得到vue3 注意
  //     return this.person.firstName + '-' + this.person.lastName;
  //   }
  // },
  setup(){
    let person = reactive({
      firstName: 'pan',
      lastName: 'yue',
      age: 21,
    });

    //计算属性(简写，没有考虑计算属性被修改的情况)
    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName;
    // })

    //计算属性(完整写法，既考虑了读也考虑了改)
    person.fullName = computed({
      get(){
        return person.firstName + '-' + person.lastName
      },
      set(name){
        let [ fn, ln ] = name.split('-');
        //响应式
        person.firstName = fn;
        person.lastName = ln;
      }
    })

    //返回一个对象
    return {
      person,
    }
  }
}
</script>

<style>
</style>
