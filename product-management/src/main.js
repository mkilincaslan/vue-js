"use strict";
import Vue from 'vue';
import App from './App.vue';
import { router } from './routes';
import store from './store/store';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.filter('currency', (value) => {
  // Update the currency format with local currency settings
  return parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2}) + ' TL';
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
