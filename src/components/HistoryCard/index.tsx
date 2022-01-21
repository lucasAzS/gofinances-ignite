import React from 'react';
import { Container, Title, Amount } from './styles';

interface HistoryCardProps {
  color: string;
  amount: string;
  title: string;
}

function HistoryCard({ color, amount, title }: HistoryCardProps) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}

export default HistoryCard;
