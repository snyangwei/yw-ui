import Vue from 'vue'
import Router from 'vue-router'
import { packages } from '../../components.json';

const index = () => import('../components/HelloWorld')
// const helloWorld = () => import('../pages/helloWorld')
// const switchUi = () => import('../pages/switch')

const routes = [
  {
    path: '*',
    redirect: '/index'
  },
  {
    path: '/index',
    name:'index',
    component: index
  },
];

Vue.use(Router)

//组件示例页面
packages.map(item => {
  // const pkgName =  item.name.toLowerCase();
  routes.push({
    path: '/' + item.name,
    component: () => import('../pages/' + item.name ),
    name: item.name
  });
});


export default new Router({
  mode: 'history', 
  routes
  // routes: [
  //   {
  //     path: '/',
  //     name: 'index',
  //     component: index
  //   },
  //   {
  //     path: '/helloWorld',
  //     name: 'helloWorld',
  //     component: helloWorld
  //   },
  //   {
  //     path: '/switch',
  //     name: 'switch',
  //     component: switchUi
  //   }
  // ]
})
