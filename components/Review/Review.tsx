import { FC } from 'react';

interface ReviewProps {
  review: {
    author: string;
    title: string;
    rating: number;
    text: string;
    date: Date;
  };
}

export const Review: FC<ReviewProps> = ({ review }) => {
  return <>{JSON.stringify(review)}</>;
};
