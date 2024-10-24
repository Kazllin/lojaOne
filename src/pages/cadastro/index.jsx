import { useState } from "react";
import "./cadastro.css";
import deco from "../../components/img/icons/deco.png";
import envelope from '../../components/img/icons/envelope.png';
import senh from '../../components/img/icons/trancar.png';
import avatar from '../../components/img/icons/entrar-avatar.png';
import { setAuthToken } from '../../service/api';
import api from '../../service/api';
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate(); // Incluir o hook useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    try {
      const response = await api.post("users/cliente", {
        nome,
        email,
        senha,
        tipoUsuario: "Cliente",
      });
      console.log(response.data);
      
      // Se o cadastro for bem-sucedido, mude para o modo de login
      setIsSignUpMode(false); // Muda para o modo de login
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    }
  };

const handleLogin = async (e) => {
  e.preventDefault(); // Previne o comportamento padrão do formulário
  
  // Cria um objeto FormData
  const formData = new FormData();
  formData.append('email', email);
  formData.append('senha', senha);

  try {
    const response = await api.post('login', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });

    // Log detalhado da resposta do servidor
    console.log('Resposta do servidor:', response.data);

    const token = response.data.access_token; // Supondo que o token esteja na resposta
    const papeis = response.data.papeis; // Supondo que os papéis do usuário estejam na resposta

    if (token) {
      localStorage.setItem('token', token);
      setAuthToken(token);

      // Verifica se papeis é um array e se contém o papel ROLE_CLIENTE
      if (Array.isArray(papeis)) {
        const hasRoleCliente = papeis.includes('ROLE_CLIENTE'); // Verifica se o papel 'ROLE_CLIENTE' está presente

        if (hasRoleCliente) {
          navigate('/rolon'); // Redirecionar para a página desejada (rolon)
        } else {
          console.log('Usuário não tem acesso à página rolon');
        }
      } else {
        console.error('Papeis não é um array ou não está definido');
      }
    } else {
      console.error('Token não encontrado na resposta');
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
  }
};

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleLogin} className={`sign-in-form ${isSignUpMode ? 'hidden' : ''}`}>
            <h2 className="title">Login</h2>
            <div className="input-field">
              <img src={envelope} alt="icon" className="icone"/>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <img src={senh} alt="icon" className="icone"/>
              <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
            </div>
            <button type="submit" className="btn solid">
              Login
            </button>
          </form>
          <form onSubmit={handleSubmit} className={`sign-up-form ${isSignUpMode ? '' : 'hidden'}`}>
            <h2 className="title">Cadastro</h2>
            <div className="input-field">
              <img src={avatar} alt="icon" className="icone"/>
              <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="input-field">
            <img src={senh} alt="icon" className="icone"/>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <img src={senh} alt="icon" className="icone"/>
              <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
            </div>
            <button type="submit" className="btn solid">
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