import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/index.js'

Vue.component('icon', Icon);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
