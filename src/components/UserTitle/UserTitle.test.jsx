import { render } from '@testing-library/react';
import { UserTitle } from './UserTitle';

describe('UserTitle', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <UserTitle imageSrc="https://avatars.githubusercontent.com/u/8363252?v=4" name="User Name" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
