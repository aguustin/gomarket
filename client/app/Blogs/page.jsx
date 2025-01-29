import './blogs.css'
import prueba from '@/app/assets/prueba.jpg';
import search from '@/app/assets/search.png';

const Blogs = () => {
    return(
        <>
            <div className='relative flex items-center justify-right' style={{height:'80px'}}>
                <form className='absolute right-10'>
                    <input type="text" placeholder='Buscar evento' className='bg-slate-900 p-2'></input>
                </form>
            </div>
            <div className='flex flex-wrap pt-20 pb-20 justify-between' style={{paddingLeft: '10vw', paddingRight: '10vw'}}>
            <div style={{width:'720px'}}>
                    <img src={prueba.src} alt="" className='blog-img' style={{width: '100%', height:'450px'}}></img>
                    <div className='mt-2 mb-2'>
                        <h3 className='text-3xl'>Las mejores herramientas de editor de fotos IA para 2025</h3>
                        <p>Posted on Enero 28, 2025 by Adri Miquelina</p>
                    </div>
                    <div>
                        <p className='text-xl text-gray-600'>
                        En 2025, las herramientas de editor de fotos IA se han convertido en un componente esencial para cualquier empresa que busque optimizar su contenido visual. Estas soluciones, impulsadas por inteligencia artificial, no solo mejoran la calidad de las imágenes, sino que también automatizan tareas que antes requerían mucho tiempo y recursos. Si deseas destacar frente…
                        </p>
                    </div>
                    <div className='relative' style={{height:'150px'}}>
                        <button className='leer-mas absolute right-0 top-3 bg-violet-900 text-white rounded-lg pt-3 pb-3 pl-7 pr-7'>Leer más</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs