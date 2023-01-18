// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename='/react'>
      <Link to="/">首页</Link>&nbsp;
      <Link to="/about">about</Link>
      <Routes>
        <Route path="/" exact render={() => <h1>首页</h1>}></Route>
        <Route path="/about" exact render={() => <h1>about页面</h1>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
