import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/home' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
