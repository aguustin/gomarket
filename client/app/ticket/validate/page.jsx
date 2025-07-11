'use client';
import { useSearchParams } from 'next/navigation';
import Show from '@/components/Show'; // ajusta la ruta si lo tienes en otra carpeta

export default function ValidatePage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  return (
    <div>
      <Show token={token} />
    </div>
  );
}