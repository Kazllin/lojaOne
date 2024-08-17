import { useState } from "react";
import "./cadastro.css";
import deco from "../../components/img/icons/deco.png";
import envelope from '../../components/img/icons/envelope.png'
import senh from '../../components/img/icons/trancar.png'
import avatar from '../../components/img/icons/entrar-avatar.png'

const Cadastro = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await api.post("users", {
        nome: nome,
        email: email,
        senha: senha,
        tipoUsuario: "Funcionario",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await api.post("users", {
        email: email,
        senha: senha,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className={`sign-in-form ${isSignUpMode ? 'hidden' : ''}`}>
            <h2 className="title">Login</h2>
            <div className="input-field">
              <img src={envelope} alt="icon" className="icone"/>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <img src={senh} alt="icon" className="icone"/>
              <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
            </div>
            <button type="button" className="btn solid" onClick={handleLogin}>
              Login
            </button>
          </form>
          <form action="#" className={`sign-up-form ${isSignUpMode ? '' : 'hidden'}`}>
            <h2 className="title">Cadastro</h2>
            <div className="input-field">
            <img src={avatar} alt="icon" className="icone"/>
              <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="input-field">
              <img src={envelope} alt="icon" className="icone"/>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <img src={senh} alt="icon" className="icone"/>
              <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
            </div>
            <button type="button" className="btn solid" onClick={handleSubmit}>
              Cadastrar
            </button>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Novo usuario ?</h3>
            <p>Se cadastre aqui e comece a usar nosso sistema.</p>
            <button className="btn transparent" onClick={() => setIsSignUpMode(true)}>
              Cadastro
            </button>
          </div>
          <img src={deco} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Ja esta cadastro?</h3>
            <p>Loga aqui e comece a usar nosso sistema.</p>
            <button className="btn transparent" onClick={() => setIsSignUpMode(false)}>
              Login
            </button>
          </div>
          <img src={deco} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cadastro;