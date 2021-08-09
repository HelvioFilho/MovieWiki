import React from 'react';
import { TextInputProps } from 'react-native';

import { InputContainer, SearchInput } from './styles';
import { defaultTheme } from '../../../global/styles/theme';

export function CustomInput({ ...rest }: TextInputProps) {
  return (
    <InputContainer>
      <SearchInput
        placeholderTextColor={defaultTheme.colors.input}
        {...rest}
      />
    </InputContainer>
  );
}