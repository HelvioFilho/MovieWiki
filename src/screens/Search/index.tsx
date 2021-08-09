import React, { useEffect, useState } from 'react';
import { CustomInput, CustomText, GridList } from '../../components';
import { ScreenContainer } from '../../components/atoms/Container/styles';
import { useGetData } from '../../service/hooks';
import { DataItemProps } from '../../utils/interface';

export function Search() {
  const { getSearchResult } = useGetData();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<DataItemProps[]>([]);

  async function handleGetSearch() {
    setLoading(true);
    const result = await getSearchResult(query);
    setResults(result);
    setLoading(false);
  }

  useEffect(() => {
    if (query.length > 0 && query.length % 3 === 0) {
      handleGetSearch();
    }
  }, [query])

  return (
    <ScreenContainer withPadding>
      <CustomText fontFamily="bold" size={28} mb={24}>Pesquisar</CustomText>
      <CustomInput
        value={query}
        onChangeText={(text) => setQuery(text)}
        placeholder="Filme ou nome do personagem"
      />
      <GridList
        loading={loading}
        data={results}
        dataType="search"
      />
    </ScreenContainer>
  );
}