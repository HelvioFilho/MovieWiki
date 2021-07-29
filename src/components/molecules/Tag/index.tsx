import React, { ReactNode } from 'react';
import { CustomText } from '../../atoms';

import { TagContainer } from './styles';

export interface TagProps {
  children: ReactNode;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

export function Tag({ children, ...props }: TagProps) {
  return (
    <TagContainer {...props}>
      <CustomText
        fontFamily="bold"
        size={14}>
        {children}
      </CustomText>
    </TagContainer>
  );
}