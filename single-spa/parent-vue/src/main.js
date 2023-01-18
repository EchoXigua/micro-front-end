import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//注册子应用
import { registerApplication, start } from 'single-spa'

registerApplication('myVueApp',
  async () => {
    //匹配上之后会执行这里的方法
    console.log('加载模块');
    //加载有顺序要求，先加载公共的
    await loadScript('http://localhost:1050/js/chunk-vendors.js')
    await loadScript('http://localhost:1050/js/app.js')

    return window.singleVue
  },
  //这里会把location 传过来
  location => location.pathname.startsWith('/vue')
)

start()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


async function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}
