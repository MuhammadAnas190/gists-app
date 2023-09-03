import { render } from '@testing-library/react';
import { IconText } from './IconText';

describe('IconText Component', () => {
  it('should match snapshot for link', () => {
    const { asFragment } = render(
      <IconText iconName="file" text="File test" link="https://google.com" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot for text', () => {
    const { asFragment } = render(<IconText iconName="file" text="File test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
