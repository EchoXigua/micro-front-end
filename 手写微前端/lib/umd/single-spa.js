(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.singleSpa = {}));
})(this, (function (exports) { 'use strict';

  let started = false;
  function start() {
    //需要挂载应用
    started = true;
    reroute(); //除了去加载应用 还需要去挂载应用
  }

  function reroute() {

    /**
     *  需要获取加载的应用
     *  需要获取挂载的应用
     *  哪些应用需要被卸载
     */
    const { appsToLoad, appsToMount, appsToUnmount } = getAppChanges();
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

  //秒速应用的整个状态

  //没有加载过，应用初始状态
  const NOT_LOADED = 'NOT_LOADED';

  //加载资源 
  const LOADING_SOURCE_CODE = 'LOADING_SOURCE_CODE';

  //还没有调用bootstrap 方法
  const NOT_BOOTSTRAPPED = 'NOT_BOOTSTRAPPED';

  //当前应用是否要被激活
  function shouldBeActive(app) {
    //如果返回 true  那么应用应该开始初始化等一系列操作
    return app.activeWhen(window.location)
  }

  /**
   * 
   * @param {*} appName  应用名字 
   * @param {*} loadApp  加载的应用
   * @param {*} activeWhen  当激活时会调用 loadApp
   * @param {*} customProps 自定义属性
   */


  const apps = []; //存放所有的应用
  function registryApplication(appName, loadApp, activeWhen, customProps) {
    apps.push({
      name: appName,
      loadApp,
      activeWhen,
      customProps,
      status: NOT_LOADED
    });
    reroute();//加载应用
  }

  function getAppChanges() {
    const appsToUnmount = [];  //要卸载的app
    const appsToLoad = [];  //要加载的app
    const appsToMount = [];  //要挂载的app
    apps.forEach(app => {
      // 需不需要被加载
      const appShouldBeActive = shouldBeActive(app);
      switch (app.status) {
        case NOT_LOADED:
        case LOADING_SOURCE_CODE:
          //初始状态 需要去加载 在激活状态下
          if (appShouldBeActive) {
            appsToLoad.push(app);
          }
          break;
        case NOT_BOOTSTRAPPED:
        case BOOTSTRAPPING:
        case NOT_MOUNTED:
          //加载完毕后， 需要去挂载 在激活状态下
          if (appShouldBeActive) {
            appsToMount.push(app);
          }
          break;
        case MOUNTED:
          //处于 挂载完毕的，且不被激活的需要去卸载
          if (!appShouldBeActive) {
            appsToUnmount.push(app);
          }
          break;
      }
    });

    return {
      appsToUnmount,
      appsToLoad,
      appsToMount
    }
  }

  exports.registryApplication = registryApplication;
  exports.start = start;

}));
//# sourceMappingURL=single-spa.js.map
