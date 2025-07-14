'use client';
import Show from '../../Show/page';
import { useSearchParams } from 'next/navigation';

export default function ValidatePage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  return (
    <div>
      <Show token={token} />
    </div>
  );
}