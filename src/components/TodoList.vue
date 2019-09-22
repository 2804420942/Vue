<template>
	<ul class="todo-main">
		<TodoItem v-for="(todo,index) in todos" :key='index' :todo='todo' :index='index'/>
	</ul>
</template>
<script type="text/javascript">
	import TodoItem from './TodoItem.vue'
	import {mapState} from 'vuex'
	import StorageUtil from '../util/StorageUtil'
	export default{
		/*props: {
			todos: Array,
			deleteTodo: Function
		}
		,*/
		computed: {
			...mapState(['todos'])
		},
		watch: {
		    todos: {
		      deep: true, // 深度监视
		      handler: StorageUtil.saveTodos,
		    }
	    },
		components: {
			TodoItem
		}
	}
</script>
<style type="text/css">
	/*main*/
	.todo-main {
	  margin-left: 0px;
	  border: 1px solid #ddd;
	  border-radius: 2px;
	  padding: 0px;
	}

	.todo-empty {
	  height: 40px;
	  line-height: 40px;
	  border: 1px solid #ddd;
	  border-radius: 2px;
	  padding-left: 5px;
	  margin-top: 10px;
	}
	
</style>