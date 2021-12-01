import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

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
  LoadContainer,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighlightProps {
  amount: string;
}
interface HighlightData {
  entries: HighlightProps;
  expenses: HighlightProps;
  total: HighlightProps;
}

export const Dashboard = ({}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [transactions, setTransactions] = React.useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = React.useState<HighlightData>(
    {} as HighlightData
  );

  const theme = useTheme();

  async function loadTransactions() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = JSON.parse(response || '[]');

    let entriesTotal = 0;
    let expensesTotal = 0;

    const transactionsToSave: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === 'positive') {
          entriesTotal += Number(item.amount);
        }

        if (item.type === 'negative') {
          expensesTotal += Number(item.amount);
        }

        const number = Number(item.amount);
        let amount = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(number);

        amount = amount.replace('R$', 'R$ ');

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          type: item.type,
          category: item.category,
          amount,
          date,
        };
      }
    );

    setTransactions(transactionsToSave);
    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
      expenses: {
        amount: expensesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
      total: {
        amount: (entriesTotal - expensesTotal).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
    });

    setIsLoading(false);
  }

  React.useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator size='large' color={theme.colors.primary} />
        </LoadContainer>
      ) : (
        <>
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
              amount={highlightData.entries.amount}
              lastTransaction='Última entrada dia 13 de abril'
              type='up'
            />
            <HighlightCard
              title='Saida'
              amount={highlightData.expenses.amount}
              lastTransaction='Última Saida dia 03 de abril'
              type='down'
            />
            <HighlightCard
              title='Total'
              amount={highlightData.total.amount}
              lastTransaction='01 à 16 de abril'
              type='total'
            />
          </HighlightCards>

          <Transactions>
            <Title>Listagem</Title>
            <TransactionList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
};
