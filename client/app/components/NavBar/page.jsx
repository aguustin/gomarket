"use client"
import { useContext, useEffect, useState } from "react"
import '@/app/components/NavBar/navbar.css'
import UserContext from "@/app/context/sessionContext"
import Link from "next/link"
import goBPng from '@/app/assets/goB.png'
import userPng from '@/app/assets/user.png'
import googlePng from '@/app/assets/google.png'
import applePng from '@/app/assets/apple.png'
import closePng from '@/app/assets/close.png'
import { redirect } from 'next/navigation'
import morePng from '@/app/assets/more.png'
import arrowPng from '@/app/assets/arrow.png'
import goCPng from '@/app/assets/goC.png'

const NavBar = () => {
    
    const {session, setSession, setCreateBlogForm} = useContext(UserContext)
    const [openSessionForm, setOpenSessionForm] = useState(false)
    const [signForm, setSignInForm] = useState(false)
    const [burguerButton, setBurguerButton] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    const [responsiveNav, setResponsiveNav] = useState(false)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


    const openForms = () => {
      setOpenSessionForm(true)
      setSignInForm(false)
    }

    const closeForms = () => {
      setSignInForm(false)
      setOpenSessionForm(false)
    }

    const logout = () => {
        setSession(null)
        localStorage.clear()
        redirect('/Home')
    }

    

    const SessionForm = () => {
        return(
            <>
            <div className="background-opacity fixed z-20"></div>
           {signForm 
           ?
           <form className="forms fixed bg-slate-900 pt-6 pb-6 pl-8 pr-8 rounded-lg z-30" style={{width:'500px'}}>
            <button onClick={() => closeForms()} className="absolute right-6 top-5"><img src={closePng.src} alt=""></img></button>
           <div>
               <h3 className="text-2xl mb-4">Ingresa tu cuenta</h3>
           </div>
           <div className="form-group w-full mt-5 mb-5">
               <label className="text-white">Tu mail</label>
               <input type="text" placeholder="ejemplo@gmail.com" className="bg-slate-700 p-2 rounded-lg w-full"></input>
           </div>
           <div className="form-group w-full mt-5 mb-5">
               <label className="text-white">Contraseña</label>
               <input type="text" placeholder="ejemplo@gmail.com" className="bg-slate-700 p-2 rounded-lg w-full"></input>
           </div>
           <button type="submit" className="loginb bg-blue-800 text-white pt-3 pb-3 w-full rounded-lg mb-6 mt-6">Entrar</button>
           <div className="flex items-center">
             <p className="text-slate-400">Ya tienes cuenta?</p>
             <button className="text-sky-500 mt-3" onClick={() => openForms()}>Registrate aqui</button>
           </div>
         </form>
           :
           <form className="forms fixed bg-slate-900 pt-6 pb-6 pl-8 pr-8 rounded-lg z-30" style={{width:'auto'}}>
            <button onClick={() => closeForms()} className="absolute right-6 top-5"><img src={closePng.src} alt=""></img></button>
              <div>
                  <h3 className="text-2xl mb-4">Crea tu cuenta</h3>
              </div>
              <div className="flex items-center justify-between mb-4">
                  <button style={{border: '1px solid gray'}} className="flex items-center mx-3 text-slate-400 p-3 rounded-lg text-sm"><img src={googlePng.src} alt="" className="mr-3"></img>Registrate con Google</button>
                  <button style={{border: '1px solid gray'}} className="flex items-center mx-3 text-slate-400 p-3 rounded-lg text-sm"><img src={applePng.src} alt="" className="mr-3"></img>Registrate con Apple</button>
              </div>
              <div className="text-center">
                <p className=" text-slate-400">or</p>
              </div>
              <div className="form-group w-full mt-5 mb-5">
                  <label className="text-white">Tu mail</label>
                  <input type="text" placeholder="ejemplo@gmail.com" className="bg-slate-700 p-2 rounded-lg w-full"></input>
              </div>
              <div className="form-group w-full mt-5 mb-5">
                  <label className="text-white">Pais</label>
                  <input type="text" placeholder="ejemplo@gmail.com" className="bg-slate-700 p-2 rounded-lg w-full"></input>
              </div>
              <div className="form-group w-full mt-5 mb-5">
                  <label className="text-white">Contraseña</label>
                  <input type="text" placeholder="ejemplo@gmail.com" className="bg-slate-700 p-2 rounded-lg w-full"></input>
              </div>
              <div className="form-group w-full mt-5 mb-5">
                  <label className="text-white">Repetir Contraseña</label>
                  <input type="text" placeholder="ejemplo@gmail.com" className="bg-slate-700 p-2 rounded-lg w-full"></input>
              </div>
              <button type="submit" className="bg-blue-800 text-white pt-3 pb-3 w-full rounded-lg mb-6 mt-6">Crear cuenta</button>
              <div className="flex items-center">
                <p className="text-slate-400">Ya tienes cuenta?</p>
                <button className="text-sky-500 mt-3" onClick={() => setSignInForm(true)}>Ingresar aqui</button>
              </div>
            </form>
           } 
          </>
        )
    }

    return(
        <>
        {/*openSessionForm && <SessionForm/>*/}
        <nav className="nav relative flex items-center justify-center bg-slate-800 pl-10 pr-10">
        {width >= 850 ? <img className="absolute left-10" src={goBPng.src} width={120} height={120} alt=""/> : <img className="absolute left-0" src={goCPng.src} width={180} height={180} alt=""/>}
            {width >= 850 
            ?
            <div className="absolute right-9 flex justify-between">
                <Link href="/Home" className="nav-link pt-4 pb-4 pl-5 pr-5 text-xl"><p>Inicio</p></Link>
                <Link href="/Blogs" className="nav-link pt-4 pb-4 pl-5 pr-5 text-xl">Blogs</Link>
                <div className="cc relative pt-4 pb-4 pl-5 pr-5">
                    <Link href="/Servicios" className="pb-4 text-xl">Servicios</Link>
                    <div className="list-services absolute bg-slate-800 text-center right-10">
                    <Link href="/Servicios/desarrollo" className="text-xl"><div className="services-link flex items-center justify-center"><p>Desarrollo Web</p></div></Link>
                    <Link href="/Servicios/marketing" className="text-xl"><div className="services-link flex items-center justify-center"><p>Marketing digital</p></div></Link>
                    <Link href="/Servicios/branding" className="text-xl"><div className="services-link flex items-center justify-center"><p>Branding e Identidad Visual</p></div></Link>
                    <Link href="/Servicios/publicidad" className="text-xl"><div className="services-link flex items-center justify-center"><p>Publicidad Digital</p></div></Link>
                    <Link href="/Servicios/redes" className="text-xl"><div className="services-link flex items-center justify-center"><p>Manejo de Redes</p></div></Link>
                    <Link href="/Servicios/mercado" className="text-xl"><div className="services-link flex items-center justify-center"><p>Investigaion de mercado</p></div></Link>
                    <Link href="/Servicios/seo" className="text-xl"><div className="services-link flex items-center justify-center"><p>Posicionamiento Web (SEO)</p></div></Link>
                    </div>
                </div>
                <Link href="/Nosotros" className="nav-link pt-4 pb-4 pl-5 pr-5 text-xl">Nosotros</Link>
                {session?.length < 0 && <button><img src={userPng.src} alt="" width={50} height={50}></img></button>}
            </div>
            :
            <>
            <button className="ccb absolute right-8" onClick={() => setResponsiveNav(true)}><img src={morePng.src} alt=""></img></button>
                { responsiveNav &&
            <div className="absolute right-0 bg-slate-800 z-90 p-6 top-0">
                    <>
                <div>
                    <button onClick={() => setResponsiveNav(false)}>
                        <img src={arrowPng.src} alt=""></img>
                    </button>
                </div>
                    <Link href="/Home" className="nav-link pt-4 pb-4 pl-5 pr-5 text-xl"><p>Inicio</p></Link>
                    <Link href="/Blogs" className="nav-link pt-4 pb-4 pl-5 pr-5 text-xl">Blogs</Link>
                    <Link href="/Servicios" className="services-link text-xl flex items-center justify-center">Servicios</Link>
                    <Link href="/Servicios/desarrollo" className="text-xl"><div className="services-link flex items-center justify-center"><p>Desarrollo Web</p></div></Link>
                    <Link href="/Servicios/marketing" className="text-xl"><div className="services-link flex items-center justify-center"><p>Marketing digital</p></div></Link>
                    <Link href="/Servicios/branding" className="text-xl"><div className="services-link flex items-center justify-center"><p>Branding e Identidad Visual</p></div></Link>
                    <Link href="/Servicios/publicidad" className="text-xl"><div className="services-link flex items-center justify-center"><p>Publicidad Digital</p></div></Link>
                    <Link href="/Servicios/redes" className="text-xl"><div className="services-link flex items-center justify-center"><p>Manejo de Redes</p></div></Link>
                    <Link href="/Servicios/mercado" className="text-xl"><div className="services-link flex items-center justify-center"><p>Investigaion de mercado</p></div></Link>
                    <Link href="/Servicios/seo" className="text-xl"><div className="services-link flex items-center justify-center"><p>Posicionamiento Web (SEO)</p></div></Link>
                    <Link href="/Nosotros" className="nav-link pt-4 pb-4 pl-5 pr-5 text-xl">Nosotros</Link>
                </>
            </div>
                }
            </>
            }
           {session?.length > 0 && 
            <div className="absolute right-5">
                <ul className="flex">
                    <li className="pr-10"><button onClick={() => setCreateBlogForm(true)}>Crear blog</button></li>
                    <li className="pr-10"><button onClick={() => logout()}>Salir</button></li>
                </ul>
            </div>}
            {/*session.length <= 0 ? 
            <button className="absolute right-20" onClick={() => openForms()}>
                <p>Iniciar sesion</p>
            </button>
            :
            <button>
                <img src={userPng.src}></img>
            </button>
            */}
        </nav>
        </>
    )
}

export default NavBar;