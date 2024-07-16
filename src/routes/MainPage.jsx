import CarruselStart from '../components/CarruselStart';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Model3D from '../../public/Scene'

const MainPage = () => {

    return(
        <div className='Page'>
            <h1>Descubre el sabor</h1>
            <Canvas>
                <ambientLight />
                <OrbitControls autoRotate={true} enableZoom={false} autoRotateSpeed={10} minDistance={5} />
                <Suspense fallback={null}>
                    <Model3D/>
                </Suspense>
                <Environment preset='sunset'/>
            </Canvas>
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