import Vue from 'vue';
import App from '@/App';
import router from '@/router';
//import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

//import Buefy from 'buefy'
//import 'buefy/dist/buefy.css'

//Vue.use(Buefy)

//Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
