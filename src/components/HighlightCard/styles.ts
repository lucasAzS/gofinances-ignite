import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: ${RFValue(5)}px;

  padding: ${RFValue(19)}px ${RFValue(23)}px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: ${RFValue(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.View``;

export const Footer = styled.View``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme }) => theme.colors.text_dark};

  margin-top: ${RFValue(38)}px;
`;

export const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme }) => theme.colors.text};
`;
