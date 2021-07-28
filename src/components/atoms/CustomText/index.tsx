import React, { ReactNode } from 'react';
import { Text } from './styles';
import { colors } from '../../../global/styles/colors';
import { fonts } from '../../../global/styles/fonts';

export interface TextProps {
  children?: ReactNode;
  color?: keyof typeof colors;
  fontFamily?: keyof typeof fonts;
  size?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

export function CustomText({ children, ...props }: TextProps) {
  return (
    <Text {...props}>
      {children}
    </Text>
  );
}