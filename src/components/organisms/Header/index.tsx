import React from 'react';
import { defaultTheme } from '../../../global/styles/theme';
import { CustomText, Logo } from '../../atoms';

import { HeaderContainer, HeaderGradient, HeaderImageBackground } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderImageBackground source={{ uri: 'https://i.pinimg.com/originals/22/4f/9d/224f9d64ad01d1bf5937a46ffe99eaec.jpg' }}>
        <HeaderGradient colors={[defaultTheme.colors.dark, 'transparent', defaultTheme.colors.dark]}>
          <Logo size="small" />
          <CustomText fontFamily="bold" size={28} mt={214}>Episódio I</CustomText>
          <CustomText size={18}>A Ameaça Fantasma</CustomText>
        </HeaderGradient>

      </HeaderImageBackground>
    </HeaderContainer>
  );
}