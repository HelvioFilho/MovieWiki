import React, { ReactNode } from 'react';
import { ContainerAll } from './styles';

export interface ContainerProps {
  direction?: string;
  align?: string;
  justify?: string;
  bg?: string;
  width?: number;
  height?: number;
}

interface Props extends ContainerProps {
  children: ReactNode;
}
export function Container({ children, ...props }: Props) {
  return (
    <ContainerAll
      {...props}
    >
      {children}
    </ContainerAll>
  );
}