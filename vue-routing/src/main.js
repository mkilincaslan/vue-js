import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' // history: without # - default: hash
  // # means that we use vue-routing
  // # vue-routing kullandığımızı belirtmek için varsayılan olarak geliyor
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
