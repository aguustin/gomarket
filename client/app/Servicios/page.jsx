"use client"
import deligencePng from '@/app/assets/diligence.png'
import './servicios.css'
import Link from 'next/link'
import fondoAPng from '@/app/assets/fondoA.png'
import brandingEidentidadPng from '@/app/assets/servicios/BRANDING E IDENTIDAD.png'
import consultoriaPng from '@/app/assets/servicios/CONSULTORIA MARKETING.png'
import contenidosPng from '@/app/assets/servicios/CREACION CONTENIDOS.png'
import desarrolloPng from '@/app/assets/servicios/DESARROLLO WEB Y APP.png'
import publicidadPng from '@/app/assets/servicios/ESTRATEGIAS DE PUBLICIDAD.png'
import mercadoPng from '@/app/assets/servicios/INVESTIGACION DE MERCADO.png'
import seoPng from '@/app/assets/servicios/SEO Y POSICIONAMIENTO.png'
import goBPng from '@/app/assets/goB.png'
import handshakeTinyPng from '@/app/assets/servicios/tiny/handshakeTiny.png'
import { AnimationB, AnimationC, AnimationCB, AnimationD } from '../animations/AnimationA/page'
import { useContext } from 'react'
import FormCp from '../components/FormCp/page'
import UserContext from '../context/sessionContext'

