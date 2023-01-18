import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);


//注册子应用
import { registerMicroApps, start } from 'qiankun'

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:4000', //默认会加载这个html 解析里面的js 动态执行，子应用需要解决跨域 内部使用fetch
    container: '#vue',
    activeRule: '/vue',  //激活的路径
    props: {
      vue: '传给子应用的属性'
    }
  },
  {
    name: 'reactApp',
    //http: 可以省略
    entry: '//localhost:5000', //默认会加载这个html 解析里面的js 动态执行，子应用需要解决跨域 内部使用fetch
    container: '#react',
    activeRule: '/react'
  },
]

registerMicroApps(apps) //注册应用，第二个参数为对象，里面可以写生命周期
start({
  prefetch: false, //取消预加载
}) //开启

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
