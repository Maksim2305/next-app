'use client';
import { usePathname } from 'next/navigation';

export default function CategoryPage() {
  const pathname = usePathname();
  const category = pathname.split('/')[1];

  return <div></div>;
}
