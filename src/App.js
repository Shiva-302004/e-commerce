import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/footer';
import men_banner from "./components/assets/banner_mens.png"
import women_banner from "./components/assets/banner_women.png"
import kid_banner from "./components/assets/banner_kids.png"

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/mens" element={<ShopCategory category="men" banner={men_banner}/>}></Route>
        <Route path="/womens" element={<ShopCategory category="women" banner={women_banner}/>}></Route>
        <Route path="/kids" element={<ShopCategory category="kid" banner={kid_banner}/>}></Route>
        <Route path='/product' element={<Product></Product>}>
          <Route path=':productId' element={<Product></Product>}></Route>
        </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
