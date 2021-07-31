import React from 'react';
import { Header } from '../../components';
import { ScreenScrollContainer } from '../../components/atoms/Container/styles';
import { useDataStore } from '../../service/stores';

export function Detail() {
  const { data } = useDataStore();

  return (
    <ScreenScrollContainer>
      <Header data={data} onDetail />
    </ScreenScrollContainer>
  );
}