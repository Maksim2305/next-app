import cn from 'classnames';
import styles from './Rating.module.scss';
import StarIcon from './star.svg';
import { useEffect, useState } from 'react';
import { RatingProps } from '@/types/components';

export const Rating = ({ rating, isEditable = true, setRating, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constructRating = (currentRating: number) => {
    const updateRating = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          className={cn(styles.star, { [styles.filled]: i < currentRating })}
          onMouseEnter={() => constructRating(i + 1)}
          onMouseLeave={() => constructRating(rating)}
          onClick={() => {
            if (isEditable && setRating) {
              setRating(i + 1);
            }
          }}
        >
          <StarIcon />
        </span>
      );
    });
    setRatingArray(updateRating);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
