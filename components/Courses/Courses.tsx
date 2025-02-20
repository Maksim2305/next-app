import { Course } from '@/types/course.interface';
import { PageRoot } from '@/types/page.interface';
import { FC, useRef, useState } from 'react';
import styles from './Courses.module.scss';
import { Rating } from '../ui/Rating/Rating';
import { Tag } from '../ui/Tag/Tag';
import { Button } from '../ui/Button/Button';
import { ReviewsForm } from '../ReviewsForm/ReviewsForm';
import { AnimatePresence, motion } from 'framer-motion';

interface CoursesProps {
  page: PageRoot;
  products: Course[];
}

export const Courses: FC<CoursesProps> = ({ page, products }): JSX.Element => {
  const [showReviews, setShowReviews] = useState<Record<string, boolean>>({});
  const reviewRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleReviews = (id: string) => {
    setShowReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollToReviews = (id: string): void => {
    setShowReviews((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      if (reviewRefs.current[id]) {
        reviewRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const reviewVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      overflow: 'hidden',
    },
    visible: {
      height: 'auto',
      opacity: 1,
      overflow: 'hidden',
    },
    exit: {
      height: 0,
      opacity: 0,
      overflow: 'hidden',
    },
  };

  return (
    <AnimatePresence>
      {products.map((product) => (
        <motion.div
          key={product._id}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className={styles['cart-product']}
        >
          <div className={styles['cart-product__info']}>
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
                  <span style={{ marginRight: '10px' }}>{product.price} ₽</span>
                  {'  '}
                  <Tag color="green" size="small">
                    - {product.oldPrice - product.price} ₽
                  </Tag>
                </div>
                <span>цена</span>
              </div>
              <div className={styles['cart-product__top-credit']}>
                {product.credit} ₽/мес
                <span>в кредит</span>
              </div>
              {product?.initialRating && (
                <div className={styles['cart-product__top-rating']}>
                  <Rating rating={product.initialRating} isEditable={false} />
                  {/* {!!product?.reviews?.length && <span>{product?.reviews?.length} отзывов</span>} */}
                  <span onClick={() => scrollToReviews(product._id)}>1 отзыв</span>
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
                  arrow={showReviews[product._id] ? 'down' : 'left'}
                  onClick={() => toggleReviews(product._id)}
                >
                  Читать отзывы
                </Button>
              </div>
            </div>
          </div>

          <motion.div
            layout
            variants={reviewVariants}
            initial="hidden"
            animate={showReviews[product._id] ? 'visible' : 'hidden'}
            exit="exit"
            transition={{ duration: 0.3 }}
            ref={(el: HTMLDivElement | null) => {
              reviewRefs.current[product._id] = el;
            }}
          >
            <ReviewsForm
              reviews={[
                {
                  description:
                    'Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!',
                  rating: 4,
                  author: 'Василий Раганов:',
                  date: new Date(),
                  id: product._id,
                  title: 'Что вас ждет в этом курсе?',
                },
              ]}
            />
          </motion.div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};
