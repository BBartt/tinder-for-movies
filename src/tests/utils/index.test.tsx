import '@testing-library/jest-dom';
import { directionToParam } from '../../utils';

const inputTextLeft = 'left';
const inputTextRight = 'right';

const rejectTxt = 'reject';
const accepttTxt = 'accept';

describe('directionToParam util', () => {
  it('renders returns "reject"', () => {
    const result = directionToParam(inputTextRight);

    expect(result).toBe(rejectTxt);
  });

  it('renders returns "accept"', () => {
    const result = directionToParam(inputTextLeft);

    expect(result).toBe(accepttTxt);
  });
});
