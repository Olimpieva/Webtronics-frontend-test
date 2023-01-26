import { ReactNode } from 'react';
import css from './MainLayout.module.scss';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return <div className={css.layout}>{children}</div>;
};

export default MainLayout;
