import React, { ReactNode, useEffect, useRef, useState } from 'react';

import s from './Dialog.module.scss';

import CloseIcon from '../../assets/icons/close.svg';
import Fade from '../Animations/Fade';

type Props = {
  onDismiss: () => void;
  children?: ReactNode[];
};

//https://stackblitz.com/github/remix-run/react-router/tree/main/examples/modal?file=src%2FApp.tsx
//https://codesandbox.io/s/16kt1?file=/src/App.js
export const Dialog = ({ children, onDismiss: onDismissProp }: Props) => {
  const [showDialog, setShowDialog] = useState(false);
  const dialog = useRef(null);
  const timeout = 200;

  useEffect(() => {
    setShowDialog(true);
    dialog.current.focus();
  }, []);

  const onDismiss = () => {
    setShowDialog(false);
    setTimeout(onDismissProp, timeout);
  };

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
      <Fade inProp={showDialog} timeout={timeout}>
        <div className={s.dialog}>
          <button className={s.close_btn} onClick={onDismiss}>
            <CloseIcon className={s.close_icon} />
          </button>

          {children}
        </div>
      </Fade>
    </div>
  );
};
