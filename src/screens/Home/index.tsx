import React from 'react';
import { Container, Card, HomeList, Header } from '../../components';
import { ScreenScrollContainer } from '../../components/atoms/Container/styles';

export function Home() {
  const FAKE_DATA_CHARACTERS = [
    {
      id: '1',
      image_url:
        'https://img.elo7.com.br/product/original/34E0766/papel-parede-star-wars-darth-vader-stormtroopers-3-10x3-0-m-menino.jpg',
    },
    {
      id: '2',
      image_url:
        'https://s2.glbimg.com/QqEDyJyWVPTI9tU-5izKpJls6UE=/620x520/smart/e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg',
    },
    {
      id: '3',
      image_url:
        'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1086,h_570/https://poltronanerd.com.br/wp-content/uploads/2020/09/Obi-Wan-Kenobi-1086x570.jpg',
    },
    {
      id: '4',
      image_url:
        'https://rollingstone.uol.com.br/media/_versions/hayden-christensen-reprod-lucasfilm-cortado_widelg.jpg',
    },
  ]

  return (
    <ScreenScrollContainer>
      <Header />
      <HomeList title="Filmes" data={FAKE_DATA_CHARACTERS} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERS} />

    </ScreenScrollContainer>
    // <Container align='flex-start' justify='flex-start'>
    // </Container>
  );
}