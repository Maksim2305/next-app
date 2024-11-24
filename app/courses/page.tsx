'use client';
import { usePathname } from 'next/navigation';

export default function CategoryPage() {
  const pathname = usePathname();
  const category = pathname.split('/')[1];

  return (
    <div>
      <h1>Категория: {category}</h1>
      <p>Это страница для категории: {category}</p>
    </div>
  );
}
