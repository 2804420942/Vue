/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-09-21 13:23:54
 * @version $Id$
  包含多个action通知触发直接更新状态
 */
import {ADD_TODO,DELETE_TODO,SELECT_ALL_TODOS,DELETE_COMPLETE_TODOS} from './mutations-types'
export default {
	[ADD_TODO](state,{todo}){
		state.todos.unshift(todo);
	},
	[DELETE_TODO](state,{index}){
		state.todos.splice(index,1);
	},
	[SELECT_ALL_TODOS](state,{check}){
		state.todos.forEach(todo => todo.complete = Check);
	},
	[DELETE_COMPLETE_TODOS](state){
		state.todos = state.todos.filter(todo => !todo.complete);
	},
}
