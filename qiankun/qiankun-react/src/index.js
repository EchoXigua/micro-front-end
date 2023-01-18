import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// //如果是qiankun使用了子应用
// if (window.__POWERED_BY_QIANKUN__) {
//   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
// }

//子应用独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}


function render(props) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


export async function bootstrap(props) {

}
export async function mount(props) {
  render()
}
export async function unmount(props) {
  root.unmount(document.getElementById('root'))
}