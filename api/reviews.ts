import { API } from '@/api';
import { IReviewForm } from '@/types/review.interface';

export const postReview = async (formData: IReviewForm, productId: string) => {
  const result = await fetch(API.review.createDemo, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...formData, productId }),
  });

  if (!result.ok) {
    const errorData = await result.json();
    throw new Error(errorData?.message || `Ошибка: ${result.status}`);
  }

  return result.json();
};
