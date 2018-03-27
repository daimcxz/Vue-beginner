import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Membeer from '../components/membeer/membeer.vue'
import Shopcart from '../components/search/search.vue'
import Search from '../components/shopcart/shopcart.vue'
import NewsList from '../components/news/newsList.vue'
import PhotoShare from '../components/photo/photoShare.vue'
import PhotoDetail from '../components/photo/photoDetail.vue'
Vue.use(Router)
export default new Router({
  linkActiveClass: 'mui-active',
  // 路由
  routes: [
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'membeer',
      path: '/membeer',
      component: Membeer
    },
    {
      name: 'shopcart',
      path: '/shopcart',
      component: Shopcart
    },
    {
      name: 'search',
      path: '/search',
      component: Search
    },
    {
      name: 'news.list',
      path: '/news/list',
      component: NewsList
    },
    {
      name: 'photo.detail',
      path: '/photo/detail',
      component: PhotoDetail
    },
    {
      name: 'photo.share',
      path: '/photo/share',
      component: PhotoShare
    }
  ]
})
