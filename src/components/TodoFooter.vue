<template>
	<div class="todo-footer">
		<label>
			<input type="checkbox" v-model="isAllComplete"/>
		</label>
		<span>
			<span>已完成{{completeCount}}</span> / 全部{{totalCount}}
		</span>
		<button class="btn btn-danger" v-show="completeCount" @click="$store.dispatch('deleteCompleteTodos')">清除已完成任务</button>
	</div>
</template>
<script type="text/javascript">
	import {mapGetters,mapActions} from 'vuex'
	export default{
		/*props: {
			todos:Array,
			deleteCompleteTodos: Function,
			selectAllTodos: Function
		},*/
		methods: {

		},
		computed: {
			...mapGetters(['totalCount','completeCount']),
			/*completeSize(){
				return this.todos.reduce((preTal,todo)=>preTal+(todo.complete?1:0),0);
			},*/
			isAllComplete: {
				get(){
					return this.$store.getters.isAllComplete
				},
				set(value){
					//this.selectAllTodos(value);
					this.$store.dispatch('selectAllTodos',value)
				}
			}
		}
	}
</script>
<style type="text/css">
	/*footer*/
	.todo-footer {
	  height: 40px;
	  line-height: 40px;
	  padding-left: 6px;
	  margin-top: 5px;
	}

	.todo-footer label {
	  display: inline-block;
	  margin-right: 20px;
	  cursor: pointer;
	}

	.todo-footer label input {
	  position: relative;
	  top: -1px;
	  vertical-align: middle;
	  margin-right: 5px;
	}

	.todo-footer button {
	  float: right;
	  margin-top: 5px;
	}
</style>