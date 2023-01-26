import { ReactNode } from 'react';
import css from './BackgroundDecorationsLayout.module.scss';

type Props = {
  children: ReactNode;
};

const circleKeys = [...Array(10)].map((_, index) => index + 1);

const BackgroundDecorationsLayout = ({ children }: Props) => {
  const circles = circleKeys.map((key) => <div className={`${css.circle} ${css[`position-${key}`]}`} />);

  return (
    <div className={css.layout}>
      {children}
      {/* {circles} */}
    </div>
  );
};

export default BackgroundDecorationsLayout;
