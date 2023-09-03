import { render } from '@testing-library/react';
import { Files } from './Files';

describe('Files Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Files files={[{ filename: 'name', raw_url: 'https://google.com' }]} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
