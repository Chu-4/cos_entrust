import homePage from '../homePage';
import login from '../login';
import post from '../post'

const routers = [
  {
    path: '/home',
    name: '个人主页',
    component: homePage
  },
  {
    path: '/login',
    name: '登录页',
    component: login
  },
  {
    path: '/post',
    name: '个人主页',
    component: post
  },
]

export default routers;