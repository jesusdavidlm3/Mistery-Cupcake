import Atropos from 'atropos/react';
import sab1 from '../img/sabores/frutales/sab1.png'
import sab2 from '../img/sabores/frutales/sab2.png'
import sab3 from '../img/sabores/frutales/sab3.png'
import sab4 from '../img/sabores/frutales/sab4.png'
import sab5 from '../img/sabores/frutales/sab5.png'
import sab6 from '../img/sabores/cremosos/sab6.png'
import sab7 from '../img/sabores/cremosos/sab7.png'
import sab8 from '../img/sabores/cremosos/sab8.png'
import sab9 from '../img/sabores/cremosos/sab9.png'
import sab10 from '../img/sabores/cremosos/sab10.png'

const Sabores = () => {
    return(
        <div className="Page sabores">
            <div className="side">
                <h1>Sabores frutales</h1>
                <div className="container">
                    <Atropos className='left'>
                        <img src={sab1}/>
                    </Atropos>
                    {/* <Atropos>
                        <img src={sab2}/>
                    </Atropos>
                    <Atropos className='right'>
                        <img src={sab3}/>
                    </Atropos> */}
                    <Atropos>
                        <img src={sab4}/>
                    </Atropos>
                    <Atropos className='right'>
                        <img src={sab5}/>
                    </Atropos>
                </div>
            </div>

            <div className="side">
                <h1>Sabores cremosos</h1>
                <div className="container">
                    <Atropos className='right'>
                        <img src={sab6}/>
                    </Atropos>
                    <Atropos>
                        <img src={sab7}/>
                    </Atropos>
                    <Atropos className='left'>
                        <img src={sab8}/>
                    </Atropos>
                    {/* <Atropos>
                        <img src={sab9}/>
                    </Atropos>
                    <Atropos  className='right'>
                        <img src={sab10}/>
                    </Atropos> */}
                </div>
            </div>
        </div>
    )
}

export default Sabores;