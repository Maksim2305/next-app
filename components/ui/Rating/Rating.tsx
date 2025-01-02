import cn from 'classnames';
import styles from './Rating.module.scss';
import StarIcon from './star.svg';
import React, { ForwardedRef, useEffect, useState } from 'react';
import { RatingProps } from '@/types/components';

export const Rating = React.forwardRef(
  ({ rating, isEditable = true, setRating, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [currentRating, setCurrentRating] = useState<number>(rating);
    const [hoveredRating, setHoveredRating] = useState<number | null>(null);

    const handleRatingClick = (index: number) => {
      if (isEditable && setRating) {
        setRating(index + 1);
        setCurrentRating(index + 1);
      }
    };

    const handleMouseEnter = (index: number) => {
      if (isEditable) {
        setHoveredRating(index + 1);
      }
    };

    const handleMouseLeave = () => {
      if (isEditable) {
        setHoveredRating(null);
      }
    };

    const ratingArray = new Array(5).fill(null).map((_, index) => (
      <span
        key={index}
        className={cn(styles.star, {
          [styles.filled]: index < (hoveredRating || currentRating),
        })}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleRatingClick(index)}
      >
        <StarIcon />
      </span>
    ));

    useEffect(() => {
      setCurrentRating(rating);
    }, [rating]);

    return (
      <div ref={ref} {...props}>
        {ratingArray}
      </div>
    );
  }
);
