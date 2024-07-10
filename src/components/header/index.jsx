import { Link } from 'react-router-dom'
import './header.css'
import avatar from '.././img/icons/entrar-avatar.png'


export default function Header(){
  return(
    <header>
      <div className="conteiner">
        <Link to='/' className="logo">FIEB</Link>
        <Link to='/cadastro' className="direcao"><img src={avatar} alt="avatar" className="avatar"/></Link>
      </div>
    </header>

    
  )  
}