//秒速应用的整个状态

//没有加载过，应用初始状态
export const NOT_LOADED = 'NOT_LOADED'

//加载资源 
export const LOADING_SOURCE_CODE = 'LOADING_SOURCE_CODE'

//还没有调用bootstrap 方法
export const NOT_BOOTSTRAPPED = 'NOT_BOOTSTRAPPED'

//启动中
export const BOOTSTRAPPING = 'BOOTSTRAPPING'

//没有挂载，没有调用 mount 方法
export const NOT_MOUNTED = 'NOT_MOUNTED'

//正在挂载中
export const MOUNTING = 'MOUNTING'

//挂载完毕
export const MOUNTED = 'MOUNTED'

//更新中，更新完会回到挂载完毕
export const UPDATING = 'UPDATING'

//解除卸载，状态变为没有挂载
export const UNMOUNTING = 'UNMOUNTING'

//完全卸载中，可能状态变为没有加载过（初始化状态）
export const UNLOADING = 'UNLOADING'

//错误处理  资源失败
export const LOAD_ERR = 'LOAD_ERR'

//错误处理   代码问题
export const SKIP_BECAUSE_BROKEN = 'SKIP_BECAUSE_BROKEN'

//当前应用是否被激活
export function isActive(app) {
  return app.status === MOUNTED
}

//当前应用是否要被激活
export function shouldBeActive(app) {
  //如果返回 true  那么应用应该开始初始化等一系列操作
  return app.activeWhen(window.location)
}


