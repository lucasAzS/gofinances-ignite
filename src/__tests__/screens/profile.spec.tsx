import React from 'react';
import { render } from '@testing-library/react-native';

import { Profile } from '../../screens/Profile';

test('check if shows correct input name placeholder ', () => {
  const { debug } = render(<Profile />);

  debug();
});
