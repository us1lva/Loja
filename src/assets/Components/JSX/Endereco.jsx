import style from '../CSS/Endereco.module.css'

function Endereco(){

    return(
        <div className={style.mapa}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.3022085316934!2d-2.2913400999999998!3d53.46305889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0x6c930e96df4455fe!2sEst%C3%A1dio%20Old%20Trafford!5e0!3m2!1spt-BR!2sbr!4v1729085500026!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    )
}

export default Endereco