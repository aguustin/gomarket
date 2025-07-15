"use client";
//import Show from '@/app/components/Show';
import React, { useState, useEffect } from "react";
import logoJPG from "@/app/assets/logo.jpg"

const ValidatePage = ({params}) => {

   const token = params.token;
  const [ticketInfo, setTicketInfo] = useState(null);
  const [error, setError] = useState(null);

    useEffect(() => {
      if (token) {
        fetch(`https://gomarket-1-backend.onrender.com/validate?token=${token}`)
          .then(res => res.json())
          .then(data => {
            if (data.message) {
              setError(data.message);
            } else {
              setTicketInfo(data);
            }
          })
          .catch(err => setError("Error al obtener el ticket"));
      }
    }, [token]);

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!ticketInfo) return <p className="text-white text-center mt-10">Cargando ticket...</p>;

  return (
    <div>
          <div className='mt-[110px] mb-[240px] flex justify-center'>
              <div className="mx-auto text-center h-full">
              <h1 className="text-white text-4xl">Mendoza Suena Festejo 9 años</h1>
              <img className='mx-auto' src={logoJPG.src} alt="evento" width="300" />
              <p className='mt-3 text-2xl'>Dario algo</p>
              <p className='text-2xl mt-3'>Ticket: Entrada a Mendoza Suena Festejo 9 años</p>
              <p className='text-2xl mt-3'>Dirección: Room bar cultural - Ah San Martín 1823 Alameda</p>
              <p className='text-2xl mt-3'>Fecha: Viernes 8 de Agosto 21:30hs </p>
              </div>
          </div>
    </div>
  );
}

export default ValidatePage