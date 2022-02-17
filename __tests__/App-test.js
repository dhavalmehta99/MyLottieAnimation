/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import HomeTest from '../src/components/HomeTest';

it('renders correctly', () => {
  renderer.create(<HomeTest />);
});
