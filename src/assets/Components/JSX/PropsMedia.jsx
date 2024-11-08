import style from '../CSS/PropsMedia.module.css'

function PropsMedia({titulo, texto,titulo2,texto2,titulo3,texto3}){
    return(
        <section className={style.areaa}>
        <div className={style.grupo}>
            <div className={style.figg1}>
            <h2>{titulo}</h2>
            <p> {texto}</p>
            <h2>{titulo2}</h2>
            <p>{texto2}</p>
            <h2>{titulo3}</h2>
            <p>{texto3}</p>
            </div>
        </div>
        
        </section>
    )
}

export default PropsMedia