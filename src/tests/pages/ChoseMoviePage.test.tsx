import { cleanup, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import dummyData from '../dummyData.json';
import store from '../../redux/store';
import ChoseMoviePage from '../../pages/ChoseMoviePage';
import { fetchMoviesSuccess } from '../../redux/actions/movies/actions';

beforeEach(() =>
  store.dispatch(fetchMoviesSuccess({ results: dummyData })),
);

afterEach(cleanup);

describe('ChooseMoviePage page', () => {
  it('renders components with data', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ChoseMoviePage />
      </Provider>,
    );

    const [{ title, overview }] = dummyData;

    waitFor(() =>
      expect(getByText(`/${title}/i`)).toBeInTheDocument(),
    );
    waitFor(() =>
      expect(getByText(`/${overview}/i`)).toBeInTheDocument(),
    );
  });
});
