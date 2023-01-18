import { reroute } from "../navigations/reroute";
import { LOADING_SOURCE_CODE, NOT_BOOTSTRAPPED, NOT_LOADED, shouldBeActive, SKIP_BECAUSE_BROKEN } from "./app.helpers";

/**
 * 
 * @param {*} appName  应用名字 
 * @param {*} loadApp  加载的应用
 * @param {*} activeWhen  当激活时会调用 loadApp
 * @param {*} customProps 自定义属性
 */


const apps = [] //存放所有的应用
export function registryApplication(appName, loadApp, activeWhen, customProps) {
  apps.push({
    name: appName,
    loadApp,
    activeWhen,
    customProps,
    status: NOT_LOADED
  })
  reroute();//加载应用
}

export function getAppChanges() {
  const appsToUnmount = []  //要卸载的app
  const appsToLoad = []  //要加载的app
  const appsToMount = []  //要挂载的app
  apps.forEach(app => {
    // 需不需要被加载
    const appShouldBeActive = shouldBeActive(app)
    switch (app.status) {
      case NOT_LOADED:
      case LOADING_SOURCE_CODE:
        //初始状态 需要去加载 在激活状态下
        if (appShouldBeActive) {
          appsToLoad.push(app)
        }
        break;
      case NOT_BOOTSTRAPPED:
      case BOOTSTRAPPING:
      case NOT_MOUNTED:
        //加载完毕后， 需要去挂载 在激活状态下
        if (appShouldBeActive) {
          appsToMount.push(app)
        }
        break;
      case MOUNTED:
        //处于 挂载完毕的，且不被激活的需要去卸载
        if (!appShouldBeActive) {
          appsToUnmount.push(app)
        }
        break;
      default:
        break;
    }
  })

  return {
    appsToUnmount,
    appsToLoad,
    appsToMount
  }
}