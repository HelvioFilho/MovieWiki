import React from 'react';
import { defaultTheme } from '../../../global/styles/theme';
import { DataProps } from '../../../utils/interface';
import { CustomText, GoBack, Logo } from '../../atoms';
import { Tag, IconButton, PlayButton } from '../../molecules';
import { HeaderContainer, HeaderGradient, HeaderImageBackground, ButtonsView } from './styles';

export function Header({ data, onDetail }: DataProps) {
  return (
    <HeaderContainer>
      <HeaderImageBackground
        resizeMode='stretch'
        source={{ uri: data.image_url }}
      >
        <HeaderGradient colors={[defaultTheme.colors.dark, 'transparent', defaultTheme.colors.dark]}>
          {
            onDetail
              ?
              <GoBack />
              :
              <Logo size="small" />
          }
          <Tag mt={200}>{data.type}</Tag>
          <CustomText
            fontFamily="bold"
            size={28}
            mt={8}
          >
            {data.title}
          </CustomText>
          <CustomText size={18}>{data.subtitle}</CustomText>
          <ButtonsView>
            <IconButton label="Favoritos" name="add-circle-outline" onPress={() => { }} />
            <PlayButton onPress={() => { }} />
            {
              !onDetail
                ?
                <IconButton label="Saiba mais" name="information-circle-outline" onPress={() => { }} />
                :
                <></>
            }
          </ButtonsView>
        </HeaderGradient>
      </HeaderImageBackground>
    </HeaderContainer>
  );
}