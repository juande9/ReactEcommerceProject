import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer';
import Nabvar from './components/Nabvar/Nabvar';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className='App'>
      <Nabvar />
      <ItemListContainer greeting="Bienvenido"/>
      <Counter/>
    </div>
  );
}

export default App;
