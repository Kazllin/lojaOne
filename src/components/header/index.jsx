import { Link } from 'react-router-dom'
import './header.css'
import avatar from '.././img/icons/entrar-avatar.png'
import de from '.././img/icons/trancar.png'

export default function Header(){
  return(
    <header>
      <div className="conteiner2">
        <div className="local_logo">
        <Link to='/' className="logo">FIEB</Link>
        </div>
        <div className="local_icone">
        <Link to='/cadastro' className="direcao"><img src={avatar} alt="avatar" className="avatar"/></Link>
        <Link to='/produto' className="direcao"><img src={de} alt="avatar" className="avatar"/></Link>
        </div>
      </div>
    </header>


  )  
}