import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { Input } from '.';
import theme from '../../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Input Component', () => {
  it('should have border when active', () => {
    const { getByTestId } = render(
      <Input
        testID='input-email'
        placeholder='Email'
        keyboardType='email-address'
        autoCorrect={false}
        active={true}
      />,
      {
        wrapper: Providers,
      }
    );

    const inputComponent = getByTestId('input-email');

    expect(inputComponent.props.style[0].borderColor).toEqual(
      theme.colors.attention
    );

    expect(inputComponent.props.style[0].borderWidth).toEqual(3);
  });
});
