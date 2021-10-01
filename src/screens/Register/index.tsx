import React from 'react';
import { Button } from '../../components/Form/Buttton';
import { Input } from '../../components/Form/Input';
import { Container, Header, Title, Form, Fields } from './styles';

export const Register = () => {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
        </Fields>
        <Button title='Enviar' />
      </Form>
    </Container>
  );
};
