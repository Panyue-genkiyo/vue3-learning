//引入不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
//注意在这里无法像vue2那样去书写了，(这里并不兼容)
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象---app类似于vue2中vm,但app比vm更轻
const app = createApp(App);
// console.log(app);
//挂载
app.mount('#app');

// setTimeout(() => {
//     app.unmount("#app");
// },2000)

// //vue2写法
// const vm = new Vue({
//     render: h=> h(App)
// });
// vm.$mount('#app')
