'use client';
//import Show from '@/app/components/Show';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";
import logoJPG from "@/app/assets/logo.jpg"

export const dynamic = "force-dynamic"; 

export default function ValidatePage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');


    useEffect(() => {
      if (token) {
        fetch(`https://gomarket-1-backend.onrender.com/ticket/validate?token=${token}`)
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