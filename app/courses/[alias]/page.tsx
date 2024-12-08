'use client';

import { getCourses, getPageByAlias } from '@/api/courses';
import { PageRoot } from '@/types/page.interface';
import styles from './page.module.scss';
import StarIcon from './icons/star.svg';
import CheckIcon from './icons/check.svg';
import cn from 'classnames';
import { Tag } from '@/components/ui/Tag/Tag';
import { Course } from '@/types/course.interface';
import { TopPage } from '@/components/TopPage/TopPage';

export default async function CoursePage({ params }: { params: { alias: string } }) {
  const page: PageRoot = await getPageByAlias(params.alias);
  const courses: Course[] = await getCourses(page.alias);

  courses.forEach((course) => {
    course.reviews.push({
      author: 'Василий Раганов',
      title: 'Что вас ждет в этом курсе?',
      text: 'Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!',
      rating: 4,
      date: new Date('2022-05-10'),
    });
  });
  return (
    <div>
      <TopPage courses={courses} page={page} />
      {page?.hh && (
        <div className={styles['page-vacancies']}>
          <div className={styles['page-vacancies__title']}>
            <div style={{ marginRight: '20px' }}>Вакансии - {page.alias}</div>
            <Tag size="small" color="red" href="https://hh.ru">
              <span>hh.ru</span>
            </Tag>
          </div>
          <div className={styles['page-vacancies__row']}>
            <div className={cn(styles['page-vacancies__count'])}>
              <div className={styles['page-vacancies__count-title']}>Всего вакансий</div>
              <div className={styles['page-vacancies__count-num']}>{page.hh.count}</div>
            </div>
            <div className={cn(styles['page-vacancies__salary'])}>
              <div>
                <div className={styles['page-vacancies__salary-title']}>Начинающий</div>
                <div className={styles['page-vacancies__salary-amount']}>{page.hh.juniorSalary}</div>
                {Array.from({ length: 3 }, (_, i) => (
                  <StarIcon
                    key={i}
                    className={cn(styles['page-vacancies__rating-star'], {
                      [styles['page-vacancies__rating-star-active']]: i === 0,
                    })}
                  />
                ))}
              </div>
              <div>
                <div className={styles['page-vacancies__salary-title']}>Средний</div>
                <div className={styles['page-vacancies__salary-amount']}>{page.hh.middleSalary}</div>
                {Array.from({ length: 3 }, (_, i) => (
                  <StarIcon
                    key={i}
                    className={cn(styles['page-vacancies__rating-star'], {
                      [styles['page-vacancies__rating-star-active']]: i !== 2,
                    })}
                  />
                ))}
              </div>
              <div>
                <div className={styles['page-vacancies__salary-title']}>Профессионал</div>
                <div className={styles['page-vacancies__salary-amount']}>{page.hh.seniorSalary}</div>
                {Array.from({ length: 3 }, (_, i) => (
                  <StarIcon
                    key={i}
                    className={cn(styles['page-vacancies__rating-star'], {
                      [styles['page-vacancies__rating-star-active']]: true,
                    })}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {!!page?.advantages?.length && (
        <div className={styles.advantages}>
          <div className={styles['advantages__title']}>Преимущества</div>
          {page.advantages.map((a) => (
            <div key={a._id} className={styles['advantages__list-item']}>
              <div className={styles['advantages__list-item-icon-dash']}>
                {a.title && (
                  <div>
                    <CheckIcon />
                  </div>
                )}{' '}
                <div className={styles.dash}></div>{' '}
              </div>
              <div>
                <div className={styles['advantages__list-title']}>{a.title}</div>
                <div className={styles['advantages__list-description']}>{a.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {page?.tags && (
        <div className={styles.tags}>
          <div className={styles['tags__title']}>Получаемые навыки</div>
          <div className={styles['tags__tags-list']}>
            {page.tags.map((tag, i) => (
              <div className={styles['tags__item']}>
                <Tag key={i} size="small" color="primary" href="#">
                  <span>{tag}</span>
                </Tag>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
