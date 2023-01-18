import { getAppChanges } from "../applications/app";
import { started } from "../start";

export function reroute() {

  /**
   *  需要获取加载的应用
   *  需要获取挂载的应用
   *  哪些应用需要被卸载
   */
  const { appsToLoad, appsToMount, appsToUnmount } = getAppChanges()
  console.log('reroute', appsToLoad, appsToMount, appsToUnmount);

  if (started) {
    //调用 start 方法
    //app 挂载

    return performAppChanges()  //根据路径来挂载应用

  } else {
    //调用 register
    //注册应用时， 需要预先加载
    return loadApps()  //预加载应用
  }

  async function loadApps() {

  }

  async function performAppChanges() {

  }
}