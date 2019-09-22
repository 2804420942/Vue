/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-09-20 16:09:01
 * @version $Id$
 实验localStorage存储的工具模块
 */
const TODO_KEY = 'todo_key';
export default{
	saveTodos(todos){
		window.localStorage.setItem(TODO_KEY,JSON.stringify(todos));
	},
	getTodos(){
		return JSON.parse(window.localStorage.getItem(TODO_KEY)||'[]')
	}
}
