import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../../components/Button';

afterEach(cleanup);

const btnTxt = 'button text';
const testClassName = 'lorem ipsum';

describe('Button component', () => {
  it('renders Button without crashing', () => {
    const { getByText } = render(
      <Button onClick={() => {}}>{btnTxt}</Button>,
    );

    const button = getByText(btnTxt);

    expect(button).toBeInTheDocument();
  });

  it('renders Button props correcly and fire onCLick event', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button className={testClassName} onClick={onClickMock}>
        {btnTxt}
      </Button>,
    );

    const button = getByText(btnTxt);
    userEvent.click(button);

    expect(button).toHaveTextContent(btnTxt);
    expect(button).toHaveClass(testClassName);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
