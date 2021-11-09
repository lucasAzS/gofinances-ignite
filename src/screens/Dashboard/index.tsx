import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

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
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export const Dashboard = ({}) => {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '13/04/2020',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburger',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: '10/04/2020',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel',
      amount: 'R$ 1.000,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
      date: '27/03/2020',
    },
  ];
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
          <LogoutButton onPress={() => {}}>
            <Icon name='power' />
          </LogoutButton>
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

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};
