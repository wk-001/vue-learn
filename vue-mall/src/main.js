import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import toast from "components/common/toast";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false

//添加时间总线对象
Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast)

//懒加载插件
Vue.use(VueLazyload,{
  //图片未加载出来时显示的占位图
  loading:require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
