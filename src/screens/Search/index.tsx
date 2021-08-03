import React from 'react';
import { CustomText } from '../../components';
import { ScreenScrollContainer } from '../../components/atoms/Container/styles';

import { SearchContainer } from './styles';

export function Search() {
  return (
    <ScreenScrollContainer>
      <CustomText>Search</CustomText>
    </ScreenScrollContainer>
  );
}