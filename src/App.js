import { Route, Routes } from 'react-router-dom';
import Navbarapp from './components/Navbarapp';
import Products from './components/Products';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" >
      <Navbarapp />
      <Routes>
        <Route path='/' element={
          <>
            <Products />
            <Footer />
          </>
        } />
        <Route path='cart' element={<Cart />} />
        <Route path='product/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;