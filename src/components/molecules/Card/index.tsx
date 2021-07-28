import React from 'react';

import { CardContainer, CardImage } from './styles';

interface ItemProps {
  id: string;
  image_url: string;
}

interface CardProps {
  item: ItemProps;
}

export function Card({ item }: CardProps) {
  return (
    <CardContainer activeOpacity={0.8}>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  );
}