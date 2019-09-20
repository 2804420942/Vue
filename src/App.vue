<template>
	<div>
		<div class="container">
			<Search/>
			<Main/>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Main from './components/Main.vue'
	import Search from './components/Search.vue'
	export default{
		components: {
			Main,
			Search
		}
	}
</script>
<style type="text/css">
	
</style>