import foto from '../../image/Yuri.png'

import style from '../CSS/Contatos.module.css'
import PropsMedia from './PropsMedia'

function Contatos (){

    return(
        <div className={style.area}>
            <div className={style.fundo}>
            <img className={style.perfil} src={foto} alt="Yuri" />
            </div>
            <PropsMedia 
            titulo='Github'
            texto='unasc1ment0'
            titulo2='Linkedlin'
            texto2='Yuri nascimento da silva'
            titulo3='instagram'
            texto3='unasc1ment0_'
            />
        </div>

    )
}

export default Contatos