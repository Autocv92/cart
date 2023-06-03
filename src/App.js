import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import ProductCategories from './components/ProductCategories';
import Cart from './components/Cart';
import Login from './components/Login';
import ProductDetails from './components/ProductDetails';
import ProductsPage from './components/ProductsPage';
import Footer from './components/Footer';
import OrderSummery from './components/OrderSummery';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productcategories" element={<ProductCategories />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="productdetails/:pId" element={<ProductDetails />} />
        <Route path="productpage/:categoryId" element={<ProductsPage />} />
        <Route path="ordersummery" element={<OrderSummery />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
