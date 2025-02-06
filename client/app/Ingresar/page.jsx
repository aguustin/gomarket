'use client'
import { useContext, useState } from "react"
import '@/app/components/NavBar/navbar.css'
import UserContext from "@/app/context/sessionContext"
import Link from "next/link"
import goBPng from '@/app/assets/goB.png'
import userPng from '@/app/assets/user.png'
import googlePng from '@/app/assets/google.png'
import applePng from '@/app/assets/apple.png'
import closePng from '@/app/assets/close.png'

const Ingresar = () => {
  const [openSessionForm, setOpenSessionForm] = useState(false)
    const [signForm, setSignInForm] = useState(false)
    const {session} = useContext(UserContext)


    const openForms = () => {
      setOpenSessionForm(true)
      setSignInForm(false)
    }

    const closeForms = () => {
      setSignInForm(false)
      setOpenSessionForm(false)
    }

  return(
            <>
            
            {signForm 
            ?
            <form className="forms relative bg-slate-800 pt-6 pb-6 pl-8 pr-8 rounded-lg mx-auto mt-10 mb-10" style={{width:'500px'}}>
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
            <button type="submit" className="bg-blue-800 text-white pt-3 pb-3 w-full rounded-lg mb-6 mt-6" disabled={true}>Entrar</button>
            <div className="flex items-center">
              <p className="text-slate-400">Ya tienes cuenta?</p>
              <button className="text-sky-500" onClick={() => openForms()}>Registrate aqui *No habilitado</button>
            </div>
          </form>
            :
            <form className="forms relative bg-slate-800 pt-6 pb-6 pl-8 pr-8 rounded-lg mx-auto mt-10 mb-10" style={{width:'500px'}}>
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
                 <button className="text-sky-500" onClick={() => setSignInForm(true)}>Ingresar aqui</button>
               </div>
             </form>
            } 
           </>
         )
}

export default Ingresar