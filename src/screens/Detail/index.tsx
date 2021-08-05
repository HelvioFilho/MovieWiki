import React from 'react';
import { CustomText, Header } from '../../components';
import { ScreenScrollContainer } from '../../components/atoms/Container/styles';
import { useDataStore } from '../../service/stores';

export function Detail() {
  const { data } = useDataStore();

  return (
    <ScreenScrollContainer>
      <Header data={data} onDetail />
      <CustomText ml={24} fontFamily="black" size={18}>
        Descrição
      </CustomText>
      <CustomText mt={12} ml={24} mr={24} mb={30} size={14} lh={20}>
        {data.description}
      </CustomText>
    </ScreenScrollContainer>
  );
}