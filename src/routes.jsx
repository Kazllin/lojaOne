import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/inicio/index";
import Cadastro from "./pages/cadastro/index";
import Produto from "./pages/cadastroProduto/index";
import Layout from "./components/layout";

export default function Routessistem() {
  return (
    <BrowserRouter>
      <Layout/>
        <Routes>
        <Route path='/' element={<Inicio/>}/>
          <Route path='*' element={<Inicio/>}/>
          <Route path='/produto' element={<Produto/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
      <Layout/>
    </BrowserRouter>
  );
}