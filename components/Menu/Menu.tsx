import cn from 'classnames';
import styles from './Menu.module.css';
import { useContext } from 'react';
import { useMenuContext } from '@/context/app.context';
import { TopLevelCategory } from '@/enums/components';

const firstMenuLevel = [
  { route: 'courses', name: 'Курсы', id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', id: TopLevelCategory.Servises },
  { route: 'books', name: 'Книги', id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', id: TopLevelCategory.Products },
];

const buildFirstLevelMenu = () => {
  return (
    <>
      {firstMenuLevel.map((m) => {
        <div key={m.route}>
          <a href="">
            {m.name}
            <div className={cn(styles.firstLevel)}>
              <span>{m.name}</span>
            </div>
          </a>
          {buildSecondLevelMenu()}
        </div>;
      })}
    </>
  );
};

const buildSecondLevelMenu = () => {
  return <div></div>;
};

const buildThirdLevelMenu = () => {
  return <></>;
};

export const Menu = async () => {
  const { menu, firstCategory, setMenu } = useMenuContext();

  return <div>{buildFirstLevelMenu()}</div>;
};
