'use client';

import { Button } from '@/components/Button/Button';
import { Htag, P, Rating, Tag } from '@/components';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const [direction, setDirection] = useState<'right' | 'down'>('right');
  const [rating, setRating] = useState<number>(0);

  const changeArrow = () => {
    setDirection((prevDirection) => (prevDirection === 'right' ? 'down' : 'right'));
  };

  return (
    <>
      <Htag tag="h1">Курсы по Photoshop</Htag>
      <Button appearance="primary" arrow={direction} onClick={changeArrow}>
        click me
      </Button>
      <Tag color="primary">привет!</Tag>
      <Rating rating={rating} setRating={setRating}></Rating>
    </>
  );
}
