import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer';
import Nabvar from './components/Nabvar/Nabvar';
import ItemDetailContainter from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {

  document.body.style = 'background: #fbfbfb;';

  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <Nabvar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path='/item/:productId' element={<ItemDetailContainter />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
