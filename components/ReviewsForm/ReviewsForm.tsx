'use client';

import cn from 'classnames';
import styles from './ReviewsForm.module.scss';
import { FC, ForwardedRef, forwardRef, PropsWithChildren, useReducer, useState } from 'react';
import UserIcon from './icons/user-icon.svg';
import { Rating } from '../ui/Rating/Rating';
import { Button } from '../ui/Button/Button';
import { Controller, useForm } from 'react-hook-form';
import Input from '../ui/Input/Input';
import Textarea from '../ui/Textarea/Textarea';
import { IReview, IReviewForm, ReviewsFormProps } from '@/types/review.interface';
import { postReview } from '@/api/reviews';
import { formReducer, initialState } from './ReviewsFormReducer';

export const ReviewsForm: FC<PropsWithChildren<ReviewsFormProps>> = forwardRef(
  ({ reviews }, ref: ForwardedRef<HTMLDivElement>) => {
    const [formState, dispatch] = useReducer(formReducer, initialState);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
      handleSubmit,
      control,
      register,
      formState: { errors },
      reset,
    } = useForm<IReviewForm>();
    const submitForm = async (data: IReviewForm) => {
      setIsLoading(true);
      dispatch({ type: 'SET_ERROR', payload: '' });

      try {
        await postReview(data, reviews[0].id as string);
        dispatch({ type: 'SET_SUCCESS', payload: 'Ваш отзыв успешно отправлен!' });
        reset();
      } catch (error: any) {
        dispatch({ type: 'SET_ERROR', payload: 'Не удалось отправить отзыв. Попробуйте еще раз.' });
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div ref={ref}>
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
                <p>{review.description}</p>
              </div>
              <form className={cn(styles.form)} onSubmit={handleSubmit(submitForm)}>
                <div className={cn(styles['form__inputs'])}>
                  <Input
                    error={errors.name}
                    placeholder="Имя"
                    {...register('name', {
                      required: 'Имя обязательно',
                      minLength: { value: 2, message: 'Имя должно быть не менее 2-х символов' },
                      pattern: {
                        value: /^[A-Za-zА-��а-я]+$/,
                        message: 'Имя может содержать только буквы',
                      },
                    })}
                  />
                  <Input
                    error={errors.title}
                    placeholder="Заголовок отзыва"
                    {...register('title', {
                      required: 'Заголовок обязателен',
                    })}
                  />
                  <div className={cn(styles['form__inputs-rating'])}>
                    {' '}
                    <span>Оценка: </span>
                    <Controller
                      control={control}
                      rules={{ required: 'Укажите рейтинг' }}
                      name="rating"
                      render={({ field }) => {
                        return (
                          <Rating
                            rating={field.value}
                            error={errors.rating}
                            isEditable={true}
                            setRating={field.onChange}
                            ref={field.ref}
                          />
                        );
                      }}
                    ></Controller>
                  </div>
                </div>
                <div className={cn(styles['form__text'])}>
                  <Textarea
                    error={errors.description}
                    placeholder="Текст отзыва"
                    {...register('description', {
                      required: 'Текст обязателен',
                    })}
                  />
                </div>
                <div className={cn(styles['form__actions'])}>
                  <Button disabled={isLoading} type="submit" appearance={'primary'}>
                    Отправить
                  </Button>{' '}
                  <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
              </form>
            </div>
          );
        })}
        {formState.error && (
          <div className={cn(styles.notification, styles.error)}>
            {formState.error}{' '}
            <span className={styles.cross} onClick={() => dispatch({ type: 'RESET' })}>
              &#10006;
            </span>
          </div>
        )}
        {formState.success && (
          <div className={cn(styles.notification, styles.success)}>
            {formState.success}{' '}
            <span className={styles.cross} onClick={() => dispatch({ type: 'RESET' })}>
              &#10006;
            </span>
          </div>
        )}
      </div>
    );
  }
);
