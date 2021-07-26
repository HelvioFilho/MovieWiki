import React, { ReactNode } from 'react';
import { Text } from './styles';

interface Props {
  children: ReactNode;
  color?: string;
}

export function CustomText({ children, color }: Props) {
  return (
    <Text color={color}>
      {children}
    </Text>
  );
}