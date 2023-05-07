import './App.css';
import Banner from './components/Banner';
import Header from "./components/Header";
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";



function App() {
  return (
    <p>
        <Header/>
        <NavBar/>
        <Banner/>
        <ItemListContainer greeting={"No se encontraron Productos!"}/>
    </p>
  );
}

export default App;
