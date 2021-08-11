import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import MyClass from "./components/demo"

console.log(MyClass);
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
