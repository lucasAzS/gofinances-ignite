import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Title } from './styles';

export const Dashboard = ({}) => {
  return (
    <Container style={styles.container}>
      <Title>Dashboard</Title>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
