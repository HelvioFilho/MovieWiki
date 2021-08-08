import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDataStore } from '../../../service/stores';
import { CardProps, cardSizes } from '../../../utils/interface';

import { CardContainer, CardImage } from './styles';



export function Card({ data, size }: CardProps) {
  const { setData } = useDataStore();
  const navigation = useNavigation();

  function handleSelectItem() {
    setData(data);
    navigation.navigate('Detail')
  }

  return (
    <CardContainer
      onPress={handleSelectItem}
      activeOpacity={0.8}
      size={size ? cardSizes[size] : cardSizes.small}
    >
      <CardImage source={{ uri: data.image_url }} />
    </CardContainer>
  );
}