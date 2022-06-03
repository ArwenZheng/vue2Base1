import  Vue from 'vue'//默认引入的是runtime-only版本的，不带解析器  02
// import Vue from 'vue/dist/vue.esm.js'//是我们自己找到的带解析器的版本  01
import App from '@/App.vue'

Vue.config.productionTip = false
// eslint-disable no-unused-vars
//局部禁用当前这个类型的错误，（只禁用当前文件的这个类型）


//01
// new Vue({
//   el: '#app',
//   component: {
//     App
//   },
//   template:'<App/>'
// })
//02
new Vue({
  render: h => h(App),
  //这个函数和上面我们自己写的 功能差不多   1，定义并注册了App  2,使用了App组件
  //3,比上面的写法多干了一件事，就是寻找解析器的loader
}).$mount('#app')

//为什么我们要使用的是02
//因为02的打包出来的项目体积小
