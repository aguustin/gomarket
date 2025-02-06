"use client"
import '@/app/Home/home.css'
import prueba from '@/app/assets/prueba.jpg';
import seopng from '@/app/assets/seo.png';
import goAPng from '@/app/assets/goA.png'
import socialMediaPng from '@/app/assets/socialMedia.png'
import fondoAPng from '@/app/assets/fondoA.png'
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { AnimationA, AnimationB, AnimationC, AnimationTi } from '../animations/AnimationA/page';

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
                <img src={prueba.src}></img>
            </div>
            <AnimationTi>
                <div className='text-center pt-20 pb-20'>
                    <img className='mx-auto mb-12' src={goAPng.src} width={170} height={170} alt="" />
                    <h2 className='text-3xl text-violet-500 font-medium'>TRANSFORMA TU PRESENCIA DIGITAL CON NOSOTROS</h2>
                    <br></br>
                    <p className='text-2xl'>Creamos estrategias únicas y a medida para potenciar tu inversión y llevar tu negocio al siguiente nivel en el mundo digital.</p>
                    <button className='bg-violet-900 pt-4 pb-4 pl-7 pr-7 rounded-lg mt-7'><p className='text-lg'>Saber mas</p></button>
                </div>
            </AnimationTi>
            <AnimationC>
                <div className='ds text-center mt-20 border-b-2 pb-12 mx-auto'>
                    <h3 className='text-3xl'>¡Descubre lo que tenemos preparado para ti!</h3>
                </div>
            </AnimationC>

            <div className='estrategies-container flex flex-wrap mx-auto justify-between mt-12'>
                <div className='estrategies p-4 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={seopng.src} alt=""></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-3xl text-violet-500'>Posicionamiento órganico</h2>
                            <p className='text-lg mt-5'>
                                El SEO es fundamental para tu marca, ya que impulsa tu visibilidad en línea y facilita que más personas te encuentren. Esto no solo aumenta tu credibilidad, sino que también te posiciona como un líder en tu industria. Además, te permite conectar de manera directa con tu público objetivo, generando más ventas sin depender tanto de la publicidad paga.
                            </p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/programacion">Conoce más</Link>
                            </div>
                        </div>
                    </AnimationC>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={seopng.src} alt=""></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-3xl text-violet-500'>Posicionamiento órganico</h2>
                            <p className='text-lg mt-5'>
                                El SEO es fundamental para tu marca, ya que impulsa tu visibilidad en línea y facilita que más personas te encuentren. Esto no solo aumenta tu credibilidad, sino que también te posiciona como un líder en tu industria. Además, te permite conectar de manera directa con tu público objetivo, generando más ventas sin depender tanto de la publicidad paga.
                            </p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/MercadoTendencias">Conoce más</Link>
                            </div>
                        </div>
                    </AnimationC>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={seopng.src} alt=""></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-3xl text-violet-500'>Posicionamiento órganico</h2>
                            <p className='text-lg mt-5'>
                                El SEO es fundamental para tu marca, ya que impulsa tu visibilidad en línea y facilita que más personas te encuentren. Esto no solo aumenta tu credibilidad, sino que también te posiciona como un líder en tu industria. Además, te permite conectar de manera directa con tu público objetivo, generando más ventas sin depender tanto de la publicidad paga.
                            </p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/MarketingDigital">Conoce más</Link>
                            </div>
                        </div>
                    </AnimationC>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={seopng.src} alt=""></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-3xl text-violet-500'>Posicionamiento órganico</h2>
                            <p className='text-lg mt-5'>
                                El SEO es fundamental para tu marca, ya que impulsa tu visibilidad en línea y facilita que más personas te encuentren. Esto no solo aumenta tu credibilidad, sino que también te posiciona como un líder en tu industria. Además, te permite conectar de manera directa con tu público objetivo, generando más ventas sin depender tanto de la publicidad paga.
                            </p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/Branding">Conoce más</Link>
                            </div>
                        </div>
                    </AnimationC>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={seopng.src} alt=""></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-3xl text-violet-500'>Posicionamiento órganico</h2>
                            <p className='text-lg mt-5'>
                                El SEO es fundamental para tu marca, ya que impulsa tu visibilidad en línea y facilita que más personas te encuentren. Esto no solo aumenta tu credibilidad, sino que también te posiciona como un líder en tu industria. Además, te permite conectar de manera directa con tu público objetivo, generando más ventas sin depender tanto de la publicidad paga.
                            </p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/PublicidadDigital">Conoce más</Link>
                            </div>
                        </div>
                    </AnimationC>
                </div>
                <div className='estrategies p-4 mt-10'>
                    <AnimationB>
                        <div>
                            <img className='mx-auto' src={seopng.src} alt=""></img>
                        </div>
                    </AnimationB>
                    <AnimationC>
                        <div className='mt-6'>
                            <h2 className='text-3xl text-violet-500'>Posicionamiento órganico</h2>
                            <p className='text-lg mt-5'>El SEO es fundamental para tu marca, ya que impulsa tu visibilidad en línea y facilita que más personas te encuentren. Esto no solo aumenta tu credibilidad, sino que también te posiciona como un líder en tu industria. Además, te permite conectar de manera directa con tu público objetivo, generando más ventas sin depender tanto de la publicidad paga.</p>
                            <div className='text-center mt-12'>
                                <Link className='conoce-mas mx-auto rounded-2xl bg-red-700 text-white pt-3 pb-3 pl-6 pr-6' href="/Servicios/RedesSociales">Conoce más</Link>
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
                    <h1 className='text-4xl'>¿Cómo nuestra agencia de Publicidad Digital hacer crecer tu negocio?</h1>
                </div>
                <div className='flex justify-center pr-28 pl-28 mb-16 mt-28'>
                    <AnimationA className='negocio-img mx-6 mt-6'>
                        <h3 className='text-3xl text-center'>Generadores de Leads o Ventas</h3><br></br>
                        <p>Una agencia de marketing digital se diferencia de una agencia de marketing tradicional en los canales que utiliza. Al habitar exclusivamente en el entorno digital podemos contar con datos exactos de desempeño de las acciones digitales que realizamos. Los indicadores clave de rendimiento KPI's nos permite ajustar nuestras acciones para asegurar un retorno de inversión elevado. Nos enfocamos en aumento de conversiones (ventas o leads) y en somos potenciadores de tu marca en el entorno digital.</p>
                    </AnimationA>
                    <AnimationC className='negocio-img mx-6'>
                        <img src={fondoAPng.src} alt=""></img>
                    </AnimationC>
                </div>
                <div className='flex justify-center pr-28 pl-28 mb-16 mt-28'>
                    <AnimationC className='negocio-img mx-6'>
                        <img src={fondoAPng.src} alt=""></img>
                    </AnimationC>
                    <AnimationA className='negocio-img mx-6 mt-6'>
                        <h3 className='text-3xl text-center'>Generadores de Leads o Ventas</h3><br></br>
                        <p className='ml-6'>Una agencia de marketing digital se diferencia de una agencia de marketing tradicional en los canales que utiliza. Al habitar exclusivamente en el entorno digital podemos contar con datos exactos de desempeño de las acciones digitales que realizamos. Los indicadores clave de rendimiento KPI's nos permite ajustar nuestras acciones para asegurar un retorno de inversión elevado. Nos enfocamos en aumento de conversiones (ventas o leads) y en somos potenciadores de tu marca en el entorno digital.</p>
                    </AnimationA>
                </div>
                <div className='flex justify-center pr-28 pl-28 mb-16 mt-28'>
                    <AnimationA className='negocio-img mx-6 mt-6'>
                        <h3 className='text-3xl text-center'>Generadores de Leads o Ventas</h3><br></br>
                        <p>Una agencia de marketing digital se diferencia de una agencia de marketing tradicional en los canales que utiliza. Al habitar exclusivamente en el entorno digital podemos contar con datos exactos de desempeño de las acciones digitales que realizamos. Los indicadores clave de rendimiento KPI's nos permite ajustar nuestras acciones para asegurar un retorno de inversión elevado. Nos enfocamos en aumento de conversiones (ventas o leads) y en somos potenciadores de tu marca en el entorno digital.</p>
                    </AnimationA>
                    <AnimationC className='negocio-img mx-6'>
                        <img src={fondoAPng.src} alt=""></img>
                    </AnimationC>
                </div>
            </div>
            <div className='relative'>
                <img className='publicidad-online w-full mt-24' src={fondoAPng.src} alt=""></img>
                <div className='publicidad-online-text absolute text-center'>
                    <h2 className='text-5xl'>Agencia de Marketing digital que te lleva al siguiente nivel</h2>
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