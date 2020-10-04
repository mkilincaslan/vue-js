import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"

Vue.use(VueResource)

Vue.http.options.root = "https://vuejs-vue-resource-bb818.firebaseio.com/users.json";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
