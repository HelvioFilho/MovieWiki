import React from 'react';
import { defaultTheme } from '../../../global/styles/theme';
import { CustomText, Logo } from '../../atoms';
import { Tag, IconButton } from '../../molecules';
import { HeaderContainer, HeaderGradient, HeaderImageBackground, ButtonsView } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderImageBackground resizeMode='stretch' source={{ uri: 'https://i.pinimg.com/originals/22/4f/9d/224f9d64ad01d1bf5937a46ffe99eaec.jpg' }}>
        <HeaderGradient colors={[defaultTheme.colors.dark, 'transparent', defaultTheme.colors.dark]}>
          <Logo size="small" />
          <Tag mt={200}>Filme</Tag>
          <CustomText fontFamily="bold" size={28} mt={8}>Episódio I</CustomText>
          <CustomText size={18}>A Ameaça Fantasma</CustomText>
          <ButtonsView>
            <IconButton label="Favoritos" name="add-circle-outline" onPress={() => { }} />
            <IconButton label="Saiba mais" name="information-circle-outline" onPress={() => { }} />

          </ButtonsView>
        </HeaderGradient>

      </HeaderImageBackground>
    </HeaderContainer>
  );
}