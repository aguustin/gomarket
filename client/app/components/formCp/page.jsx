import UserContext from "@/app/context/sessionContext";
import { useContext } from "react"
import '@/app/Home/home.css'
import closePng from '@/app/assets/close.png'
const FormCp = () => {
    const {animate, openFormFunc } = useContext(UserContext)
    
    return(
<>
                <div className={`back-form ${animate ? 'show' : ''} bg-slate-800`} onClick={() => openFormFunc()}></div>
                    <div className={`form-container ${animate ? 'show' : ''} bg-slate-800`}>
                        <button onClick={() => openFormFunc()}><img src={closePng.src} alt=""></img></button>
                        <form className='p-4'>
                            <h2 className='text-center text-xl'>Rellena a continuación nuestro formulario para ponerte en contacto. Recibiremos esta información y nos comunicaremos contigo lo más rápido posible (es una promesa)</h2>
                            <div className='mt-4 mb-6'>
                                <div className='flex items-center justify-between max-[760px]:block'>
                                    <input className='bg-slate-900 m-4 w-full max-[760px]:ml-0' type="text" id="name" name="name" placeholder='Nombre' required />
                                    <input className='bg-slate-900 m-4 w-full max-[760px]:ml-0' type="email" id="email" name="email" placeholder='Apellido' required />
                                </div>
                                <div className=' flex items-center justify-between max-[760px]:block'>
                                    <input className='bg-slate-900 m-4 w-full max-[760px]:ml-0' type="text" id="name" name="name" placeholder='Email' required />
                                    <input className='bg-slate-900 m-4 w-full max-[760px]:ml-0' type="email" id="email" name="email" placeholder='Movil o whatsapp' required />
                                </div>
                                <div className=' flex items-center justify-between max-[760px]:block'>
                                    <input className='bg-slate-900 m-4 w-full max-[760px]:ml-0' type="text" id="name" name="name" placeholder='Cargo (no obligatorio)' />
                                    <input className='bg-slate-900 m-4 w-full max-[760px]:ml-0' type="email" id="email" name="email" placeholder='Empresa (no obligatorio)' />
                                </div>
                                <div className=' flex items-center justify-between max-[760px]:block'>
                                    <input className='bg-slate-900 m-4 w-full max-[760px]:ml-0' type="text" id="name" name="name" placeholder='País' required />
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
                                <div className='flex justify-between mt-1 max-[630px]:block'>
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
    )
}
    export default FormCp