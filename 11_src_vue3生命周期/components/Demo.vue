<template>
   <h1>当前求和为:{{ sum }}</h1>
   <button @click="sum++">点我加一</button>

   <hr/>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
export default {
  name: 'Demo',
  setup(){
    let sum = ref(0);

    //通过组合式api的形式去使用生命周期钩子
    ///setup()相当于beforeCreate()和created()
    onBeforeMount(() => {  console.log('----beforeMount----'); });
    onMounted(() => {  console.log('-----mounted-----'); });
    onBeforeUpdate(() => {  console.log('-----beforeUpdate-----') });
    onUpdated(() => { console.log('-----updated-----'); });
    onBeforeUnmount(() => { console.log('-----beforeUnmount----'); });
    onUnmounted(() => { console.log('-----unmounted----'); })

    console.log('-----setup----')

    //返回一个对象
    return {
      sum,
    }
  },
  //使用配置项的形式使用生命周期钩子
  // beforeCreate() {
  //   console.log('----beforeCreate!!----');
  // },
  // created() {
  //   console.log('----created!!----');
  // },
  // beforeMount() {
  //   console.log('----beforeMount----');
  // },
  // mounted() {
  //   console.log('-----mounted-----');
  // },
  // beforeUpdate() {
  //   console.log('-----beforeUpdate-----')
  // },
  // updated() {
  //   console.log('-----updated-----');
  // },
  // beforeUnmount() {
  //   console.log('-----beforeUnmount----');
  // },
  // unmounted() {
  //   console.log('-----unmounted----');
  // }
}
</script>

<style>
</style>
