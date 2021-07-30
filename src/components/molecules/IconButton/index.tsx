import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { CustomText } from '../../atoms';
import { defaultTheme } from '../../../global/styles/theme';

import { ButtonContainer } from './styles';
import { IconProps } from '../../../utils/interface';

export function IconButton({ name, label, onPress }: IconProps) {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons
        name={name}
        size={defaultTheme.metrics.px(24)}
        color={defaultTheme.colors.white}
      />
      <CustomText fontFamily="semiBold" size={10} mt={6}>
        {label}
      </CustomText>
    </ButtonContainer>
  );
}