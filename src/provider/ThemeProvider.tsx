import React, { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../model/ChangeCssRootVariables';

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const changeTheme = (theme: Theme) => {
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
