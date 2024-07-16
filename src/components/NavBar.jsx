import { useNavigate } from 'react-router-dom';
import logo from '../img/Imagotipo blanco.png'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, Button } from '@mui/material';
import { useState } from 'react';

const NavBar = () => {

    const navigate = useNavigate()

    const [adminMenuAnchor, setAdminMenuAnchor] = useState(null)
    const open = Boolean(adminMenuAnchor)

    const [openMenu, setOpenMenu] = useState(false)

    const openAdminMenu = (e) => {
        setAdminMenuAnchor(e.currentTarget)
    }

    return(
        <div className='NavBar'>
            <img src={logo} className='Logo' onClick={() => navigate('/Main')}/>
            <div style={{display: 'flex', gap: '30px'}}>
                <h3 onClick={() => navigate('/Main')}>Inicio</h3>
                <h3 onClick={() => navigate('/sabores')}>Sabores</h3>
                <h3 onClick={() => navigate('/Presentaciones')}>Presentaciones</h3>
            </div>

            <IconButton onClick={() => setOpenMenu(true)} size='large' className='mobile'> <MenuIcon size={48}/> </IconButton>
            <Drawer
                open={openMenu}
                onClose={() => setOpenMenu(false)}
                anchor='right'
                sx={{textAlign: 'start'}}
            >
                <Button onClick={() => {navigate('/Main'); setOpenMenu(false)}}>Inicio</Button>
                <Button onClick={() => {navigate('/sabores'); setOpenMenu(false)}}>Sabores</Button>
                <Button onClick={() => {navigate('/Presentaciones'); setOpenMenu(false)}}>Presentaciones</Button>
            </Drawer>
        </div>
    )
}

export default NavBar;