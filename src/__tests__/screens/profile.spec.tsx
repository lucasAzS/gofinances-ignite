import React from 'react';
import { render } from '@testing-library/react-native';

import { Profile } from '../../screens/Profile';

describe('Profile Screen', () => {
  it('should have placeholder in input name  ', () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText('Nome');

    expect(inputName).toBeTruthy();
  });

  it('should be loaded user data', () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId('input-name');
    const inputSurname = getByTestId('input-surname');

    expect(inputName.props.value).toEqual('Lucas');
    expect(inputSurname.props.value).toEqual('de Azambuja');
  });

  it('should exist title', () => {
    const { getByTestId } = render(<Profile />);

    const title = getByTestId('text-title');

    expect(title).toBeTruthy();
    expect(title.props.children).toContain('Perfil');
  });
});
