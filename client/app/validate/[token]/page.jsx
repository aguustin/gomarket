"use client";
//import Show from '@/app/components/Show';
import React, { useState, useEffect, useContext } from "react";
import warningPng from '@/app/assets/warning.png';
import UserContext from "@/app/context/sessionContext";

const ValidatePage = ({params}) => {

  const token = React.use(params).token;
  const [ticketInfo, setTicketInfo] = useState(null);
  const [error, setError] = useState(false);
  const {setChangeNav} = useContext(UserContext)
  
   useEffect(() => {
    setChangeNav(true)
      if (token) {
        fetch(`https://gomarket-1-backend.onrender.com/validate?token=${token}`)
          .then(res => res.json())
          .then(data => {
            if (data.message) {
              setError(true);
            } else {
              setTicketInfo(data);
            }
          })
          .catch(err => setError("Error al obtener el ticket"));
          
      }
    }, [token]);

  console.log(ticketInfo)
  if (error) 
  return (
      <div className="h-screen text-center mt-[110px] pt-10 pb-10 pr-3 pl-3">
        <img className="mx-auto" src={warningPng.src}></img>
        <p className="text-red-500 text-center mt-6 text-3xl">El ticket no existe o ya fue escaneado</p>
      </div>
  )
  if (!ticketInfo) return <p className="text-white text-center mt-10">Cargando ticket...</p>;

  return (
    <div>
          <div className='evento-desc mt-[110px] mb-[240px] flex justify-center'>
              <div className="mx-auto text-center h-full">
              <h1 className="text-white text-4xl underline">Mendoza Suena Festejo 9 años</h1>
              <img className='mx-auto' src="https://res.cloudinary.com/drmcrdf4r/image/upload/v1752537842/gomarket/mendoza_suena_pmrufi.jpg" alt="Mendoza Suena" width="350" />
              <p className='text-2xl mt-9'><b className="text-violet-500">Ticket a nombre de:</b>{ticketInfo?.nombreComplet} - Dni: {ticketInfo?.dni}</p>
              <p className='text-2xl mt-3'><b className="text-violet-500">Dirección:</b> Room bar cultural - Ah San Martín 1823 Alameda</p>
              <p className='text-2xl mt-3'><b className="text-violet-500">Fecha:</b> Viernes 8 de Agosto 21:30hs </p>
              </div>
          </div>
    </div>
  );
}

export default ValidatePage