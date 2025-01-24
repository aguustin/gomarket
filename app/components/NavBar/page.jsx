'use client'
import { useContext, useState } from "react"
import '@/app/components/NavBar/navbar.css'
import UserContext from "@/app/context/sessionContext"
import Link from "next/link"
import twitterPng from '@/app/assets/twitter.png'
import userPng from '@/app/assets/user.png'

const NavBar = () => {
    
    const [openSessionForm, setOpenSessionForm] = useState(false)
    const {session} = useContext(UserContext)

    const SessionForm = () => {
        return(
            <>
            <div className="background-opacity fixed z-20"></div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img className="mx-auto h-10 w-auto" src={twitterPng.src} alt="Your Company"/>
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
          
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6 bg-black-800" action="#" method="POST">
                <div>
                  <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                  <div className="mt-2">
                    <input type="email" name="email" id="email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                  </div>
                </div>
          
                <div>
                  <div className="flex items-center justify-between">
                    <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input type="password" name="password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                  </div>
                </div>
          
                <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrarse</button>
                </div>

                <div className="flex">
                    <button><img src={twitterPng.src} alt=""></img></button>
                    <button><img src={twitterPng.src} alt=""></img></button>
                    <button><img src={twitterPng.src} alt=""></img></button>
                </div>
              </form>
            </div>
          </div>
          </>
        )
    }

    return(
        <>
        {openSessionForm && <SessionForm/>}
        <nav className="nav flex items-center justify-between bg-slate-900 pl-10 pr-10">
            <img src={twitterPng.src} width={50} height={50} alt=""/>
            <div className="flex justify-between" style={{width:'60%'}}>
                <Link href="/Home" className="pt-4 pb-4 pl-5 pr-5 text-xl">Inicio</Link>
                <button className="pt-4 pb-4 pl-5 pr-5 text-xl">Servicios</button>
                <button className="pt-4 pb-4 pl-5 pr-5 text-xl">Nosotros</button>
                <button className="pt-4 pb-4 pl-5 pr-5 text-xl">Contacto</button>
                <Link href="/Blog" className="pt-4 pb-4 pl-5 pr-5 text-xl">Blog</Link>
            </div>
            {session.length <= 0 ? 
            <button onClick={() => setOpenSessionForm(!openSessionForm)}>
                <p>Iniciar sesion</p>
            </button>
            :
            <button>
                <img src={userPng.src}></img>
            </button>
            }
        </nav>
        </>
    )
}

export default NavBar;