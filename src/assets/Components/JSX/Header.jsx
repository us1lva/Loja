import style from '../CSS/Header.module.css'
import { Link } from 'react-router-dom'

import logo from '../../image/Proa_Music.jpeg'
import Lupa from '../../image/lupa.png'
import Instrumentos from './Instrumentos'
import Endereco from './Endereco'

function Header (){

    return(
        <header className={style.Cima}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='Instrumentos'>Instrumentos</Link></li>
                <li><Link to='Endereco'>Endereço</Link></li>
                <li><Link to='Contatos'>Contatos</Link></li>
            </ul>

            <div className={style.login}><input type="search" placeholder='Pesquisar...' /></div>

            <img src={logo} alt="logo" className={style.logo} />

            <img src={Lupa} alt="Lupa" className={style.lupa} />

        </header>

    )
}

export default Header