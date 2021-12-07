import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBarCustom from './components/Navbar/NavBar';

function App() {
  return (
    <center>
    <NavBarCustom/>
    <ItemListContainer greeting='hola soy item list constainer'/>
    </center>
  );
}

export default App;
