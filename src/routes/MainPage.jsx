import { Carousel, Flex } from 'antd';
import img1 from '../img/inicioCarrusel/1.png';
import img2 from '../img/inicioCarrusel/2.png';
import img3 from '../img/inicioCarrusel/3.png';
import img4 from '../img/inicioCarrusel/4.png';

const MainPage = () => {

    const contentStyle = {
        width: '100vw',
        height: '90vh',
        color: '#fff',
        lineHeight: '160px',
        background: '#364d79',
    };

    return(
        <div className='Page'>
            <h1>Descrubre el sabor</h1>
            <div>
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
            </div>
        </div>
    )
}

export default MainPage;