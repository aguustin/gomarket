"use client"
import '@/app/Home/home.css'
import prueba from '@/app/assets/prueba.jpg';
import seopng from '@/app/assets/seo.png';
import goAPng from '@/app/assets/goA.png'
import mercadoPng from '@/app/assets/investigacionMercado.png'
import fondoAPng from '@/app/assets/fondoA.png'
import consultoria from '@/app/assets/CONSULTORIA MARKETING.png'
import creacion from '@/app/assets/CREACION CONTENIDOS.png'
import desarrollo from '@/app/assets/DESARROLLO WEB Y APP.png'
import estrategias from '@/app/assets/ESTRATEGIAS DE PUBLICIDAD.png'
import seo from '@/app/assets/SEO Y POSICIONAMIENTO.png'
import branding from '@/app/assets/BRANDING E IDENTIDAD.png'
import seoImageJpeg from '@/app/assets/seo-image.jpeg'
import websiteJpg from '@/app/assets/website.jpg'
import leadGeneration from '@/app/assets/lead-generation.png'
import Link from 'next/link';
import { useState } from 'react';
import { AnimationA, AnimationB, AnimationC, AnimationTi } from '../animations/AnimationA/page';
import Image from 'next/image'

const Home = () => {

    const [isVisible, setVisible] = useState(false)
    const [animate, setAnimate] = useState(false)

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
            {isVisible && (
                <>
                    <div className={`back-form ${animate ? 'show' : ''} bg-slate-800`} onClick={() => setVisible(false)}></div>
                    <div className={`form-container ${animate ? 'show' : ''} bg-slate-800`}>
                        <form className='p-4'>
                            <h2 className='text-center text-xl'>Rellena a continuación nuestro formulario para ponerte en contacto. Recibiremos esta información y nos comunicaremos contigo lo más rápido posible (es una promesa)</h2>
                            <div className='mt-4 mb-6'>
                                <div className='form-group flex items-center justify-between '>
                                    <input className='bg-slate-900 m-4 w-full' type="text" id="name" name="name" placeholder='Nombre' required />
                                    <input className='bg-slate-900 m-4 w-full' type="email" id="email" name="email" placeholder='Apellido' required />
                                </div>
                                <div className='form-group flex items-center justify-between '>
                                    <input className='bg-slate-900 m-4 w-full' type="text" id="name" name="name" placeholder='Email' required />
                                    <input className='bg-slate-900 m-4 w-full' type="email" id="email" name="email" placeholder='Movil o whatsapp' required />
                                </div>
                                <div className='form-group flex items-center justify-between '>
                                    <input className='bg-slate-900 m-4 w-full' type="text" id="name" name="name" placeholder='Cargo (no obligatorio)' />
                                    <input className='bg-slate-900 m-4 w-full' type="email" id="email" name="email" placeholder='Empresa (no obligatorio)' />
                                </div>
                                <div className='form-group flex items-center justify-between '>
                                    <input className='bg-slate-900 m-4 w-full' type="text" id="name" name="name" placeholder='País' required />
                                </div>
                            </div>
                            <div>
                                <p>¿Necesitas una pagina web?</p>
                                <div className='inline-block items-center mt-1'>
                                    <input type='checkbox'></input>
                                    <label className='mr-2'>Si</label>
                                </div>
                                <div className='inline-block items-center'>
                                    <input type='checkbox'></input>
                                    <label className='mr-2'>No</label>
                                </div>
                            </div>
                            <div className='block mt-3'>
                                <p>Servicio(s) de interés</p>
                                <div className='flex justify-between mt-1'>
                                    <div className='block'>
                                        <div className='mt-2'>
                                            <input type='checkbox'></input>
                                            <label className='mr-2'>Pagina Web</label>
                                        </div>
                                        <div className='mt-2'>
                                            <input type='checkbox'></input>
                                            <label className='mr-2'>Aplicacion movil</label>
                                        </div>
                                        <div className='mt-2'>
                                            <input type='checkbox'></input>
                                            <label className='mr-2'>Consultoría en Marketing Digital</label>
                                        </div>
                                        <div className='mt-2'>
                                            <input type='checkbox'></input>
                                            <label className='mr-2'>Branding e Identidad Visual</label>
                                        </div>
                                    </div>
                                    <div className='block'>
                                        <div className='mt-2'>
                                            <input type='checkbox'></input>
                                            <label className='mr-2'>Estrategias de Publicidad Digital</label>
                                        </div>
                                        <div className='mt-2'>
                                            <input type='checkbox'></input>
                                            <label className='mr-2'>Contenido para Redes Sociales</label>
                                        </div>
                                        <div className='mt-2'>
                                            <input type='checkbox'></input>
                                            <label className='mr-2'>Investigación de Mercado</label>
                                        </div>
                                        <div className='mt-2'>
                                            <input type='checkbox'></input>
                                            <label className='mr-2'>Análisis de Tendencias</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='block mt-3'>
                                <p>¿Estarías disponible para una videollamada con nuestro equipo?</p>
                                <div className='flex justify-between mt-1'>
                                    <div className='block'>
                                        <div className='mt-2'>
                                            <input type='checkbox'></input>
                                            <label className='mr-2'>Si</label>
                                        </div>
                                        <div className='mt-2'>
                                            <input type='checkbox'></input>
                                            <label className='mr-2'>No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <textarea className='mt-6 bg-slate-900 p-1' name="description" placeholder="Por favor guíanos ¿Cómo podemos ayudarte?" rows={6} style={{ width: '100%' }} maxLength={250}></textarea>
                            <label className='mt-2'>Limite de caracteres 250</label>
                            <button className='mt-6 bg-lime-700' type="submit">Enviar</button>
                        </form>
                    </div>
                </>
            )}










            <div className='go-image-container mx-auto'>
                <img src={prueba.src} alt=""></img>
            </div>
            <AnimationTi>
                <div className='text-center pt-20 pb-20 md:pt-6 md:pb-6'>
                    <img className='mx-auto mb-12' src={goAPng.src} width={170} height={170} alt="" />
                    <h2 className='text-3xl text-violet-500 font-medium'>TRANSFORMA TU PRESENCIA DIGITAL CON NOSOTROS</h2>
                    <br></br>
                    <p className='text-2xl lg:ml-4 lg:mr-4'>Creamos estrategias únicas y a medida para potenciar tu inversión y llevar tu negocio al siguiente nivel en el mundo digital.</p>
                    <button className='bg-violet-900 pt-4 pb-4 pl-7 pr-7 rounded-lg mt-7'><p className='text-lg'>Saber mas</p></button>
                </div>
            </AnimationTi>
            <AnimationC>
                <div className='ds text-center mt-20 border-b-2 pb-12 mx-auto'>
                    <h3 className='text-3xl'>¡Descubre lo que tenemos preparado para ti!</h3>
                </div>
            </AnimationC>

            <div className='estrategies-container flex flex-wrap mx-auto justify-between mt-12'>
                <div className='estrategies p-3 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={desarrollo.src} alt="" width={160} height={160}></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-2xl text-violet-500 text-center'>Desarrollo Web y Aplicaciones</h2>
                            <p className='text-lg mt-5'>
                            Desarrollo Web y Aplicaciones
                            Creamos sitios web y aplicaciones optimizadas para potenciar tu presencia digital, asegurando un diseño atractivo, funcionalidad intuitiva y una experiencia de usuario excepcional.
                            </p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/desarrollo">Conoce más</Link>
                            </div>
                        </div>
                    </AnimationC>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={consultoria.src} alt="" width={160} height={160}></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-2xl text-violet-500 text-center'>Consultoría en Marketing Digital</h2>
                            <p className='text-lg mt-5'>
                            Te guiamos en la planificación y ejecución de estrategias digitales efectivas para hacer crecer tu negocio y maximizar tus resultados en el entorno digital.
                            </p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/marketing">Conoce más</Link>
                            </div>
                        </div>
                    </AnimationC>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={branding.src} alt="" width={160} height={160}></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-2xl text-violet-500 text-center'>Branding e Identidad Visual</h2>
                            <p className='text-lg mt-5'>
                            Construimos marcas memorables con diseños únicos, logotipos impactantes y una identidad visual coherente que refleje la esencia de tu negocio.
                            </p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/branding">Conoce más</Link>
                            </div>
                        </div>
                    </AnimationC>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={estrategias.src} alt="" width={160} height={160}></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-2xl text-violet-500 text-center'>Estrategias de Publicidad Digital</h2>
                            <p className='text-lg mt-5'>
                            Diseñamos y optimizamos campañas en plataformas como Meta Ads, Google Ads y TikTok Ads, asegurando mayor alcance, tráfico y conversión para tu negocio.
                            </p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/publicidad">Conoce más</Link>
                            </div>
                        </div>
                    </AnimationC>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={creacion.src} alt="" width={160} height={160}></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-2xl text-violet-500 text-center'>Creación de Contenido para Redes Sociales</h2>
                            <p className='text-lg mt-5'>
                            Generamos contenido atractivo y estratégico en distintos formatos (reels, imágenes, animaciones, textos persuasivos) para potenciar el engagement y posicionamiento de tu marca.
                            </p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/redes">Conoce más</Link>
                            </div>
                        </div>
                    </AnimationC>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={mercadoPng.src} alt="" width={160} height={160}></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-2xl text-violet-500 text-center'>Investigación de Mercado y Análisis de Tendencias</h2>
                            <p className='text-lg mt-5'>Analizamos el mercado, tu competencia y las tendencias del sector para brindarte información clave que te ayude a tomar decisiones estratégicas y diferenciarte.</p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/mercado">Conoce más</Link>
                            </div>
                        </div>
                    </AnimationC>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={seo.src} alt="" width={160} height={160}></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-3xl text-violet-500 text-center'>SEO y Posicionamiento Web</h2>
                            <p className='text-lg mt-5'>Optimizamos tu sitio web para que aparezca en los primeros resultados de búsqueda en Google. Implementamos estrategias de SEO técnico, de contenido y de enlaces para aumentar tu visibilidad y atraer más clientes.</p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/seo">Conoce más</Link>
                            </div>
                        </div>
                    </AnimationC>
                </div>
            </div>
            <div className='relative '>
                <img className='publicidad-online w-full mt-24' src={fondoAPng.src} alt=""></img>
                <div className='publicidad-online-text absolute text-center'>
                    <p className='text-4xl'>¿Quieres atraer más clientes a tu website? Lemon, Agencia de publicidad online</p>
                    <button className='text-xl border rounded-3xl mt-14 pt-3 pb-3 pl-6 pr-6' onClick={() => openFormFunc()}>Contactanos</button>
                </div>
            </div>
            <div className='text-center mt-28 mx-auto' style={{ width: '80vw' }}>
                <h2 className='text-3xl text-violet-500'>DONDE LA ESTRATEGIA SE CONVIERTE EN RESULTADOS</h2>
                <br></br>
                <p className='text-xl'>Nos especializamos en generar resultados tangibles y sostenibles a corto, mediano y largo plazo. En Go Market, fusionamos creatividad e innovación con un enfoque basado en datos, optimizando al máximo tus campañas de marketing. Adaptamos las últimas tendencias globales, desarrollando una metodología única que potencia tu marca y asegura el retorno de tu inversión.</p>
                <br></br>
                <p className='text-xl'>Somos un equipo comprometido con tu crecimiento. Nos enfocamos en los objetivos de tu negocio y en las expectativas de tus clientes, convirtiéndonos en tu Aliado Estratégico para impulsar tu presencia digital y alcanzar resultados escalables y medibles.</p>
            </div>
            <div className='hacer-crecer-negocio mt-28 pt-20 pb-20'>
                <div className='text-center'>
                    <h1 className='text-4xl'>¿Cómo Go Market puede hacer crecer tu negocio?</h1>
                </div>
                <div className='hacer-crecer-negocio-div-child flex justify-center pr-28 pl-28 mb-16 mt-28 sm:pl-6 sm:pr-6'>
                    <AnimationA className='negocio-img mx-6 mt-6'>
                        <h3 className='text-3xl text-center'>Generadores de Leads o Ventas</h3><br></br>
                        <p>En Go Market, potenciamos tu marca con estrategias digitales que generan visibilidad, clientes y ventas. Desde branding y redes sociales hasta publicidad y desarrollo web, diseñamos soluciones personalizadas para que tu negocio destaque y crezca en el mundo digital.</p><br></br>
                        <b>📌 Estrategia + Creatividad + Resultados = Tu éxito</b>
                    </AnimationA>
                    <AnimationC className='negocio-img mx-6'>
                        <img src={leadGeneration.src} alt=""></img>
                    </AnimationC>
                </div>
                <div className='hacer-crecer-negocio-div-child flex justify-center pr-28 pl-28 mb-16 mt-28 sm:pl-6 sm:pr-6' id="invert">
                    <AnimationC className='negocio-img mx-6'>
                        <img src={seoImageJpeg.src} alt=""></img>
                    </AnimationC>
                    <AnimationA className='negocio-img mx-6 mt-6'>
                        <h3 className='text-3xl text-center'>¿Tu sitio web no aparece en Google? 🔍</h3><br></br>
                        <p className='ml-6 sm:ml-0'>Si tu página no está siendo encontrada por tus clientes potenciales, probablemente esté perdiendo oportunidades valiosas. En Go Market, optimizamos tu sitio con estrategias SEO efectivas para mejorar su visibilidad en Google y atraer más tráfico orgánico.</p><br></br>
                        <b className='ml-6 sm:ml-0'>📌 Haz que tu sitio sea visible y llegue a más personas.</b>
                    </AnimationA>
                </div>
                <div className='hacer-crecer-negocio-div-child flex justify-center pr-28 pl-28 mb-16 mt-28 sm:pl-6 sm:pr-6'>
                    <AnimationA className='negocio-img mx-6 mt-6'>
                        <h3 className='text-3xl text-center'>¿Tu sitio web no genera ingresos? 💻</h3><br></br>
                        <p>Si tu sitio web no está convirtiendo visitantes en clientes, es hora de hacer un cambio. En Go Market, transformamos tu página en una herramienta de ventas efectiva con diseño atractivo, optimización SEO y estrategias de conversión. ¡Haz que tu sitio trabaje para ti!</p><br></br>
                        <b>📌 Convierte tu tráfico en ingresos reales.</b>
                    </AnimationA>
                    <AnimationC className='negocio-img mx-6'>
                        <img src={websiteJpg.src} alt=""></img>
                    </AnimationC>
                </div>
            </div>
            <div className='relative'>
                <img className='publicidad-online w-full mt-24' src={fondoAPng.src} alt=""></img>
                <div className='publicidad-online-text absolute text-center'>
                    <h2 className='text-4xl'>Agencia de Marketing digital que te lleva al siguiente nivel</h2>
                    <p className='text-3xl mt-10'>¿Trabajamos juntos?</p>
                    <button className='text-xl border rounded-3xl mt-14 pt-3 pb-3 pl-6 pr-6' onClick={() => openFormFunc()}>Contactanos</button>
                </div>
            </div>
            <div className='mx-auto mt-12 mb-12' style={{ width: '80%' }}>
                <h3 className='text-3xl text-center mb-6'>Puedes encontrarnos en:</h3>
                <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=F%C3%A9lix%20Bogado%20326+(Go%20Market)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
        </>
    )
}

export default Home