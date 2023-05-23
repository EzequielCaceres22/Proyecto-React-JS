import './App.css';
import Banner from './components/Banner';
import Header from "./components/Header";
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';


function App() {
  return (
    <div>
        <Header/>
        <NavBar/>
        <Carrousel/>
        <Banner/>
        <ItemListContainer/>
        <ItemCount stock={20}/>
        <Footer/>
    </div>
  );
}

export default App;
