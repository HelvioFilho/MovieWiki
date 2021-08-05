import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { defaultTheme } from '../../../global/styles/theme';
import { PlayButtonProps } from '../../../utils/interface';
import { CustomText } from '../../atoms';

import { ButtonContainer } from './styles';

export function PlayButton({ onPress }: PlayButtonProps) {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons
        name="play"
        size={defaultTheme.metrics.px(18)}
        color={defaultTheme.colors.black}
      />
      <CustomText mt={2} ml={4} fontFamily="bold" size={14} color="black">
        Assistir
      </CustomText>
    </ButtonContainer>
  );
}