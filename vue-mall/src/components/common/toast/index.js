import Toast from "./Toast";

const obj = {}

obj.install =  function (Vue) {

    //创建组件构造器
    const tostConstruct = Vue.extend(Toast)

    //根据组件构造器创建组件对象
    const toast = new tostConstruct()

    //将组件对象手动挂载到自己创建的div上
    toast.$mount(document.createElement('div'))

    //toast.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}

export default obj