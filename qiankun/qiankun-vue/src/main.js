import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null
//这里是挂载到自己的html中，基座会拿到这个挂载的html，将其插入进去
function render(props) {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}

//如果是qiankun使用了子应用
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

//子应用独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}


//导出三个方法
//子应用的协议
export async function bootstrap(props) {

}

export async function mount(props) {
  console.log(props);
  render(props)
}

export async function unmount(props) {
  instance.$destroy()
}
