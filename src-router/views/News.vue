<template>
	<div>
		<ul>
			<li v-for="(news,index) in newsArr" :key='index'>{{news}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				newsArr:['你好','你是','你走']
			}
		}
	}
</script>
<style type="text/css">
	
</style>