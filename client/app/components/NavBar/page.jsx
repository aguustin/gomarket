"use client"
import { useContext, useState } from "react"
import '@/app/components/NavBar/navbar.css'
import UserContext from "@/app/context/sessionContext"
import Link from "next/link"
import goBPng from '@/app/assets/goB.png'
import userPng from '@/app/assets/user.png'
import googlePng from '@/app/assets/google.png'
import applePng from '@/app/assets/apple.png'
import closePng from '@/app/assets/close.png'
import { redirect } from 'next/navigation'

const NavBar = () => {
    
    const {session, setSession, setCreateBlogForm} = useContext(UserContext)
    const [openSessionForm, setOpenSessionForm] = useState(false)
    const [signForm, setSignInForm] = useState(false)

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
            <img className="absolute left-10" src={goBPng.src} width={120} height={120} alt=""/>
            <div className="flex justify-between" style={{width:'60%'}}>
                <Link href="/Home" className="pt-4 pb-4 pl-5 pr-5 text-xl">Inicio</Link>
                <Link href="/Blogs" className="pt-4 pb-4 pl-5 pr-5 text-xl">Blogs</Link>
                <Link href="/Servicios" className="pt-4 pb-4 pl-5 pr-5 text-xl">Servicios</Link>
                <Link href="/Nosotros" className="pt-4 pb-4 pl-5 pr-5 text-xl">Nosotros</Link>
                {session?.length < 0 && <button><img src={userPng.src} alt="" width={50} height={50}></img></button>}
            </div>
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