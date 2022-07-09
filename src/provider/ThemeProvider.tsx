import React, { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../model/ChangeCssRootVariables';
import { lStorage } from '../model/Storage';

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(lStorage.getItem('theme') || Theme.LIGHT);

  changeCssRootVariables(theme);

  const changeTheme = (theme: Theme) => {
    lStorage.setItem('theme', theme);
    setTheme(theme);
    changeCssRootVariables(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme, // theme: theme
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};
