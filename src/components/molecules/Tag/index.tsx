import React from 'react';
import { MetricsProps } from '../../../utils/interface';
import { CustomText } from '../../atoms';

import { TagContainer } from './styles';

export function Tag({ children, ...props }: MetricsProps) {
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