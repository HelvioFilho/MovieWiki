import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { HomeListProps } from '../../../utils/interface';
import { Card } from '../../molecules';
import { Container, CustomText, } from '../../atoms';
import { NoDataImage, SeparatorView } from './styles';

import noDataFavorites from '../../../assets/no-favorites.png'
import noDataSearch from '../../../assets/no-result.png'
import { defaultTheme } from '../../../global/styles/theme';



export function GridList({ data, dataType, loading }: HomeListProps) {
  return (
    <FlatList
      refreshing={loading}
      numColumns={3}
      data={data}
      renderItem={({ item }) => <Card size="large" data={item} />}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <SeparatorView />}
      ListEmptyComponent={() => (
        <Container align="center" justify="center" height={defaultTheme.metrics.height / 1.7}>
          <NoDataImage
            resizeMode="contain"
            source={dataType === 'favorites' ? noDataFavorites : noDataSearch}
          />
          <CustomText fontFamily="semiBold" size={14} mt={12}>
            {`Nenhum ${dataType === 'favorites' ? 'favorito' : 'resultado'} encontrado.`}
          </CustomText>
        </Container>
      )}
    />
  );
}