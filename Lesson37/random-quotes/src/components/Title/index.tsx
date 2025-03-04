import './styles.css';
import { ReactNode } from 'react';

export const Title = ({ children }: {children: ReactNode}) => {
  return <h1 className='title'>{children}</h1>;
};
