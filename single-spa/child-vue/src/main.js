import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')


// 我们需要父应用加载子应用，子应用需要提供三个接口
// bootstrap ，mount  unmount

const appOptions = {
  el: '#vue', //挂载到父应用中的id为vue的标签中
  router,
  render: h => h(App)
}

const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions
})

//如果是父应用引用我
if (window.singleSpaNavigate) {
  __webpack_public_path__ = 'http://localhost:1050/'
}
if (!window.singleSpaNavigate) {
  //自己独立运行的话，需要渲染
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}


export const bootstrap = vueLifeCycle.bootstrap

export const mount = vueLifeCycle.mount

export const unmount = vueLifeCycle.unmount

