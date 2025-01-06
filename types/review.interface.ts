export interface IReview {
  author: string;
  rating: number;
  description: string;
  date: Date;
  id?: string;
  title: string;
}

export interface ReviewsFormProps {
  reviews: IReview[];
}

export interface IReviewForm {
  name: string;
  title: string;
  description: string;
  rating: number;
}
