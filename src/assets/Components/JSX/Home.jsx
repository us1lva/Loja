import style from '../CSS/Home.module.css'
function Home (){

    return (
        <section className={style.fundo}>
            <div className={style.lado1}>
                <h1><span className={style.cor1}>Proa</span> <span className={style.cor2}>Music</span> <br />
                    Loja de Instrumentos</h1>
                    <p className={style.homep}>Descubra a Proa Music, sua loja de referência em instrumentos musicais. Com uma seleção de guitarras, baterias, teclados e acessórios das melhores marcas, atendemos músicos de todos os níveis. Na Proa Music, você encontra qualidade, atendimento personalizado e tudo para elevar seu som.</p>
            </div>
        </section>

    )
}

export default Home