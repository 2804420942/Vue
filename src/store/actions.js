/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-09-21 13:24:13
 * @version $Id$
 包含多个接收组件通知触发mutation间接更新状态
 */
 import {ADD_TODO,DELETE_TODO,SELECT_ALL_TODOS,DELETE_COMPLETE_TODOS} from './mutations-types'
 export default {
 	addTodo({commit},todo){
 		commit(ADD_TODO,{todo})
 	},
 	deleteTodo({commit},index){
 		commit(DELETE_TODO,{index})
 	},
 	selectAllTodos({commit},check){
 		commit(SELECT_ALL_TODOS,{check})
 	},
 	deleteCompleteTodos({commit}){
 		commit(DELETE_COMPLETE_TODOS)
 	}
 }

