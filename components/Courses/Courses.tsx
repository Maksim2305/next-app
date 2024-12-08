import { Course } from '@/types/course.interface';
import { PageRoot } from '@/types/page.interface';
import { FC, useState } from 'react';
import styles from './Courses.module.scss';
import { Rating } from '../ui/Rating/Rating';
import { Tag } from '../ui/Tag/Tag';
import { Button } from '../ui/Button/Button';
import { Review } from '../Review/Review';

interface CoursesProps {
  page: PageRoot;
  products: Course[];
}

export const Courses: FC<CoursesProps> = ({ page, products }): JSX.Element => {
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());

  const toggleReviews = (id: string) => {
    setExpandedReviews((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <>
      {products.map((product) => (
        <div key={product._id} className={styles['cart-product']}>
          <div className={styles['cart-product__top']}>
            <img className={styles['cart-product__top-image']} src={product?.image} alt="course-logo" />
            <div className={styles['cart-product__top-title']}>
              <div className={styles['cart-product__top-title-text']}>{product.title}</div>
              {product?.categories &&
                product.categories.map((category) => (
                  <span className={styles['cart-product__top-title-category']}>
                    <Tag color="default" key={category}>
                      {category}
                    </Tag>
                  </span>
                ))}
            </div>
            <div className={styles['cart-product__top-price']}>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ marginRight: '10px' }}>{product.price}</span>
                {'  '}
                <Tag color="green" size="small">
                  - {product.oldPrice - product.price}
                </Tag>
              </div>
              <span>цена</span>
            </div>
            <div className={styles['cart-product__top-credit']}>
              {product.credit}
              <span>в кредит</span>
            </div>
            {product?.initialRating && (
              <div className={styles['cart-product__top-rating']}>
                <Rating rating={product.initialRating} />
                {!!product?.reviews?.length && <span>{product?.reviews?.length} отзывов</span>}
              </div>
            )}
          </div>
          <div className={styles['cart-product__middle']}>
            <div className={styles['cart-product__middle-description']}>{product.description}</div>
            {product?.characteristics?.length && (
              <div className={styles['cart-product__middle-characteristics']}>
                {product.characteristics.map(({ name, value }) => (
                  <div className={styles['cart-product__middle-characteristics-item']}>
                    <div>{name}</div> <div>{value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles['cart-product__footer']}>
            <div className={styles['cart-product__footer-actions']}>
              <Button appearance="primary">Узнать подробенее</Button>
              <Button
                appearance="ghost"
                arrow={expandedReviews.has(product._id) ? 'down' : 'left'}
                onClick={() => toggleReviews(product._id)}
              >
                Читать отзывы
              </Button>
            </div>
          </div>

          {expandedReviews.has(product._id) && (
            <div>
              {product?.reviews.map((review) => (
                <Review key={review.text} review={review} />
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};
