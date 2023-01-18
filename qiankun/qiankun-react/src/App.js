// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter basename='/react'>
      <Link to="/">首页</Link>&nbsp;
      <Link to="/about">about</Link>
      <Routes>
        <Route path="/" exact element={<About></About>}></Route>
        <Route path="/about" element={<Home></Home>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
