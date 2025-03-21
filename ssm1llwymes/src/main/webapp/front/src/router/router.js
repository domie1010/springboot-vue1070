import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import shangjiaList from '../pages/shangjia/list'
import shangjiaDetail from '../pages/shangjia/detail'
import shangjiaAdd from '../pages/shangjia/add'
import shangpinleibieList from '../pages/shangpinleibie/list'
import shangpinleibieDetail from '../pages/shangpinleibie/detail'
import shangpinleibieAdd from '../pages/shangpinleibie/add'
import pinpaiList from '../pages/pinpai/list'
import pinpaiDetail from '../pages/pinpai/detail'
import pinpaiAdd from '../pages/pinpai/add'
import remaishangpinList from '../pages/remaishangpin/list'
import remaishangpinDetail from '../pages/remaishangpin/detail'
import remaishangpinAdd from '../pages/remaishangpin/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussremaishangpinList from '../pages/discussremaishangpin/list'
import discussremaishangpinDetail from '../pages/discussremaishangpin/detail'
import discussremaishangpinAdd from '../pages/discussremaishangpin/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'shangjia',
					component: shangjiaList
				},
				{
					path: 'shangjiaDetail',
					component: shangjiaDetail
				},
				{
					path: 'shangjiaAdd',
					component: shangjiaAdd
				},
				{
					path: 'shangpinleibie',
					component: shangpinleibieList
				},
				{
					path: 'shangpinleibieDetail',
					component: shangpinleibieDetail
				},
				{
					path: 'shangpinleibieAdd',
					component: shangpinleibieAdd
				},
				{
					path: 'pinpai',
					component: pinpaiList
				},
				{
					path: 'pinpaiDetail',
					component: pinpaiDetail
				},
				{
					path: 'pinpaiAdd',
					component: pinpaiAdd
				},
				{
					path: 'remaishangpin',
					component: remaishangpinList
				},
				{
					path: 'remaishangpinDetail',
					component: remaishangpinDetail
				},
				{
					path: 'remaishangpinAdd',
					component: remaishangpinAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussremaishangpin',
					component: discussremaishangpinList
				},
				{
					path: 'discussremaishangpinDetail',
					component: discussremaishangpinDetail
				},
				{
					path: 'discussremaishangpinAdd',
					component: discussremaishangpinAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
