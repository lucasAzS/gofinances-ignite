import React from 'react';
import { render } from '@testing-library/react-native';
import { Input } from '.';

describe('Input Component', () => {
  it('should have border when active', () => {
    const { getByTestId } = render(
      <Input
        testID='input-email'
        placeholder='Email'
        keyboardType='email-address'
        autoCorrect={false}
        active={true}
      />
    );

    const inputComponent = getByTestId('input-email');

    expect(inputComponent.props.style[0].borderColor).toEqual('#E83f5b');

    expect(inputComponent.props.style[0].borderWidth).toEqual(3);
  });
});
