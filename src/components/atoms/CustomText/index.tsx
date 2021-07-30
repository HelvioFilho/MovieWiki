import React from 'react';
import { Text } from './styles';
import { TextProps } from '../../../utils/interface';

export function CustomText({ children, ...props }: TextProps) {
  return (
    <Text {...props}>
      {children}
    </Text>
  );
}