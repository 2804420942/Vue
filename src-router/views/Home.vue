<template>
	<div>
		<h2>Home</h2>
		<div>
			<ul class="nav nav-tabs">
				
					<router-link to="/home/news">News</router-link>
					<router-link to="/home/message">Message</router-link>
				
			</ul>
		</div>
		<div>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
			<hr/>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{

	}
</script>
<style type="text/css">
	
</style>