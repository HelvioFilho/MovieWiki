import React from 'react';
import { FlatList } from 'react-native';
import { defaultTheme } from '../../../global/styles/theme';
import { HomeListProps } from '../../../utils/interface';
import { CustomText } from '../../atoms';
import { Card } from '../../molecules';

import { ListContainer } from './styles';

export function HomeList({ data, title }: HomeListProps) {
  return (
    <ListContainer>
      <CustomText
        ml={24}
        fontFamily="black"
        size={18}
      >{title}</CustomText>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card data={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingTop: defaultTheme.metrics.px(12),
          paddingBottom: defaultTheme.metrics.px(24),
          paddingLeft: defaultTheme.metrics.px(24),

        }}
      />
    </ListContainer>
  );
}