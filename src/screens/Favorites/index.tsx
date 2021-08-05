import React, { useEffect } from 'react';
import { CustomText } from '../../components';
import { ScreenScrollContainer } from '../../components/atoms/Container/styles';
import { useFavorites } from '../../service/hooks';
import { useIsFocused } from '@react-navigation/native';


export function Favorites() {
  const isFocused = useIsFocused();
  const { getFavorites } = useFavorites();

  async function callGetFavorites() {
    const favorites = await getFavorites();
    console.log("############ inicio ##################");
    console.log(favorites);
    console.log("############ Fim ##################");
  }

  useEffect(() => {
    callGetFavorites();
  }, [isFocused]);

  return (
    <ScreenScrollContainer withPadding>
      <CustomText fontFamily="bold" size={28} >Favorites</CustomText>
    </ScreenScrollContainer>
  );
}