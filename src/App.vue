<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<todo-header :addTodo = "addTodo"/>
			<TodoList :todos='todos' :deleteTodo='deleteTodo'/>
			<TodoFooter :todos="todos" :deleteCompleteTodos='deleteCompleteTodos' :selectAllTodos="selectAllTodos"/>
		</div>
	</div>
</template>
<!-- 发布消息  订阅消息 -->
<script type="text/javascript">
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'
	import PubSub from 'pubsub-js'
	import StorageUtil from './util/StorageUtil.js'
	export default{
		data(){
			return{
				todos: StorageUtil.getTodos()
				/*[
					{
						title: '吃饭',complete: false
					},
					{
						title: '睡觉',complete: false
					},
					{
						title: '打豆豆',complete: false
					},
				]*/
			}
		},
		watch: {
			todos:{
				deep: true,
				handler: function(value){
					StorageUtil.saveTodos(value);
				}
			}
		},
		methods: {
			addTodo(todo){
				this.todos.unshift(todo);
			},
			deleteTodo(index){
				this.todos.splice(index,1);
			},
			//删除所有选中的
			deleteCompleteTodos(){
				this.todos = this.todos.filter(todo => !todo.complete);
			},
			//全选/全不选
			selectAllTodos(isCheck){
				this.todos.forEach(todo => todo.complete = isCheck);
			}
		},
		components: {
			TodoHeader,
			TodoList,
			TodoFooter
		},
		mounted(){
			//订阅消息
			PubSub.subscribe('deleteTodo', (msg,index) =>{this.deleteTodo(index)})
		}
	}
</script>
<style type="text/css">
	/*app*/
	.todo-container {
	  width: 600px;
	  margin: 0 auto;
	}
	.todo-container .todo-wrap {
	  padding: 10px;
	  border: 1px solid #ddd;
	  border-radius: 5px;
	}

</style>