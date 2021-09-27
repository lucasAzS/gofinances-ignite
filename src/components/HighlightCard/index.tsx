import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Icon,
  Amount,
  LastTransaction,
} from './styles';

export const HighlightCard = () => {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name='arrow-up-circle' />
      </Header>
      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LastTransaction>Ultima Entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  );
};
