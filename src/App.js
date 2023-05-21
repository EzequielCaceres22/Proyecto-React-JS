import './App.css';
import Banner from './components/Banner';
import Header from "./components/Header";
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";



function App() {
  return (
    <p>
        <Header/>
        <NavBar/>
        <Banner/>
        <ItemListContainer/>
        <ItemCount stock={20}/>
    </p>
  );
}

export default App;
