import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)`
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${RFValue(5)}px;

  align-items: center;
  flex-direction: row;

  margin-bottom: ${RFValue(16)}px;
`;

export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;

  padding: ${RFValue(16)}px;
  border-color: ${({ theme }) => theme.colors.background};
  border-right-width: ${RFValue(1)}px;
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`;
