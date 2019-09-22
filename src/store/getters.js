/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-09-21 13:24:07
 * @version $Id$
 包含所有基于state的getter计算属性的状态对象
 */

 export default {
 	totalCount(state){
 		return state.todos.length;
 	},
 	completeCount(state){
 		return state.todos.reduce((preTal,todo)=>preTal+(todo.complete?1:0),0);
 	},
 	isAllComplete(state,getters){
 		return getters.completeCount===getters.totalCount && getters.completeCount>0
 	}
 }

