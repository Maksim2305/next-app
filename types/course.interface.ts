export interface Course {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  image: string;
  characteristics: Characteristic[];
  price: number;
  oldPrice: number;
  credit: number;
  initialRating: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  html: string;
  blog: Blog;
  companyId: string;
  description: string;
  clicks: number;
  reviews: any[];
  reviewCount: number;
  reviewAvg: null;
}

export interface Blog {
  text: string;
  _id: string;
}

export interface Characteristic {
  name: string;
  value: string;
}
