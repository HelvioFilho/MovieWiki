import React, { useState } from 'react';
import { useEffect } from 'react';
import { HomeList, Header, Loader } from '../../components';
import { ScreenScrollContainer } from '../../components/atoms/Container/styles';
import { useGetData } from '../../service/hooks';
import { DataItemProps } from '../../utils/interface';

export function Home() {
  const { getMovies, getCharacters } = useGetData();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<DataItemProps[]>([]);
  const [characters, setCharacters] = useState<DataItemProps[]>([]);

  async function callGetData() {
    const filmsResponse = await getMovies();
    const charactersResponse = await getCharacters();
    if (Object.keys(filmsResponse).length > 0 && Object.keys(charactersResponse).length > 0) {
      setMovie(filmsResponse);
      setCharacters(charactersResponse);
    }
    setLoading(false);
  }

  useEffect(() => {
    callGetData();
  }, [])
  if (loading) {
    return <Loader />
  }

  return (
    <ScreenScrollContainer>
      <Header data={{ ...movie[0], type: 'Filme' }} />
      <HomeList dataType="Filme" title="Filmes" data={movie} />
      <HomeList dataType="Personagem" title="Personagens" data={characters} />
    </ScreenScrollContainer>
  );
}