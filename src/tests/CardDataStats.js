// CardDataStats.test.js

import React from 'react';
import { render } from '@testing-library/react';
import CardDataStats from '../components/CardDataStats';

describe('CardDataStats component', () => {
  it('should render title and children correctly', () => {
    const title = 'Task Title';
    const children = 'In Progress';

    const { getByText } = render(
      <CardDataStats title={title} children={children} />
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(children)).toBeInTheDocument();
  });
});
