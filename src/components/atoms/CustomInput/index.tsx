import React from 'react';
import { TextInputProps } from 'react-native';

import { InputContainer, SearchInput } from './styles';
import { defaultTheme } from '../../../global/styles/theme';
import { TextInput } from 'react-native-gesture-handler';

export function CustomInput({ ...rest }: TextInputProps) {
  return (
    <InputContainer>
      {/* <TextInput
        placeholderTextColor={defaultTheme.colors.input}
        style={{
          fontFamily: defaultTheme.fonts.semiBold,
          fontSize: defaultTheme.metrics.px(14),
          height: "100%",
          width: "100%",
          color: defaultTheme.colors.white,
        }}
        {...rest}
      /> */}
      <SearchInput
        placeholderTextColor={defaultTheme.colors.input}
        {...rest}
      />
    </InputContainer>
  );
}