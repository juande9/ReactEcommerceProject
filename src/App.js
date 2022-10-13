import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer';
import Nabvar from './components/Nabvar/Nabvar';
import ItemDetailContainter from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  
  document.body.style = 'background: #fbfbfb;';

  return (
    <div className='App'>
      <BrowserRouter>
        <Nabvar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path='/item/:productId' element={<ItemDetailContainter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
