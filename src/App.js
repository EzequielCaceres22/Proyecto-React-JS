import './App.css';
import Banner from './components/Banner';
import Header from "./components/Header";
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from './components/Error404';
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <NavBar/>
        <Carrousel/>
        <Banner/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer/>}/>
            <Route path={"/category/:id"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
            <Route path={"/*"} element={<Error404/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;