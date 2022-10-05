import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer';
import Nabvar from './components/Nabvar/Nabvar';
import Counter from './components/Counter/Counter';

function App() {
  
  const showStock = () => {
    console.log("Hay 5")
  }
  
  return (
    <div className='App'>
      <Nabvar />
      <ItemListContainer greeting="Bienvenido" />
      <Counter onAdd={showStock} />
    </div>
  );
}

export default App;
