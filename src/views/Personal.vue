<template>
	<div class="bod">
		<div class="left">
	<ul>
		<li>
			<router-link to="/profile/">基本信息</router-link>
		</li>
		<li>
			<router-link to="/profile/password">密码</router-link>
		</li>
	</ul>
	</div>
	<div class="right">
	<router-view class = "container" />
	</div>
	</div>
</template>

<script>
	export default {
		data(){
	        return{
				
			}
		},
		create: function(){
			
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	ul {
		display: flex;
		list-style: none;
		flex-direction: column;
	}
	
	a {
		text-decoration: none;
		font-size: 24px;
		color: #333333;
	}
	
	.bod {
		
		display: flex;
		width: 80%;
		margin: 0 auto;
		margin-top: 20px;
		height: 600px;
		border: 1px solid red;
		
	}
	
	.left {
		flex: 0 0 20%;
		height: 100%;
	}
	.right {
		flex:0 0 78%;
		margin-left: 5px;
		border: 1px solid #000000;
	}
</style>
