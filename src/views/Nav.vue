<template>
	<div>
		<div class="nav bl-df-between">
			<ul>
				<li class="bl-logo logo-place">
					<img src="https://img02.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2F66c1cb81e9e49ec5&appid=122" alt="">
				</li>
			</ul> 
			
			<div class="searchbar">
			    <i class="iconfont">&#xe62d;</i>
			        <input type="text" id="search" value="Search Google or type a URL" 
			        onfocus="if(value=='Search Google or type a URL')value=''" onblur="if(!value)value='Search Google or type a URL'" name="keyword" >  
			      
			</div>
		<ul class="bl-df-right">
			<li>
				<router-link to = "/">首页</router-link>
			</li>
			<li>
				<router-link to = "/article">文章</router-link>
			</li>
			<li>
				<router-link to = "/album">相册</router-link>
			</li>
			<li>
				<router-link to = "/message">留言</router-link>
			</li>
			<li v-if="this.user">
				<button class="bl-btn bl-btn-circle bl-avatar">
				<router-link to = "/personal">
					<img :src="this.user.avatar" alt="">
				</router-link>
				</button>
			</li>
			<li v-if="this.user" @click="logout()">
				<router-link to = "/">退出</router-link>
			</li>
			<li v-if="!this.user">
				<router-link to = "/login">登录</router-link>
			</li>
		</ul>
		</div>
		<div>
		<router-view class="bl-container"/>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			
			return {
				/* 解析中的用户数据并且将值赋给user对象 */
				user: JSON.parse(localStorage.getItem('user'))
			}
		},
		
		create : function(){
			
			
		},
		methods:{
			logout() {
				this.user = null;
				localStorage.clear();
		    }
		},
	}
</script>

<style scoped>
	@font-face {
	  font-family: 'iconfont';  /* project id 1432516 */
	  src: url('//at.alicdn.com/t/font_1432516_wj636n76mgn.eot');
	  src: url('//at.alicdn.com/t/font_1432516_wj636n76mgn.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1432516_wj636n76mgn.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1432516_wj636n76mgn.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1432516_wj636n76mgn.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1432516_wj636n76mgn.svg#iconfont') format('svg');
	}
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		color: #aaa;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.iconfont:hover {
		cursor: pointer;
	}
	.logo-place{
		margin-left: -50px;
	}
	.search-input {
		            flex: 0 0 40%;
		            height: 35px;
		            background-color: #fff;
		            border: 1px;
					color: #00FF7F;
		            border-radius: 3px;
		            margin-left: 150px;
		        }
		
		.search-btn {
		             width: 440px;
		                height: 40px;
		                border:none;    /*取消默认的边框以设置自定义边框*/
		                outline:none;   /*取消浏览器默认的蓝光边框以设置自定义的输入框*/
		                font-size: 16px;        /*设置提示文字的字体大小*/
		                color: rgb(112, 112, 112);   /*设置提示文字颜色*/
		                margin-left: 10px;    /*给输入框与左边放大镜图标10px的间距*/
		           
		        }
	#search { 
	    width: 440px;
	    height: 40px;
	    border:none;    /*取消默认的边框以设置自定义边框*/
	    outline:none;   /*取消浏览器默认的蓝光边框以设置自定义的输入框*/
	    font-size: 16px;  
		border-radius: 2em;
	    color: rgb(112, 112, 112);
	    margin-left: 10px;
		
	}
	.searchbar {        /*目的是设置自定义边框，比如圆角与阴影*/
	    /* border: rgb(218, 218, 218) solid 1px;
	    border-radius: 2em;
	    width: 552px;
	    height: 42px;
	    box-shadow: 0px 0px 5px rgb(212, 212, 212);
	    margin: 0 auto; */
	}
	

	
	.nav {
		
		height: 60px;
		width: 100%;
		padding-left: 60px;
		padding-right: 60px;
		background: linear-gradient(to bottom, rgb(255, 101, 144), rgb(123, 110, 157));
		margin: 0 auto;
		z-index: 999;
	}
	
	img {
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
	
	
	li {
		flex: 0 0 80px;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
	}
	
</style>
