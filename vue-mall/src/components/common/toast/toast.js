import Toast from "./Toast";

export default {

}.install =  function (Vue) {

    //Toast.$el的元素追加到使用者的body上
    //document.body.appendChild(Toast.$el)

    Vue.prototype.$toast = Toast
}