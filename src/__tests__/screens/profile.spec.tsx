import React from 'react';
import { render } from '@testing-library/react-native';

import { Profile } from '../../screens/Profile';

test('check if shows correct input name placeholder ', () => {
  const { getByPlaceholderText } = render(<Profile />);

  const inputName = getByPlaceholderText('Nome');

  expect(inputName).toBeTruthy();
});

test('check if user data has been loaded', () => {
  const { getByTestId } = render(<Profile />);

  const inputName = getByTestId('input-name');
  const inputSurname = getByTestId('input-surname');

  expect(inputName.props.value).toEqual('Lucas');
  expect(inputSurname.props.value).toEqual('de Azambuja');
});

test('check if title renders correctly', () => {
  const { getByTestId } = render(<Profile />);

  const title = getByTestId('text-title');

  expect(title).toBeTruthy();
  expect(title.props.children).toContain('Perfil');
});
