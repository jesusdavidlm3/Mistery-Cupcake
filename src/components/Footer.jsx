import logo from '../img/Imagotipo blanco.png'

const Footer = () => {

    return(
        <div className='Footer'>
            <div style={{display: 'flex', color: 'white'}}>
                <img src={logo} className='Logo'/>
                <div style={{height: 'calc(100% - 40px)', padding: '20px 0px'}}>
                    <h4>Todos los derechos reservados</h4>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                <h4 style={{margin: '0px', color: 'white'}}>Contacta con nosotros</h4>
                <div style={{display: 'flex', gap: '30px'}}>
                    <h3 style={{margin: '0px'}}>Whatsapp</h3>
                    <h3 style={{margin: '0px'}}>Instagram</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer;