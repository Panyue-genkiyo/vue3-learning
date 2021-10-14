<template>
  <div class="child">
    <h2>child(子)</h2>
    {{ sum }}
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "Child",
  async setup() {
    let sum = ref(0);

    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          sum
        });
      },5000)
    })

    return await p;
  }
}
</script>

<style scoped>
   .child{
     background: skyblue;
     padding: 10px;
   }
</style>
