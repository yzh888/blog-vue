<template>
	<div class="bl-container bl-df-jcenter">
		<div class="bl-col-8 left">
			<!-- 主页轮播 -->
			<div class="head">
				<div class="carousel-wrap">
					<transition-group tag="ul" class="slide-ul" name="slide">
						<li v-for="(art,index) in avatars" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
								<img :src="art">
						</li>
					</transition-group>
				</div>
				
			</div>
			<p class="bl-title">文章推荐</p>
			<hr>
			<div class="bl-card" v-for="(article, index) in articles.slice(0,4)" :key = "index">
				<div class="bl-article-recommendation bl-df-center ">
					<div class="ar-avatar">
						<img :src = "'https://images.weserv.nl/?url='+article.avatar">
					</div>
					
					<div class="ar-right bl-df-c-center">
						<p class="bl-title">{{article.title}}</p
						<p class="article-description">{{article.description}}</p>
						<p class="ar-comment bl-df-between">
							<ul>
								<span>个人博客</span>
							    <span>
								     创建时间:{{article.createTime.date.year}}-{{article.createTime.date.month}}-{{article.createTime.date.day}}
								</span>
							</ul>
							<ul>
							     <span>转发量:{{article.forwardAccount}}</span>
							     <span>评论人数:{{article.commentAccount}}</span>
							     <span>关注量{{article.likeAccount}}</span>
								 
							</ul>
						</p>
					</div>
				</div>
			<hr class="split-line">
			</div>
		</div>
		<div class="bl-col-4 right">
			
			<div>
				<h3>精选版块————></h3>
			</div>
			<!-- <div class="bl-df-c-center" v-for="(users, index) in users.slice(0,3)" :key = "index">
			<div class = "bl-right-sideCard bl-df-left">
				<div class="bl-content-avatar" @click="jump-personal">
					<img :src="'https://images.weserv.nl/?url='+ users.avatar" class="bl-btn-circle" alt="" @click="gotoPersonalDetail(users.id)">
				</div>
				<div class="bl-df-c-center">
					<p class="bl-md-font bl-bd-font">{{users.nickname}}</p>
					<p class="bl-msm-font user-descripiton">{{users.introduction.substring(0,30)+"..."}}</p>
					<p class="bottom bl-df-between">
						<span>文章数：13</span>
						<span>粉丝量:{{users.fans}}</span>
					</p>
				</div>
			</div>
			</div> -->
			<div class="board">
				<a href="/profile">
					<img src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png">
				</a>
				<a href="/profile">
					<img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png">
				</a>
				<a href="/profile">
					<img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png">
				</a>
				<a href="/profile">
					<img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png">
				</a>
				
			</div>
			
			
			
			
			<div>
				<h2>最新热门</h2>
				
			</div>
			<div class="bl-df-c-center" v-for="(users, index) in users.slice(0,3)" :key = "index">
			<div class = "bl-right-sideCard bl-df-left">
				<div class="bl-content-avatar" @click="jump-personal">
					<img :src="'https://images.weserv.nl/?url='+ users.avatar" class="bl-btn-circle" alt="" @click="gotoPersonalDetail(users.id)">
				</div>
				<div class="bl-df-c-center">
					<p class="bl-md-font bl-bd-font">{{users.nickname}}</p>
					<p class="bl-msm-font user-descripiton">{{users.introduction.substring(0,30)+"..."}}</p>
					<p class="bottom bl-df-between">
						<span>文章数：0</span>
						<span>粉丝量:{{users.fans}}</span>
						
					</p>
				</div>
			</div>
			</div>
			
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				articles : [],
				users : [],
				avatars : [
					"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1597286437,2443922363&fm=26&gp=0.jpg",
				    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2638977175,1485789245&fm=26&gp=0.jpg",
					"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4027369142,1387227817&fm=26&gp=0.jpg",
					"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1938730765,610435416&fm=26&gp=0.jpg"
				],
				currentIndex: 0,
				timer: null,
				
				user: JSON.parse(localStorage.getItem('user'))
			}
		},
		created : function() {
			
			/* 查询所有文章 */
			this.axios.get('http://localhost:8080/article').then(response=>{
				this.articles = response.data.data;
				console.log(response.data.data);
			}),
			
			/* 动画自动播放 */
			this.$nextTick(() => {
				this.timer = setInterval(() => {this.autoPlay()}, 3000)
			}),
			
			/* 查询所有用户 */
			this.axios.get('http://localhost:8080/users').then(res =>{
				this.users = res.data.data;
				console.log(res.data.data);
			})
		},
		
		methods:{
			
			gotoPersonalDetail(id) {
				 this.$router.push('/persondeatil?id=' + id);
			},
			
			go() {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 3000)
			},
			stop() {
				clearInterval(this.timer)
				this.timer = null
			},
			autoPlay() {
				this.currentIndex++
				if (this.currentIndex > 3) {
					this.currentIndex = 0
				}
			},
		}
	}
</script>

<style scoped>
	.board{
		border-radius:50% ;
	}
	.item-wrapper {
		display: flex;
		background-color: #fff;
		border: 1px solid #eee;
		border-radius: 5px;
		margin: 10px;
	}
	.left {
		padding: 20px 20px ;
	}
	
	.right {
		margin: 0;
		height: 800px;
		background-color: rgba(255, 204, 66);
	}
	
	.head {
		width: 100%;
		height: 260px;
		margin-bottom: 20px;
		
	}
	
	.head img {
		width: 100%;
		height: 100%;
	}
	
	hr {
		margin-top: 10px;
		margin-bottom: 10px;
		border: 2px solid #DDDDDD;
		width: 100%;
	}
	
	p {
		margin-top: 5px;
	}
	
	ul span {
		
		margin-left: 10px;
	}
	
	.ar-title {
		height: 30px;
		width: 100%;
	}
	.ar-avatar {
		width: 240px;
		height: 140px;
		border: 1px solid #009688;
	}
	
	.ar-avatar img {
		width: 100%;
		height: 100%;
	}
	
	.ar-right {
		height: 100%;
		width: 100%;
		padding: 10px 10px;
	}
	
	.article-description {
		width: 100%;
		margin-top: 10px;
		height: 120px;
		font-size: 12px;
		line-height: 20px;
		font-family: "雅黑";
	}
	
	.ar-comment {
		margin-top: 10px;
		width: 100%;
		font-size: 12px;
	}
	
	.split-line {
		margin-top: 30px;
		border: 0.5px solid;
	}
	
	.bottom {
		font-size: 12px;
		width: 200px;
	}
	
	.user-descripiton {
		height: 30px;
	}
</style>
