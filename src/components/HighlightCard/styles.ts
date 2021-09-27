import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: ${RFValue(5)}px;

  padding: ${RFValue(19)}px ${RFValue(23)}px;
  padding-bottom: ${RFValue(42)}px;
`;

export const Header = styled.View``;

export const Title = styled.Text``;

export const Content = styled.View``;

export const Footer = styled.View``;

export const Icon = styled(Feather)``;

export const Amount = styled.Text``;

export const LastTransaction = styled.Text``;
