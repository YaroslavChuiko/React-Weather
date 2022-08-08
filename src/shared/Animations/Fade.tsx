import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

import s from './Fade.module.scss';

type Props = {
  inProp: boolean;
  timeout: number;
  children: ReactNode | ReactNode[];
};

const Fade = ({ inProp, timeout, children }: Props) => {
  return (
    <CSSTransition
      classNames={{
        enter: s.enter,
        enterActive: s.enterActive,
        exit: s.exit,
        exitActive: s.exitActive,
      }}
      in={inProp}
      timeout={timeout}
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default Fade;
