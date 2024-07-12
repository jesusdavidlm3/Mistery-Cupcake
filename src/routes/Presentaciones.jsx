import pack4 from '../img/presentaciones/4pack.png'
import pack6 from '../img/presentaciones/6pack.png'
import pack2 from '../img/presentaciones/2pack.png'
import Atropos from 'atropos/react'
const Presentaciones = () => {
    return(
        <div className='Page presentaciones'>
            <h1>Presentaciones</h1>
            <div className="cardContainer">
                <div className="card">
                    <Atropos shadow={false} highlight={false} className='Atropos'>
                        <img src={pack2}/>
                    </Atropos>
                    <h3>2 Pack</h3>
                    <h4>Perfecto para probar por primera vez</h4>
                </div>
                <div className="card">
                    <Atropos shadow={false} highlight={false} className='Atropos'>
                        <img src={pack4}/>
                    </Atropos>
                    <h3>4 Pack</h3>
                    <h4>Pasala bien descubriendo el sabor con tus amigos</h4>
                </div>
                <div className="card">
                    <Atropos shadow={false} highlight={false} className='Atropos'>
                        <img src={pack6}/>
                    </Atropos>
                    <h3>6 Pack</h3>
                    <h4>Tus reuniones seran las mejores haciendo que todos busquen su sabor favorito</h4>
                </div>
            </div>
        </div>
    )
}

export default Presentaciones;