import { useState } from "react";
import "./cadastro.css";
import avatar from "../../components/img/icons/entrar-avatar.png";
import rm from "../../components/img/icons/envelope.png";
import se from "../../components/img/icons/trancar.png";
import deco from "../../components/img/icons/deco.png";

const cadastro = () => {
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

  return (
    <div className="wrapper">
      <div className="tela">
        <div className="formulario">
          <form className="cadastro">
            <h2 className="title">Cadastro</h2>

            <div className="input-field">
              <img src={avatar} alt="avatar" className="avatar" />
              <input
                placeholder="NOME"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="input-field">
              <img src={rm} alt="avatar" className="avatar" />
              <input
                type="email"
                placeholder="RM"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-field">
              <img src={se} alt="avatar" className="avatar" />
              <input
                type="password"
                placeholder="SENHA"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button className="btn" onClick={handleSubmit}>
              Criar conta
            </button>
          </form>

          <form className="login">
            <h2 className="title">login</h2>

            <div className="input-field">
              <img src={rm} alt="avatar" className="avatar" />
              <input
                type="email"
                placeholder="RM"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-field">
              <img src={se} alt="avatar" className="avatar" />
              <input
                type="password"
                placeholder="SENHA"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button className="btn" onClick={handleSubmit}>
              login
            </button>
          </form>
        </div>
      </div>
      <div className="painels">
      </div>
    </div>
  );
};

export default cadastro;
