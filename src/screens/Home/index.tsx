import React from 'react';
import { Container, Card, HomeList, Header } from '../../components';


export function Home() {
  return (
    <Container align='flex-start' justify='flex-start'>
      <Header />
      <HomeList />
    </Container>
  );
}