const Servicios = () => {
    const { isVisible, setVisible, setAnimate } = useContext(UserContext)

    const openFormFunc = () => {
        setVisible(!isVisible)
        setAnimate(false)

        setTimeout(() => {
            setAnimate(true)
        }, 50)
        console.log(isVisible)
    }

    return (
        <>
            {isVisible && <FormCp/>}
            <div className="ss flex items-center justify-around  mt-9" style={{ paddingTop: '80px', paddingBottom:'80px', paddingLeft: '140px', paddingRight:'140px' }}>
                <AnimationC>
                    <div className='serv-first-secundary'>
                        <img className='first-img ml-20 max-[1175px]:mx-auto max-[1175px]:mb-10 max-[840px]:mb-0' src={deligencePng.src} alt="" style={{width: '300px', height:'300px'}}></img>
                    </div>
                </AnimationC>
                <AnimationD>
                    <div className='serv-first-secundary'>
                        <h3 className='text-3xl text-center mb-3'>Soluciones que impulsan tu marca</h3>
                        <p>En GoMarket reunimos lo mejor del mundo digital para hacer crecer tu negocio. Desde el desarrollo de un sitio web estratégico, hasta la creación de campañas de marketing digital, publicidad y manejo de redes, cada servicio está pensado para ayudarte a destacar, conectar y vender más.</p><br></br>
                        <p>Creemos que el éxito no es cuestión de suerte, sino de estrategia. Por eso, combinamos creatividad, análisis y tecnología para brindarte soluciones integrales que generan resultados reales.</p><br></br>
                        <p>Porque tener presencia online no es suficiente. Hoy, necesitás tener impacto. Y nosotros estamos acá para lograrlo con vos.</p><br></br>
                        <img style={{width:'70px'}} src={handshakeTinyPng.src} alt="" className='mx-auto'></img>
                    </div>
                </AnimationD>
            </div>
            <div className="est text-center pt-20 pb-20 pl-40 pr-40" >
                <h1 className='text-5xl'>Soluciones digitales que generan resultados reales</h1><br></br>
                <p className='text-xl'>En GoMarket diseñamos estrategias integrales que combinan lo mejor de nuestros servicios: desarrollo web, branding, redes sociales, publicidad y más. Nos basamos en datos, creatividad y una planificación sólida que transforma ideas en crecimiento.</p><br></br>
                <button className='text-xl bg-red-800 p-4 rounded-3xl' onClick={() => openFormFunc()}>Cotizar estrategia de marketing</button>
            </div>
            <div className='as'>
                <div className='p-12'>
                    <h1 className='text-5xl text-center'>¿Cómo lo Hacemos?</h1><br></br>
                    <p className='text-3xl text-center'>Nuestra fórmula Lemon de Estrategias de Marketing Digital</p>
                </div>
                <div className='servicios-container flex flex-wrap justify-between mx-auto'>
                    <div className='servicios mt-12 mb-12'>
                        <AnimationB>
                        <img src={desarrolloPng.src} alt="" className='mx-auto' style={{height:'235px'}}></img><br></br>
                        </AnimationB>
                        <AnimationC>
                            <p className='text-center text-2xl'>Desarrollo Web y Aplicaciones</p><br></br>
                            <p>Creamos sitios web y aplicaciones optimizadas para potenciar tu presencia digital, asegurando un diseño atractivo, funcionalidad intuitiva y una experiencia de usuario excepcional.</p><br></br>
                            <Link href="/Servicios/desarrollo" className='serv-conocer-mas pt-3 pb-3 pl-4 pr-4 rounded-lg'>Conocer mas</Link>
                        </AnimationC>
                    </div>
                    <div className='servicios mt-12 mb-12'>
                        <AnimationB>
                        <img src={consultoriaPng.src} alt="" className='mx-auto' style={{height:'235px'}}></img><br></br>
                        </AnimationB>
                        <AnimationC>
                            <p className='text-center text-2xl'>Consultoría en Marketing Digital</p><br></br>
                            <p>Te guiamos en la planificación y ejecución de estrategias digitales efectivas para hacer crecer tu negocio y maximizar tus resultados en el entorno digital.</p><br></br>
                            <Link href="/Servicios/marketing" className='serv-conocer-mas pt-3 pb-3 pl-4 pr-4 rounded-lg'>Conocer mas</Link>
                        </AnimationC>
                    </div>
                    <div className='servicios mt-12 mb-12'>
                        <AnimationB>
                        <img src={brandingEidentidadPng.src} alt="" className='mx-auto' style={{height:'235px'}}></img><br></br>
                        </AnimationB>
                        <AnimationC>
                            <p className='text-center text-2xl'>Branding e Identidad Visual</p><br></br>
                            <p>Construimos marcas memorables con diseños únicos, logotipos impactantes y una identidad visual coherente que refleje la esencia de tu negocio.</p><br></br>
                            <Link href="/Servicios/branding" className='serv-conocer-mas pt-3 pb-3 pl-4 pr-4 rounded-lg'>Conocer mas</Link>
                        </AnimationC>
                    </div>
                    <div className='servicios mt-16 mb-20'>
                        <AnimationB>
                        <img src={publicidadPng.src} alt="" className='mx-auto' style={{height:'235px'}}></img><br></br>
                        </AnimationB>
                        <AnimationC>
                            <p className='text-center text-2xl'>Estrategias de Publicidad Digital</p><br></br>
                            <p>Diseñamos y optimizamos campañas en plataformas como Meta Ads, Google Ads y TikTok Ads, asegurando mayor alcance, tráfico y conversión para tu negocio.</p><br></br>
                            <Link href="/Servicios/publicidad" className='serv-conocer-mas pt-3 pb-3 pl-4 pr-4 rounded-lg'>Conocer mas</Link>
                        </AnimationC>
                    </div>
                    <div className='servicios mt-16 mb-20'>
                        <AnimationB>
                        <img src={contenidosPng.src} alt="" className='mx-auto' style={{height:'235px'}}></img><br></br>
                        </AnimationB>
                        <AnimationC>
                            <p className='text-center text-2xl'>Creación de Contenido para Redes Sociales</p><br></br>
                            <p>Generamos contenido atractivo y estratégico en distintos formatos (reels, imágenes, animaciones, textos persuasivos) para potenciar el engagement y posicionamiento de tu marca.</p><br></br>
                            <Link href="/Servicios/redes" className='serv-conocer-mas pt-3 pb-3 pl-4 pr-4 rounded-lg'>Conocer mas</Link>
                        </AnimationC>
                    </div>
                    <div className='servicios mt-16 mb-20'>
                        <AnimationB>
                        <img src={mercadoPng.src} alt="" className='mx-auto' style={{height:'235px'}}></img><br></br>
                        </AnimationB>
                        <AnimationC>
                            <p className='text-center text-2xl'>Investigación de Mercado y Análisis de Tendencias</p><br></br>
                            <p>Analizamos el mercado, tu competencia y las tendencias del sector para brindarte información clave que te ayude a tomar decisiones estratégicas y diferenciarte.</p><br></br>
                            <Link href="/Servicios/mercado" className='serv-conocer-mas pt-3 pb-3 pl-4 pr-4 rounded-lg'>Conocer mas</Link>
                        </AnimationC>
                    </div>
                    <div className='servicios mt-16 mb-20'>
                        <AnimationB>
                        <img src={seoPng.src} alt="" className='mx-auto' style={{height:'235px'}}></img><br></br>
                        </AnimationB>
                        <AnimationC>
                            <p className='text-center text-2xl'>SEO y Posicionamiento Web</p><br></br>
                            <p>Optimizamos tu sitio web para que aparezca en los primeros resultados de búsqueda en Google. Implementamos estrategias de SEO técnico, de contenido y de enlaces para aumentar tu visibilidad y atraer más clientes.</p><br></br>
                            <Link href="/Servicios/seo" className='serv-conocer-mas pt-3 pb-3 pl-4 pr-4 rounded-lg'>Conocer mas</Link>
                        </AnimationC>
                    </div>
                </div>
            </div>

            <div className='relative'>
                <img className='publicidad-online w-full mt-24' src={fondoAPng.src} alt=""></img>
                <div className='publicidad-online-text absolute text-center'>
                    <h1 className='text-4xl'>Somos la Agencia de Marketing Digital</h1><br></br>
                    <label className="text-xl">Que pone a tu empresa en el Mapa</label>
                    <p className='text-2xl mt-2'>¿Quieres ser revelante en el entorno digital?</p>
                    <button className='bg-red-800 rounded-lg text-2xl p-4 pl-9 pr-9 mt-8' onClick={() => openFormFunc()}>Contáctanos</button>
                </div>
            </div>


            <div className='ss pl-16 pr-16 pb-16 pt-6 text-black-500'>
                <div className='mx-auto text-center' style={{ width: '60vw' }}>
                    <AnimationCB>
                        <img className='mx-auto mb-6' src={goBPng.src} alt="" style={{height:'220px'}}></img>
                    </AnimationCB>
                    <AnimationB>
                        <h3 className='text-4xl text-center mb-7'>¿Tu sitio web no genera ingresos?</h3>
                        <p>¿Tienes un website DIVINO, pero aún así tu página web no te está generando ingresos?.</p>
                        <p>Hay muchas razones por las que un sitio web no genera "conversiones", lo que se traduce en ingresos.</p><br></br>
                        <p>Lo primero que debes pensar es si tu estrategia de marketing digital es efectiva (si es que tienes una). Una buena estrategia de e-marketing debe llevar a tus clientes potenciales a visitar tu web, y estando allí, a generar acciones valiosas para tu negocio: comprar productos/servicios, ponerse en contacto, pedir una cotización, descargar un material...Depende de tus objetivos.</p><br></br>
                        <p className='text-black-700'>¿Estas aplicando estrategias de Marketing Digital Efectivas?</p>
                        <button className='mx-auto text-2xl bg-slate-800 pt-4 pb-4 pl-8 pr-8 rounded-3xl mt-8' onClick={() => openFormFunc()}>Cotizar Ahora</button>
                    </AnimationB>
                </div>
            </div>
            <div className='ssB p-16'>
                <div className='mx-auto text-center' style={{ width: '60vw' }}>
                    <AnimationB>
                    <h3 className='text-4xl text-center mb-7'>¿Tu sitio web no aparece en Google?</h3>
                    <p>¿Tienes un website DIVINO, pero aún así tu página web no te está generando ingresos?.</p>
                    <p>Hay muchas razones por las que un sitio web no genera "conversiones", lo que se traduce en ingresos.</p><br></br>
                    <p>Lo primero que debes pensar es si tu estrategia de marketing digital es efectiva (si es que tienes una). Una buena estrategia de e-marketing debe llevar a tus clientes potenciales a visitar tu web, y estando allí, a generar acciones valiosas para tu negocio: comprar productos/servicios, ponerse en contacto, pedir una cotización, descargar un material...Depende de tus objetivos.</p><br></br>
                    <p className='text-black-700'>¿Estas aplicando estrategias de Marketing Digital Efectivas?</p>
                    </AnimationB>
                    <AnimationC>
                        <button className='mx-auto text-2xl bg-slate-800 pt-4 pb-4 pl-8 pr-8 rounded-3xl mt-8' onClick={() => openFormFunc()}>Cotizar Ahora</button>
                    </AnimationC>
                </div>
            </div>
        </>
    )
}

export default Servicios