import React, { ReactNode, useEffect, useRef } from 'react';

import s from './Dialog.module.scss';

import CloseIcon from '../../assets/icons/close.svg';

type Props = {
  onDismiss: () => void;
  children?: ReactNode[];
};

//https://stackblitz.com/github/remix-run/react-router/tree/main/examples/modal?file=src%2FApp.tsx
//https://codesandbox.io/s/16kt1?file=/src/App.js
export const Dialog = ({ children, onDismiss }: Props) => {
  const dialog = useRef(null);

  useEffect(() => {
    dialog.current.focus();
  }, []);

  const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();

    if (event.target === event.currentTarget) {
      onDismiss();
    }
  };

  const handleEscPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onDismiss();
    }
  };

  return (
    <div className={s.wrapper} ref={dialog} onClick={handleWrapperClick} tabIndex={0} onKeyDown={handleEscPress}>
      <div className={s.dialog}>
        <button className={s.close_btn} onClick={onDismiss}>
          <CloseIcon className={s.close_icon} />
        </button>

        {children}
      </div>
    </div>
  );
};
