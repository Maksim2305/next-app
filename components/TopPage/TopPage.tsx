'use client';

import { Course } from '@/types/course.interface';
import { Courses } from '../Courses/Courses';
import { PageRoot } from '@/types/page.interface';
import styles from './TopPage.module.scss';
import RatingIcon from '../../app/courses/[alias]/icons/sort.svg';
import cn from 'classnames';
import { PropsWithChildren, useState } from 'react';

export const TopPage = ({
  courses,
  page,
  ...props
}: PropsWithChildren<{ courses: Course[]; page: PageRoot }>): JSX.Element => {
  const [sortType, setSortType] = useState<'rating' | 'price'>('rating');

  const sortedCourses = [...courses].sort((a, b) => {
    if (sortType === 'rating') {
      return b.initialRating - a.initialRating;
    } else if (sortType === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <>
      <div className={styles['page-header']} {...props}>
        <div className={styles['page-header__info']}>
          <h1 className={styles['page-header__title']}>{page.title}</h1>
          <div className={styles['page-header__course-count']}>{courses?.length}</div>
        </div>
        {!!courses?.length && (
          <div className={styles['page-header__actions']}>
            <div
              className={cn(styles['page-header__actions-sort-rating'], {
                [styles['page-header__actions-sort-rating-active']]: sortType === 'rating',
              })}
              onClick={() => setSortType('rating')}
            >
              {sortType === 'rating' && <RatingIcon />}
              <span>По рейтингу</span>
            </div>
            <div
              className={cn(styles['page-header__actions-sort-price'], {
                [styles['page-header__actions-sort-price-active']]: sortType === 'price',
              })}
              onClick={() => setSortType('price')}
            >
              {sortType === 'price' && <RatingIcon />}
              <span>По цене</span>
            </div>
          </div>
        )}
      </div>

      <div className={styles['producs-list']}>{<Courses page={page} products={sortedCourses} />}</div>
    </>
  );
};
