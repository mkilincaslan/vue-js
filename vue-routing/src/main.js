import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', // history: without # - default: hash
  // # means that we use vue-routing
  // # vue-routing kullandığımızı belirtmek için varsayılan olarak geliyor
  scrollBehavior(to, from, savedPosition) {
    console.log(from);
    console.log(savedPosition);
    console.log(to)
    // savedPosition: when we got to the endpoint with fragment and if user clicks back button, which position it will take
    // savedPosition: kullanıcı hash bayrağı ile bir url giderse geri butonuna tıkladığında alınacak pozisyon
    if (to.hash) {
      return {
        selector : to.hash
      }
    }
    // return {
    //   x: 0,
    //   y: 800,
    // }
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
