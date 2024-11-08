import style from '../CSS/ComponentsProps.module.css'

function ComponenteProps({instru, preco, texto}){
    return(
        <section className={style.venda}>
        <div className={style.violo}>
            <div className={style.fig1}>
            <a href="#">
            <img src={instru} alt="" />
            <h2>R$ {preco}</h2>
            <p> {texto}</p>
            </a>     
            </div>
        </div>
        
        </section>
    )
}

export default ComponenteProps