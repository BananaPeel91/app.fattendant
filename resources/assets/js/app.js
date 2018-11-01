
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'Vue';
import App from './App.vue';
import {routes} from './Routes';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

require('./bootstrap');

const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
  		return { x: 0, y: 0 }
	}
});
		

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
