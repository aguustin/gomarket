'use client';
import { useSearchParams } from 'next/navigation';
import Show from '@/components/Show';

export default function ValidatePage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  return (
    <div>
      <Show token={token} />
    </div>
  );
}