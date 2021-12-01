import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../../redux/store';
import ChoseMovie from '../../components/ChoseMovie';
import dummyData from '../dummyData.json';

afterEach(cleanup);

describe('ChoseMovie component', () => {
  const noMoviesTxt = 'No movies';

  it('renders "No movies" text when no data provided', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ChoseMovie movies={[]} />
      </Provider>,
    );

    const div = getByText(noMoviesTxt);

    expect(div).toBeInTheDocument();
  });

  it('renders "No movies" text when no data provided', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ChoseMovie movies={dummyData} />
      </Provider>,
    );

    const [{ title, overview }] = dummyData;

    const divWithTitle = getByText(title);
    const divWithOverview = getByText(overview);

    expect(divWithTitle).toBeInTheDocument();
    expect(divWithOverview).toBeInTheDocument();
  });
});
