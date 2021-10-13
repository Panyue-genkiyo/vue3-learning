<template>
  <h4>{{ person }}</h4>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ salary }}K</h2>
  <button @click="name = name + '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">增长薪资</button>
</template>

<script>
import { ref, reactive, toRef, toRefs} from 'vue';
export default {
  name: 'Demo',
  setup(){
    let person = reactive({
      name: '张三',
      age: 18,
      job:{
        j1:{
          salary: 20
        }
      }
    });

    //ref类型的值在模板里使用是不需要.value来取的
    const name1 = person.name //注意输出字符串，并不是响应式的数据
    console.log('@@@@@', name1);
    const name2 = toRef(person,name); //RefImpl 这里的name2与person.name是完全一模一样的(你改这里的name2与你改person.name是一码事),且数据还是响应式的
    console.log('####', name2);

    const x = toRefs(person);
    console.log(x);


    //返回一个对象(toRef是引用 name就是person.name且为响应式)
    //toRef处理一个，而toRefs处理一群
    //大白话:toRef(s)就是方便我们把响应式数据(ref,reactive)展开丢出去，方便在模版中应用
    return {
      person,
      // name: toRef(person, "name"),
      // age: toRef(person, "age"),
      // salary: toRef(person.job.j1, "salary")
      ...toRefs(person),
      salary: toRef(person.job.j1, 'salary')  //toRef可以与toRefs连用,更加方便
    };


    //注意千万不能这样写
    //一旦这样写就与元数据分离了,改name不会引起person.name的变化(因为ref把name值包装成了一个refImpl对象)
    // return {
    //   person,
    //   name: ref(person.name),
    //   age: ref(person.age),
    //   salary: ref(person.job.j1.salary)
    // };
  }
}
</script>

<style>
</style>

