"use client"
import React, { useContext, useEffect, useLayoutEffect, useState } from "react"
import { buyTicketsRequest, getEventToBuyRequest } from "@/app/api/eventApi"
import mendozaSuenaJPEG from "@/app/assets/mendoza_suena.jpeg"
import UserContext from "../context/sessionContext"

const Evento = () => {
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    const {setChangeNav} = useContext(UserContext)
    const [width, setWidth] = useState(null);
    const [message, setMessage] = useState(false)

    useLayoutEffect(() => {
        setChangeNav(true)
         const mediaQuery = window.matchMedia("(min-width: 850px)");
         const handleResize = () => {
           setChangeNav(mediaQuery.matches ? 520 : 519);
         };
               
         handleResize(); // valor inicial
         mediaQuery.addEventListener("change", handleResize);
               
         return () => mediaQuery.removeEventListener("change", handleResize);
     }, [])

    const restQuantity = (e) => {
        e.preventDefault()
        if(quantity <= 0){
            setQuantity(0)
        }else{
            setQuantity(quantity - 1)
            setTotal(total - 1)
        }
    };

    const addQuantity = (e) => {
        e.preventDefault()
        setQuantity(quantity + 1)
        setTotal(total + 1)
    }
    
    const buyTickets = async (e) => {
            try {
                e.preventDefault();
                const nombreCompleto = e.target.elements.nombreCompleto.value;
                const dni = e.target.elements.dni.value;
                const mail = e.target.elements.mail.value;
                const repetirmail = e.target.elements.repetirMail.value;

                if(mail !== repetirmail){
                    setMessage(true)
                }
                else{

                }
                const data = await buyTicketsRequest(nombreCompleto, dni, quantity, mail, 1, total);

                if (!data?.init_point) {
                    console.error("init_point no recibido");
                    return;
                }else{

                    window.location.href = data.init_point;
                }

            } catch (error) {
                console.error("Error en handlePayment:", error);
            }
    }


    return(
        <div className="buy-ticket mx-auto mt-10 mb-10 text-center max-w-[500px] mt-[110px]">
            <div>
                <h2 className="text-3xl mb-3">Mendoza Suena Festejo 9 años</h2>
                <p className="mb-1 text-xl">Direccion del evento: Room bar cultural - Ah San Martín 1823 Alameda</p>
                <p className="text-xl mb-5">Viernes 8 de Agosto 21:30hs</p>
                <img src={mendozaSuenaJPEG.src}></img>
            </div>
            <form className="buy-ticket-form" onSubmit={(e) => buyTickets(e)}>
                <div className="mt-4">
                    <label>Nombre completo:</label><br></br>
                    <input className="mt-2" type="text" name="nombreCompleto" placeholder="Ej: John Doe" required></input>
                </div>
                <div className="mt-4">
                    <label>DNI:</label><br></br>
                    <input className="mt-2" type="number" name="dni" placeholder="..." required></input>
                </div>
                <div className="mt-4">
                    <label>Email:</label><br></br>
                    <input className="mt-2" type="email" name="mail" placeholder="example@gmail.com" required></input>
                </div>
                <div className="mt-4">
                    <label>Repetir email:</label><br></br>
                    <input className="mt-2" type="email" name="repetirMail" placeholder="example@gmail.com" required></input>
                </div>
                   {width >= 520 
                   ?
                   <div>
                        <div className="flex justify-center mt-6">
                            <label className="text-xl">Ticket: </label>
                            <div className="flex items-center">
                                <button className="cursor-pointer bg-violet-900 pt-1 pb-1 pl-6 pr-6 rounded-lg ml-3 mr-3" onClick={(e) => restQuantity(e)}>-</button>
                                <p className="text-xl">{quantity}</p>
                                <button className="cursor-pointer bg-violet-900 pt-1 pb-1 pl-6 pr-6 rounded-lg ml-3 mr-3" onClick={(e) => addQuantity(e)}>+</button>
                                <p>Precio c/u: $7.500</p>
                            </div>
                        </div>
                    </div>
                   :
                   <div>
                        <div className="flex justify-center mt-6">
                            <label className="text-xl">Ticket: </label>
                            <div className="flex items-center">
                                <button className="cursor-pointer bg-violet-900 pt-1 pb-1 pl-6 pr-6 rounded-lg ml-3 mr-3" onClick={(e) => restQuantity(e)}>-</button>
                                <p className="text-xl">{quantity}</p>
                                <button className="cursor-pointer bg-violet-900 pt-1 pb-1 pl-6 pr-6 rounded-lg ml-3 mr-3" onClick={(e) => addQuantity(e)}>+</button>
                            </div>
                        </div>
                             <p className="mt-5 text-xl">Precio c/u: $7.500</p>
                    </div>
                   } 
                <p className="text-2xl mt-6">Total:${total}</p>
                {message && <p className="text-red-600">Los emails no coinciden</p>}
                <button className="bg-violet-900 p-4 mt-6 w-[280px] rounded-lg text-2xl cursor-pointer" type="submit">Comprar</button>
            </form>
       
        </div>
    )
}

export default Evento