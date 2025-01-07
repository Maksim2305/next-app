'use client';

import { firstMenuLevel } from '@/components/Menu/Menu';

interface PageProps {
  params: {
    type: string;
  };
}

export default function TypePage({ params }: PageProps) {
  const { type } = params;

  const category = firstMenuLevel.find((item) => item.route === type);

  if (!category) {
    return <div>Категория не найдена</div>;
  }

  return <div></div>;
}
