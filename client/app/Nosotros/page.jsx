
import '@/app/Nosotros/nosotros.css';
import socialMediaPng from '@/app/assets/socialMedia.png';
import { AnimationA, AnimationB, AnimationC, AnimationD } from '../animations/AnimationA/page';

const Nosotros = () => {
    return(
        <>
        <div className="text-center mt-12">
            <h1 className='text-4xl'>Que es ser GoMarket</h1><br></br>
            <h2 className='text-3xl mt-6'>Nuestra fórmula al servicio de tu éxito digital</h2>
        </div>
        <div className='flex items-center justify-around mt-12'>
            <AnimationC>
            <div style={{width:'600px'}}>
                <h3 className='text-3xl text-center'>Un equipo humano que aporta arte, diseño y tecnología</h3>
                <p className='mt-6'>Los desafíos digitales se han multiplicado en los últimos años, ser competitivos en los medios digitales hoy en día, puede determinar el éxito o fracaso de tu negocio.</p><br></br>
                <p className='mt-2'>Somos LEMON Leads Marketing on-line, un experimentado equipo que suma a tu empresa diversos talentos creativos, artísticos, tecnológicos y especializados en marketing para expandir tu marca en los canales digitales más relevantes a tu público objetivo, para conseguir resultados tangibles totalmente alineados a tus objetivos comerciales.</p>
            </div>
            </AnimationC>
            <AnimationD>
            <div style={{width:'600px'}}>
                <h3 className='text-3xl text-center'>Apoyamos tus procesos de manera estratégica</h3>
                <p className='mt-6'>Los desafíos digitales se han multiplicado en los últimos años, ser competitivos en los medios digitales hoy en día, puede determinar el éxito o fracaso de tu negocio.</p><br></br>
                <p className='mt-2'>Somos LEMON Leads Marketing on-line, un experimentado equipo que suma a tu empresa diversos talentos creativos, artísticos, tecnológicos y especializados en marketing para expandir tu marca en los canales digitales más relevantes a tu público objetivo, para conseguir resultados tangibles totalmente alineados a tus objetivos comerciales.</p>
            </div>
            </AnimationD>
        </div>
        <AnimationB>
        <div className='mt-12 mb-12'>
            <img className='mx-auto' src={socialMediaPng.src} alt=""></img>
        </div>
        </AnimationB>
        <AnimationA>
        <div className='mx-auto'>
                <h3 className='text-3xl text-center'>Apoyamos tus procesos de manera estratégica</h3>
                <div className='flex justify-center mt-6'>
                    <ul className=''>
                        <li><b>Adaptabilidad:</b> Nos adaptamos a un ambiente digital que cambia de manera acelerada y profunda, de la misma manera que nos adaptamos al entorno.</li>
                        <li><b>Colaboración:</b> Entendiendo la colaboración como respeto, compromiso, cooperación y en concordancia con los objetivos.</li>
                        <li><b>Resultados:</b> Los resultados nos mueven, son nuestra razón de ser y es donde ponemos el corazón día a día.</li>
                    </ul>
                </div>
        </div>
        </AnimationA>
        <div className='as flex items-center justify-center mt-12 mb-12' style={{height:'170px'}}>
            <em className='text-2xl'>Poner frase motivacional aca para que quede bien</em>
        </div>
        </>
    )
}

export default Nosotros