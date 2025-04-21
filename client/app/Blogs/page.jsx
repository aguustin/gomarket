"use client"
import './blogs.css'
import deletePng from '@/app/assets/delete.png';
import { useContext } from 'react';
import UserContext from '../context/sessionContext';
import Link from 'next/link';

const Blogs = () => {

    const {blogs} = useContext(UserContext)
    
    return(
        <>
            <div className='relative flex items-center justify-right' style={{height:'80px'}}>
                <form className='absolute right-10'>
                    <input type="text" placeholder='Buscar blog' className='bg-slate-900 p-2'></input>
                </form>
            </div>
            <div className='ver-blogs flex flex-wrap pt-10 pb-10 pl-40 pr-40 justify-between'>
                {blogs.map((b) => 
                    <div key={b._id} className='relative mx-auto' style={{width:'720px'}} >
                            <button className='absolute right-10 top-5'><img src={deletePng.src} alt=""></img></button>
                            <img src={b.image} alt="" className='blog-img' style={{width: '100%', height:'450px'}}></img>
                            <div className='mt-2 mb-2'>
                                <h3 className='text-3xl underline underline-offset-3 text-violet-300'>{b.title}</h3>
                                <p className='mt-1'>{new Date(b.blogDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                            </div>
                            <div>
                                <p className='text-xl text-gray-300'>
                                    {b.description.substring(0,300)}...
                                </p>
                            </div>
                            <div className='relative' style={{height:'150px'}}>
                                <Link href={`Blogs/${b._id}`} className='leer-mas absolute right-0 top-3 bg-violet-900 text-white rounded-lg pt-3 pb-3 pl-7 pr-7'>Leer más</Link>
                                {/*<button className='leer-mas absolute right-0 top-3 bg-violet-900 text-white rounded-lg pt-3 pb-3 pl-7 pr-7'>Leer más</button>*/}
                            </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Blogs