import { render } from '@testing-library/react';
import { Date } from './Date';

describe('Date Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Date time="2023-10-10T10:10:40Z" label="Created At" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
