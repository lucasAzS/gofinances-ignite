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

      <HighlightCard />
    </Container>
  );
};
