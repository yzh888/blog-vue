import Vue from 'vue'
import VueRouter from 'vue-router'

import Nav from '@/views/Nav.vue'
import Login from '@/views/Login.vue'
import Message from '@/views/Message.vue'
import Index from '@/views/Index.vue'
import Album from '@/views/Album.vue'
import Basic from '@/views/Basic.vue'
import Password from '@/views/Password.vue'
import Article from '@/views/Article.vue'
import Personal from '@/views/Personal.vue'
import PersonalDetail from '@/views/PersonalDetail.vue'


Vue.use(VueRouter)

const routes = [
  {
	  // 组件填充的条件
    path: '/',
    component: Nav,
	children :[
		{
			path : '/',
			redirect :'index'
		},
	    {
			path : 'index',
			component : Index
		},
		{
			path : 'article',
			component : Article 
		},
		{
			path : 'album',
			component : Album
		},
		{
			path : 'Message',
			component : Message
		},
		{
			path : 'persondeatil',
			component : PersonalDetail
		},
		{
			path : 'personal' ,
			component : Personal,
			children :[
				{
					path : '/',
					redirect : 'basic'
				},
				{
					path : 'basic',
					component : Basic
				},
				{
					path : 'password',
					component : Password
				}
			]
		}
	]
  },
  {
    path: '/login',
    component : Login    
  },
 
]

const router = new VueRouter({
  routes
})

export default router
