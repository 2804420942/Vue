/**
 * 
 * @authors ${author} (${email})
 * @date    2019-09-19
 * @version $Id$
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './base.css'



new Vue({
	el: '#app',
	components: {App},
	template: '<App/>',
	store,
})