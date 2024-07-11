import { useNavigate } from 'react-router-dom';
import logo from '../img/Imagotipo blanco.png'

const NavBar = () => {

    const navigate = useNavigate()

    return(
        <div className='NavBar'>
            <img src={logo} className='Logo'/>
            <div style={{display: 'flex', gap: '30px'}}>
                <h3 onClick={() => navigate('/Main')}>Inicio</h3>
                <h3 onClick={() => navigate('/sabores')}>Sabores</h3>
                <h3>Presentaciones</h3>
            </div>
        </div>
    )
}

export default NavBar;