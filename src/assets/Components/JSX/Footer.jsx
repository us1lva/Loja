import style from '../CSS/Footer.module.css'

function Footer(){

    return(
        <footer className={style.rodape}>
            <ul className={style.ul1}>
                <h3 className={style.h33}>Mapa do usuario</h3>
                <li className={style.li1}>Home</li>
                <li className={style.li1}>Instrumentos</li>
                <li className={style.li1}>Endereço</li>
                <li className={style.li1}>Contatos</li>
            </ul> 
            <ul className={style.ul2}>
                <h3 className={style.h33}>Atendimento</h3>
                <li className={style.li1}>Telefone: 40028922</li>
                <li className={style.li1}>Whatsapp: 11911337798</li>
                <li className={style.li1}>E-mail: yuri.nsilva@outlook.com</li>
                <li className={style.li1}>Horario de atendimento: Segunda a Sexta</li>
            </ul>
            <ul className={style.ul1}>
                <h3 className={style.h33}>Redes sociais</h3>
                <li className={style.li1}>Facebook</li>
                <li className={style.li1}>Instagram</li>
                <li className={style.li1}>Youtube</li>
                <li className={style.li1}>Spotify</li>
            </ul> 
            
        </footer>

    )
}

export default Footer