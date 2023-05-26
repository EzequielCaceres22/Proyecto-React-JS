import './App.css';
import Banner from './components/Banner';
import Header from "./components/Header";
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
        <Header/>
        <NavBar/>
        <Carrousel/>
        <Banner/>
        <ItemListContainer/>
        <Footer/>
    </div>
  );
}

export default App;
