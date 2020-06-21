import Vue from 'vue'
import App from './App.vue'
//导入router对象 如果导入的是一个文件夹目录，会自动找文件夹目录中的index.js文件，所以可以省略index.js
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
