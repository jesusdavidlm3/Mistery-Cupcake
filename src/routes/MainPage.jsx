import CarruselStart from '../components/CarruselStart';

import fondo from '../img/fondoInfinito.png';

const MainPage = () => {

    return(
        <div className='Page'>
            <h1>Descubre el sabor</h1>
            <CarruselStart/>
            <div className='info'>
                <h1>Sobre nosotros</h1>
                <h3>
                    Somos una alternativa unica al momento de probar cosas nuevas. Representamos una experienca
                    solo para aquellos que se atreven a aventurarse a lo desconocido
                </h3>
            </div>
        </div>
    )
}

export default MainPage;