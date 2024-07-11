import { Carousel } from "antd";
import img1 from '../img/inicioCarrusel/1.png';
import img2 from '../img/inicioCarrusel/2.png';
import img3 from '../img/inicioCarrusel/3.png';
import img4 from '../img/inicioCarrusel/4.png';

const CarruselStart = () => {

    const contentStyle = {
        margin: 0,
        width: '100vw',
        height: '90vh',
        color: '#fff',
        lineHeight: '160px',
        background: '#364d79',
    };

    return(
        <Carousel autoplay arrows className='Carrusel'>
            <div>
                <img src={img1} style={contentStyle}/>
            </div>
            <div>
                <img src={img2} style={contentStyle}/>
            </div>
            <div>
                <img src={img3} style={contentStyle}/>
            </div>
            <div>
                <img src={img4} style={contentStyle}/>
            </div>
        </Carousel>
    )
}

export default CarruselStart;