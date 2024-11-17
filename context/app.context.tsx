'use client';

import { TopLevelCategory } from '@/enums/components';
import { MenuItem } from '@/types/api';
import { createContext, useContext, useState, ReactNode } from 'react';

export interface MenuContextProps {
  menu: MenuItem[];
  setMenu?: (newMenu: MenuItem[]) => void;
  firstCategory: number;
}

const MenuContext = createContext<MenuContextProps>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const MenuProvider = ({
  menu,
  firstCategory,
  children,
}: MenuContextProps & { children: ReactNode }): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => setMenuState(newMenu);

  return <MenuContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext должен использоваться внутри MenuProvider');
  }
  return context;
};
