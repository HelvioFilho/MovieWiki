import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { defaultTheme } from '../../../global/styles/theme';
import { useFavorites } from '../../../service/hooks';
import { DataProps } from '../../../utils/interface';
import { CustomText, GoBack, Logo } from '../../atoms';
import { Tag, IconButton, PlayButton, StateModal } from '../../molecules';
import { HeaderContainer, HeaderGradient, HeaderImageBackground, ButtonsView } from './styles';
import { useDataStore } from '../../../service/stores';

export function Header({ data, onDetail }: DataProps) {
  const { addFavorites, removeFavorite, getFavorites } = useFavorites();
  const [favoriteType, setFavoriteType] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();
  const { setData } = useDataStore();

  function closeModal() {
    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  }

  async function handleAddFavorite() {
    await addFavorites(data);
    setFavoriteType('added');
    setShowModal(true);
    checkIsFavorite();
    closeModal();
  }

  async function handleDeleteFavorite() {
    await removeFavorite(`${data.id}${data.title}`);
    setFavoriteType('removed');
    setShowModal(true);
    checkIsFavorite();
    closeModal();
  }

  async function checkIsFavorite() {
    const favorites = await getFavorites();
    setIsFavorite(favorites
      .filter(
        (fv) => `${fv.id}${fv.title}` === `${data.id}${data.title}`
      )
      .length > 0);
  }

  function handlePlay() {
    setData(data);
    navigation.navigate('Watch');
  }

  function handleDetails() {
    setData(data);
    navigation.navigate('Detail');
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
            {data.trailer_url &&
              <PlayButton onPress={() => handlePlay()} />
            }
            {
              !onDetail
                ?
                <IconButton label="Saiba mais" name="information-circle-outline" onPress={() => handleDetails()} />
                :
                <></>
            }
          </ButtonsView>
        </HeaderGradient>
      </HeaderImageBackground>
      <StateModal
        type={favoriteType}
        visible={showModal}
      />
    </HeaderContainer>
  );
}