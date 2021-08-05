import React, { useEffect, useState } from 'react';
import { defaultTheme } from '../../../global/styles/theme';
import { useFavorites } from '../../../service/hooks';
import { DataProps } from '../../../utils/interface';
import { CustomText, GoBack, Logo } from '../../atoms';
import { Tag, IconButton, PlayButton } from '../../molecules';
import { HeaderContainer, HeaderGradient, HeaderImageBackground, ButtonsView } from './styles';

export function Header({ data, onDetail }: DataProps) {
  const { addFavorites, removeFavorite, getFavorites } = useFavorites();
  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  async function handleAddFavorite() {
    await addFavorites(data);
    checkIsFavorite();
  }

  async function handleDeleteFavorite() {
    await removeFavorite(`${data.id}${data.title}`);
    checkIsFavorite();
  }

  async function checkIsFavorite() {
    setLoading(true);
    const favorites = await getFavorites();
    setIsFavorite(Object
      .keys(favorites)
      .filter((fv) => fv === `${data.id}${data.title}`).length > 0);
    setLoading(false);
  }

  useEffect(() => {
    checkIsFavorite();
  }, [])
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
            <IconButton
              onPress={() =>
                isFavorite
                  ?
                  handleDeleteFavorite()
                  :
                  handleAddFavorite()
              }
              label={isFavorite ? "Rem. Favoritos" : "Add Favoritos"}
              name={isFavorite ? "remove-circle-outline" : "add-circle-outline"}
            />
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