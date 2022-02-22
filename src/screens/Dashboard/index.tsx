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
import { useAuth } from '../../hooks/auth';

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
  lastTransaction: string;
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
  const { signOut, user } = useAuth();

  function getLastTransactionDate(
    collection: DataListProps[],
    type: 'positive' | 'negative'
  ) {
    const collectionFiltered = collection.filter(
      (transaction) => transaction.type === type
    );

    if (collectionFiltered.length === 0) {
      return 0;
    }
    const lastTransaction = new Date(
      Math.max.apply(
        Math,
        collectionFiltered.map((transaction) =>
          new Date(transaction.date).getTime()
        )
      )
    );

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
      'pt-BR',
      {
        month: 'long',
      }
    )}`;
  }

  async function loadTransactions() {
    const dataKey = `@gofinances:transactions_user:${user.id}`;
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

    const lastTransactionEntries = getLastTransactionDate(
      transactions,
      'positive'
    );
    const lastTransactionExpenses = getLastTransactionDate(
      transactions,
      'negative'
    );
    const totalInterval =
      lastTransactionExpenses === 0
        ? 'Não há transações'
        : `01 a ${lastTransactionExpenses}`;

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction:
          lastTransactionEntries === 0
            ? 'Não há transações'
            : `Última entrada dia ${lastTransactionEntries}`,
      },
      expenses: {
        amount: expensesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction:
          lastTransactionExpenses === 0
            ? 'Não há transações'
            : `Última saída dia ${lastTransactionExpenses}`,
      },
      total: {
        amount: (entriesTotal - expensesTotal).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: totalInterval,
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
                    uri: user.photo,
                  }}
                />

                <User>
                  <UserGreetings>Olá,</UserGreetings>
                  <UserName>{user.name}</UserName>
                </User>
              </UserInfo>
              <LogoutButton onPress={signOut}>
                <Icon name='power' />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HighlightCards>
            <HighlightCard
              title='Entradas'
              amount={highlightData.entries.amount}
              lastTransaction={highlightData.entries.lastTransaction}
              type='up'
            />
            <HighlightCard
              title='Saida'
              amount={highlightData.expenses.amount}
              lastTransaction={highlightData.expenses.lastTransaction}
              type='down'
            />
            <HighlightCard
              title='Total'
              amount={highlightData.total.amount}
              lastTransaction={highlightData.total.lastTransaction}
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
