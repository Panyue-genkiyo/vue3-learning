<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">sum+1</button>
  <hr/>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}K</h2>
  <button @click="name = name + '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪资</button>
</template>

<script>
import {ref,reactive, toRefs, readonly, shallowReadonly} from 'vue';
export default {
  name: 'Demo',
  setup(){

    let sum = ref(0);

    let person = reactive({
      name: '张三',
      age: 18,
      job:{
        j1:{
          salary: 20
        }
      }
    });

    // person = readonly(person); //此时person里面的属性值都不允许修改
    //person = shallowReadonly(person); //第一层不能改(name,age), 但j1和salary仍然可以改动

    // sum = readonly(sum); //同理
    // sum = shallowReadonly(sum)

    return {
      sum,
      ...toRefs(person),
    };

  }
}
</script>

<style>
</style>

