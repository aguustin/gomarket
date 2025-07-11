"use client"
import React, { useEffect, useState } from "react"
import { buyTicketsRequest, getEventToBuyRequest } from "@/app/api/eventApi"
import logoJPG from "@/app/assets/logo.jpg"

const Evento = () => {
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)

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
                const mail = e.target.elements.mail.value;
                const data = await buyTicketsRequest(quantity, mail, 1, total);

                if (!data?.init_point) {
                    console.error("init_point no recibido");
                    return;
                }

                window.location.href = data.init_point;
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
                <img src={logoJPG.src}></img>
            </div>
            <form onSubmit={(e) => buyTickets(e)}>
                <div className="mt-4">
                    <label>Nombre completo:</label><br></br>
                    <input className="mt-2" type="text" name="nombreCompleto" placeholder="Ej: John Doe"></input>
                </div>
                <div className="mt-4">
                    <label>Mail:</label><br></br>
                    <input className="mt-2" type="email" name="mail" placeholder="example@gmail.com"></input>
                </div>
                <div className="mt-4">
                    <label>Celular:</label><br></br>
                    <input className="mt-2" type="number" name="celular" placeholder="..."></input>
                </div>
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
                <p className="text-2xl mt-6">Total:${total}</p>
                <button className="bg-violet-900 p-4 mt-6 w-[280px] rounded-lg text-2xl cursor-pointer" type="submit">Comprar</button>
            </form>
       
        </div>
    )
}

export default Evento