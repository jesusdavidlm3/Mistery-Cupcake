import logo from '../img/Imagotipo blanco.png'

const NavBar = () => {

    return(
        <div className='NavBar'>
            <img src={logo} className='Logo'/>
            <div style={{display: 'flex', gap: '30px'}}>
                <h3>Inicio</h3>
                <h3>Sabores</h3>
                <h3>Presentaciones</h3>
            </div>
        </div>
    )
}

export default NavBar;