<template>
	<div class="bl-df-center">
		 
		<div class="login-box bl-shadow ">
			<div class="header bl-df-c-jcenter">
				<input type="text" placeholder="请输入手机号" class="bl-input-box" v-model="userDto.mobile">
				<input type="password" placeholder="请输入密码" class="bl-input-box" v-model="userDto.password">
				           
				<input type="text" v-model="userDto.code" placeholder="请输入验证码" class="bl-input-box">
							 <img src="http://localhost:8080/code" />
				                
							
							
				            </div>

			</div>
			<div class="body bl-df-center place">
				<button class="bl-btn bl-btn-round bl-btn-default bl-btn-nomar bl-shadow" @click="signIn(userDto)">登录</button>
				<button class="bl-btn bl-btn-round bl-btn-warning bl-btn-nomar bl-shadow">注销</button>
			</div>
		</div>
	</div>
</template>

<script>
	 function myRefersh(e) {
	        const source = e.src; // 获得原来的 src 中的内容
	
	        //console.log( "source : " + source  ) ;
	        var index = source.indexOf("?");  // 从 source 中寻找 ? 第一次出现的位置 (如果不存在则返回 -1 )
	        //console.log( "index : " + index  ) ;
	        if (index > -1) { // 如果找到了 ?  就进入内部
	            var s = source.substring(0, index); // 从 source 中截取 index 之前的内容 ( index 以及 index 之后的内容都被舍弃 )
	            //console.log( "s : " + s  ) ;
	
	            var date = new Date(); // 创建一个 Date 对象的 一个 实例
	             	var time = date.getTime() ; // 从 新创建的 Date 对象的实例中获得该时间对应毫秒值
	            	e.src = s + "?time=" + time ; // 将 加了 尾巴 的 地址 重新放入到 src 上
	            // console.log( e.src ) ;
	            } else {
	            var date = new Date();
	            e.src = source + "?time=" + date.getTime();	}
	
	    }
	export default {
	  data() {
		 
		  
	    return {
	      userDto: {
	        mobile: '',
	        password: '',
		    code:''
	      }
	    };
	  },
	  
	  methods: {
	    signIn(userDto) {
	      this.axios.post('http://localhost:8080/sign-in', JSON.stringify(this.userDto)).then(response => {
	        alert(response.data.msg);
	        if (response.data.msg === '登录成功') {
	          //将后台的用户信息存入本地存储
	          localStorage.user = JSON.stringify(response.data.data);
			  //路由跳转
	          this.$router.push('/personal/basic');
	        }
	      });
	    }
	  },
	  
	};
</script>


<style scoped>
	.pic-img{
		width: 150px;
		height: 40px;
	}
	.login-box {
		position: absolute;
        top: 200px;
		height: 300px;
		width: 400px;
		border-radius: 5px;
		margin: 0 auto;
	}
	
	.header {
		margin-top: 30px;
		height:200px ;
		width: 400px;
	}
	.place{
		position: absolute;
		top: 430px;
	}
</style>
