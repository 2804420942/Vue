/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-09-21 13:22:43
 * @version $Id$
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'


Vue.use(Vuex)


export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
