"use client"
import '@/app/Nosotros/nosotros.css';
import goEPng from '@/app/assets/goE.png'
import { AnimationA, AnimationB, AnimationC, AnimationD } from '../../components/animations/AnimationA/page';
import { useContext } from 'react';
import UserContext from '../context/sessionContext';
import FormCp from '../components/formCp/page';

const Nosotros = () => {
    const { isVisible } = useContext(UserContext)


    return(
        <>
        {isVisible && <FormCp/>}
        <div className="text-center mt-12" style={{marginTop:'130px'}}>
            <h1 className='text-4xl text-violet-500'>El equipo detrás de Go Market 🚀</h1><br></br>
        </div>
        <AnimationA>
        <div className='agus-maxi-child-div mx-auto text-center'>
                <div className='tit flex mx-auto justify-center' style={{width:'600px'}}>
                <p>En Go Market, creemos que el marketing es más que estrategias y números; es pasión, creatividad y el sueño de construir algo grande. Nuestra historia comenzó con dos personas con habilidades diferentes, pero con un mismo objetivo: <b>crear una agencia de marketing digital que ayude a negocios y emprendedores a crecer en el mundo digital.</b></p>
                </div>
        </div>
        </AnimationA>
        <div className='text-center'>
            <h3 className='h text-3xl mt-20 text-violet-500' >💡 Los Fundadores de Go Market</h3>
        </div>
        <div className='agus-maxi flex justify-around items-center mt-12 pl-10 pr-10'>
            <AnimationA>
            <div className='agus-maxi-child-div mx-auto text-center' style={{width:'600px'}}>
                <h3 className='text-2xl text-center text-violet-300'>🎯 Maximiliano Giménez – CEO & Estratega de Marketing</h3>
                <p className='mt-6'>Desde siempre, Maxi tuvo una visión clara: ayudar a marcas y emprendedores a potenciar su presencia digital con estrategias bien pensadas y orientadas a resultados. Con experiencia en marketing digital, branding y contenido, se convirtió en el motor detrás de la estrategia de Go Market</p><br></br>
                <p>Para Maxi, el marketing no es solo vender, es conectar. Cada cliente es único, y por eso, en Go Market, cada estrategia es personalizada y diseñada para generar impacto real. Su pasión por el emprendimiento lo llevó a fundar la agencia y a desarrollar Go Ticket, una plataforma innovadora de venta de entradas, junto a su socio Agustín</p><br></br>
                <b>📌 "No se trata solo de hacer marketing, se trata de transformar negocios y ayudar a cumplir sueños."</b>
            </div>
            </AnimationA>
            <AnimationB>
            <div className='mx-auto'>
                <img className='mx-auto' src={goEPng.src} alt="" style={{height:'200px', width: '200px'}} ></img>
            </div>
            </AnimationB>
            <AnimationA>
            <div className='agus-maxi-child-div text-center' style={{width:'600px'}}>
                <h3 className='text-2xl text-center text-violet-300'>💻 Agustín Molé – Co-Fundador & Programador</h3>
                <p className='mt-6'>La tecnología y la innovación siempre fueron parte de la vida de Agustín. Como programador, su objetivo es crear soluciones digitales que hagan la vida más fácil a emprendedores y marcas.</p><br></br>
                <p className='mt-2'>Junto con Maximiliano, decidió dar el salto y fundar Go Market, combinando su talento en desarrollo web y aplicaciones con la visión estratégica del marketing. También es la mente detrás de la programación en Go Ticket, la plataforma que crearon juntos para revolucionar la venta de entradas online.</p><br></br>
                <b>📌 "No hay límites cuando combinas estrategia, tecnología y pasión por lo que haces."</b>
            </div>
            </AnimationA>
        </div>
        <AnimationA>
        <div className='mx-auto mt-12'>
                <h3 className='text-3xl text-center max-[1450px]:mb-6 max-[1450px]:mt-28'>💪 Un Sueño Convertido en Realidad</h3>
                <div className='agus-maxi-child-div mx-auto justify-center mt-6 text-center' style={{width:'600px'}}>
                    <p>Maxi y Agustín no solo fundaron una agencia, crearon un equipo comprometido con el éxito de cada cliente. En Go Market, entendemos el esfuerzo que implica emprender, porque nosotros también empezamos desde cero.</p><br></br>
                    <p>Hoy, seguimos creciendo y ayudando a negocios a lograr lo mismo. No somos solo una agencia, somos aliados estratégicos que trabajamos con compromiso, creatividad y visión para que cada marca alcance su máximo potencial.</p><br></br>
                    <b>📌 Tu éxito es nuestro éxito.</b><br></br>
                    <b>➡ Conocé más sobre cómo podemos ayudarte 🚀</b>
                </div>
        </div>
        </AnimationA>
        <div className='as flex items-center justify-center mt-12 mb-12' style={{height:'170px'}}>
            <em className='text-2xl'> ¡Haz algo imposible de ignorar!</em>
        </div>
        </>
    )
}

export default Nosotros