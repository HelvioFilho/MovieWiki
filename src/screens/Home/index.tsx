import React from 'react';
import { HomeList, Header } from '../../components';
import { ScreenScrollContainer } from '../../components/atoms/Container/styles';

export function Home() {
  const FAKE_DATA_CHARACTERS = [
    {
      id: '1',
      image_url:
        'https://img.elo7.com.br/product/original/34E0766/papel-parede-star-wars-darth-vader-stormtroopers-3-10x3-0-m-menino.jpg',
      title: 'Darth Vader',
      subtitle: 'Anakin Skywalker',
      type: 'Personagem',
      description: 'Darth Vader, nascido como Anakin Skywalker, é um dos personagens centrais da série de filmes Star Wars (Guerra nas Estrelas), tendo sido um dos protagonistas, juntamente com Obi-Wan Kenobi, da trilogia prequel (mas se tornando o vilão secundário no terceiro filme após a morte do General Grievous), um dos antagonistas principais da trilogia original ao lado do Imperador Palpatine (porém acaba se redimindo no final), e um anti-herói póstumo na trilogia de sequência, sendo que suas ações ainda afetam o universo de Star Wars, sendo para o bem ou para o mal, principalmente quando se trata de seu neto, Ben Solo, o Kylo Ren, que tem por Vader uma admiração cega, e deseja mais do que tudo ser como ele (e até superá-lo).'
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
      <Header data={{
        id: '1',
        title: 'Episódio I',
        subtitle: 'A Ameaça Fantasma',
        type: 'Filme',
        image_url: 'https://i.pinimg.com/originals/22/4f/9d/224f9d64ad01d1bf5937a46ffe99eaec.jpg',
      }} />
      <HomeList title="Filmes" data={FAKE_DATA_CHARACTERS} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERS} />
    </ScreenScrollContainer>
  );
}