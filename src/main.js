import Vue from 'vue';
import BaseInput from './views/BaseInput';
import BaseButton from './views/BaseButton';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.component('BaseInput', BaseInput);
Vue.component('BaseButton', BaseButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
