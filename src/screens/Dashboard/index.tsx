import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserName,
  UserGreetings,
  UserWrapper,
  Icon,
  HighlightCards,
} from './styles';

export const Dashboard = ({}) => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/55214084?v=4',
              }}
            />

            <User>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Lucas</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          title='Entradas'
          amount='17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
          type='up'
        />
        <HighlightCard
          title='Saida'
          amount='10.400,00'
          lastTransaction='Última Saida dia 03 de abril'
          type='down'
        />
        <HighlightCard
          title='Total'
          amount='7.000,00'
          lastTransaction='01 à 16 de abril'
          type='total'
        />
      </HighlightCards>
    </Container>
  );
};
