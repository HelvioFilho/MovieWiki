import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDataStore } from '../../../service/stores';
import { DataProps } from '../../../utils/interface';

import { CardContainer, CardImage } from './styles';

export function Card({ data }: DataProps) {
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
    >
      <CardImage source={{ uri: data.image_url }} />
    </CardContainer>
  );
}