import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting="Bienvenido"/>
    </div>
  );
}

export default App;
