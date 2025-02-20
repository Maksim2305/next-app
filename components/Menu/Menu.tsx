'use client';

import cn from 'classnames';
import styles from './Menu.module.scss';
import { useMenuContext } from '@/context/app.context';
import { TopLevelCategory } from '@/enums/components';
import { FirstLevelMenuItem } from '@/types/components';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import ProductsIcon from './icons/products.svg';
import BooksIcon from './icons/books.svg';
import { MenuItem, PageItem } from '@/types/api';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export const firstMenuLevel: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', id: TopLevelCategory.Courses, icon: <CoursesIcon /> },
  { route: 'services', name: 'Сервисы', id: TopLevelCategory.Servises, icon: <ServicesIcon /> },
  { route: 'products', name: 'Продукты', id: TopLevelCategory.Products, icon: <ProductsIcon /> },
  { route: 'books', name: 'Книги', id: TopLevelCategory.Books, icon: <BooksIcon /> },
];

export const Menu = () => {
  const { menu, setMenu, firstCategory, setFirstCategory } = useMenuContext();
  const pathname = usePathname();

  const variants = {
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.02,
      },
      marginBottom: 20,
    },
    hidden: {
      marginBottom: 0,
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 'auto',
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const openSecondLevelMenu = (secondCategory: string) => {
    if (!menu) return;

    setMenu &&
      setMenu(
        menu.map((m: MenuItem) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const openFirstLevelMenu = (firstCategoryId: number) => {
    setFirstCategory && setFirstCategory(firstCategoryId);
  };

  const buildFirstLevelMenu = () => {
    return (
      <>
        {firstMenuLevel.map((m) => (
          <div className={styles.firstBlock} key={m.route}>
            <Link href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory,
                })}
                onClick={() => openFirstLevelMenu(m.id)}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === firstCategory && buildSecondLevelMenu(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevelMenu = (mainMenu: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu?.map((m) => {
          if (m.pages.map((p) => p.alias).includes(pathname.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel} onClick={() => openSecondLevelMenu(m._id.secondCategory)}>
                {m._id.secondCategory}
              </div>
              <motion.div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockActive]: m.isOpened,
                })}
                layout
                variants={variants}
                initial={m.isOpened ? 'visible' : 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
              >
                {buildThirdLevelMenu(m.pages, mainMenu.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <motion.div variants={variantsChildren} key={page.category}>
        <Link
          href={`/${route}/${page.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: page.alias.includes(pathname.split('/')[2]),
          })}
        >
          {page.category}
        </Link>
      </motion.div>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevelMenu()}</div>;
};
