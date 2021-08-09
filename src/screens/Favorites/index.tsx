import React, { useEffect, useState } from 'react';
import { CustomText, GridList } from '../../components';
import { ScreenContainer } from '../../components/atoms/Container/styles';
import { useFavorites } from '../../service/hooks';
import { useIsFocused } from '@react-navigation/native';
import { DataItemProps } from '../../utils/interface';

export function Favorites() {
  const isFocused = useIsFocused();
  const [favoritesList, setFavoritesList] = useState<DataItemProps[]>([]);
  const { getFavorites } = useFavorites();

  async function callGetFavorites() {
    const favorites = await getFavorites();
    setFavoritesList(favorites);
  }

  useEffect(() => {
    callGetFavorites();
  }, [isFocused]);

  return (
    <ScreenContainer withPadding>
      <CustomText fontFamily="bold" size={28} mb={24}>Favoritos</CustomText>
      <GridList dataType="favorites" data={favoritesList} />
    </ScreenContainer>
  );
}