import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer';
import Nabvar from './components/Nabvar/Nabvar';

function App() {
  return (
    <div className='App'>
      <Nabvar />
      <ItemListContainer greeting="Bienvenido"/>
    </div>
  );
}

export default App;
