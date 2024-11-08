import style from "../CSS/Instrumentos.module.css"

import guita from '../../image/guitarrinha.jpg'
import bateria from '../../image/bateria.webp'
import rock from '../../image/1.webp'
import teclado from '../../image/teclado.webp'
import ComponenteProps from "./ComponentsProps"

function Instrumentos(){

    return(
        <section className={style.venda}>
            <div className={style.violo}>
                <ComponenteProps
                instru={guita}
                preco='989,50'
                texto='Violão Clássico Yamaha C70 com cordas de Nylon Natural' 
                />
                <ComponenteProps
                instru={bateria}
                preco='3.247,84'
                texto='Bateria Premium DX722 Wr' 
                />
                <ComponenteProps
                instru={rock}
                preco='4.091,07'
                texto='Guitarra Ibanez KIKOSP3' 
                />
                <ComponenteProps
                instru={teclado}
                preco='2.490,00'
                texto='casio cdp-s90 piano digital' 
                />
                
            </div>
        </section>


    )
}

export default Instrumentos