'use client';

import { TopLevelCategory } from '@/enums/components';
import { MenuItem } from '@/types/api';
import { createContext, useContext, useState, ReactNode } from 'react';

export interface MenuContextProps {
  menu: MenuItem[];
  firstCategory: number;
  setMenu?: (newMenu: MenuItem[]) => void;
  setFirstCategory?: (newFirstCategory: number) => void;
}

const MenuContext = createContext<MenuContextProps>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const MenuProvider = ({
  menu,
  firstCategory,
  children,
}: MenuContextProps & { children: ReactNode }): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const [firstCategoryState, setFirstCategoryState] = useState<number>(firstCategory);

  const setMenu = (newMenu: MenuItem[]) => setMenuState(newMenu);
  const setFirstCategory = (newFirstCategory: number) => setFirstCategoryState(newFirstCategory);

  return (
    <MenuContext.Provider value={{ menu: menuState, firstCategory: firstCategoryState, setMenu, setFirstCategory }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext должен использоваться внутри MenuProvider');
  }
  return context;
};
