import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { CardProps } from '../../../utils/interface';

import { CardContainer, CardImage } from './styles';

export function Card({ item }: CardProps) {
  const navigation = useNavigation();

  return (
    <CardContainer
      onPress={() => navigation.navigate('Detail')}
      activeOpacity={0.8}
    >
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  );
}