import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Inicio from "./pages/inicio/index";
import Cadastro from "./pages/cadastro/index";
import Produto from "./pages/cadastroProduto/index";

export default function Routessistem() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
        <Route path='/' element={<Inicio/>}/>
          <Route path='/produto' element={<Produto/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}