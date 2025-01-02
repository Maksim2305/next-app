'use client';

import cn from 'classnames';
import styles from './ReviewsForm.module.scss';
import { FC, PropsWithChildren } from 'react';
import UserIcon from './icons/user-icon.svg';
import { Rating } from '../ui/Rating/Rating';
import { Button } from '../ui/Button/Button';
import { Controller, useForm } from 'react-hook-form';
import Input from '../ui/Input/Input';
import Textarea from '../ui/Textarea/Textarea';

interface IReview {
  author: string;
  rating: number;
  text: string;
  date: Date;
  id?: string;
  title: string;
}

interface ReviewsFormProps {
  reviews: IReview[];
}

interface IForm {
  name: string;
  title: string;
  text: string;
  rating: number;
}

export const ReviewsForm: FC<PropsWithChildren<ReviewsFormProps>> = ({ reviews, ...props }) => {
  const { handleSubmit, control, register } = useForm<IForm>();
  const submitForm = (data: IForm) => {
    console.log('Submit form', data);
  };

  return (
    <>
      {reviews.map((review: IReview) => {
        return (
          <div key={review.id} className={cn(styles.review)}>
            <div className={styles['review__header']}>
              <div className={styles['review__header-left']}>
                <span>
                  {' '}
                  <UserIcon />
                </span>
                <b>{review.author}</b> <span>{review.title}</span>
              </div>
              <div className={styles['review__header-right']}>
                <span className={styles.date}>{review.date.toDateString()}</span>
                <span className={styles.rating}>
                  <Rating rating={review.rating} isEditable={false} />
                </span>
              </div>
            </div>
            <div className={styles['review__text']}>
              <p>{review.text}</p>
            </div>
            <form className={cn(styles.form)} onSubmit={handleSubmit(submitForm)}>
              <div className={cn(styles['form__inputs'])}>
                <Input placeholder="Имя" {...register('name')} />
                <Input placeholder="Заголовок отзыва" {...register('title')} />
                <div className={cn(styles['form__inputs-rating'])}>
                  {' '}
                  <span>Оценка: </span>
                  <Controller
                    control={control}
                    name="rating"
                    render={({ field }) => {
                      return (
                        <Rating rating={field.value} isEditable={true} setRating={field.onChange} ref={field.ref} />
                      );
                    }}
                  ></Controller>
                </div>
              </div>
              <div className={cn(styles['form__text'])}>
                <Textarea placeholder="Текст отзыва" {...register('text')} />
              </div>
              <div className={cn(styles['form__actions'])}>
                <Button type="submit" appearance={'primary'}>
                  Отправить
                </Button>{' '}
                <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
              </div>
            </form>
          </div>
        );
      })}
    </>
  );
};
