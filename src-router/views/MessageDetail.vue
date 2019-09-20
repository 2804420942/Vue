<template>
	<div>
		<ul>
			<li>id: {{messageDetail.id}}</li>
			<li>title: {{messageDetail.title}}</li>
			<li>content: {{messageDetail.content}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				messageDetail:{}
			}
		},
		mounted(){
			setTimeout(()=>{
				const allMessageDetail = [
					{
						id: 1,
						title: 'message001',
						content: 'message001 content .....'
					},
					{
						id: 2,
						title: 'message002',
						content: 'message002 content .....'
					},
					{
						id: 4,
						title: 'message004',
						content: 'message004 content .....'
					},
				];
				this.allMessageDetail = allMessageDetail;
				const id = this.$route.params.id*1;
				this.messageDetail = this.allMessageDetail.find(detail => detail.id==id);
				
			},50)
		},
		watch: {
			$route: function (value) {
				const id = value.params.id;
				this.messageDetail = this.allMessageDetail.find(detail => detail.id==id);
			}
		}
	}
</script>
<style type="text/css">
	
</style>