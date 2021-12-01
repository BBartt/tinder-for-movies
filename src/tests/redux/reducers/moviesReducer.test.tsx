import { cleanup } from '@testing-library/react';
import { IMovie } from '../../../interfaces';
import {
  Constants,
  FetchMoviesBegin,
  FetchMoviesSuccess,
  FetchMoviesFail,
  RemoveMovie,
} from '../../../redux/actions/movies/types';
import moviesReducer, {
  IinitialState,
  initialState,
} from '../../../redux/reducers/moviesReducer';
import dummyData from '../../dummyData.json';

afterEach(cleanup);

describe('moviesReducer Reducer', () => {
  it('returns the "FETCH_MOVIES_BEGIN" state', () => {
    const fetchMoviesBegin = (): FetchMoviesBegin => ({
      type: Constants.FETCH_MOVIES_BEGIN,
      payload: null,
    });

    const reducer = moviesReducer(initialState, fetchMoviesBegin());

    const fetchMoviesBeginState: IinitialState = {
      movies: [],
      isLoading: true,
      error: null,
    };

    expect(reducer).toEqual(fetchMoviesBeginState);
  });

  it('returns the "FETCH_MOVIES_SUCCESS" state', () => {
    const fetchMoviesSuccess = (
      items: IMovie[],
    ): FetchMoviesSuccess => ({
      type: Constants.FETCH_MOVIES_SUCCESS,
      payload: items,
    });

    const reducer = moviesReducer(
      initialState,
      fetchMoviesSuccess(dummyData),
    );

    const fetchMoviesSuccessState: IinitialState = {
      movies: dummyData,
      isLoading: false,
      error: null,
    };

    expect(reducer).toEqual(fetchMoviesSuccessState);
  });

  it('returns the "FETCH_MOVIES_FAILURE" state', () => {
    const fetchMoviesFailure = (
      message: string,
    ): FetchMoviesFail => ({
      type: Constants.FETCH_MOVIES_FAILURE,
      payload: message,
    });

    const errorText = 'error message lorem ipsum';

    const reducer = moviesReducer(
      initialState,
      fetchMoviesFailure(errorText),
    );

    const fetchMoviesFailureState: IinitialState = {
      movies: [],
      isLoading: false,
      error: errorText,
    };

    expect(reducer).toEqual(fetchMoviesFailureState);
  });

  it('returns the "REMOVE_MOVIE" state', () => {
    const removeMovie = (id: number): RemoveMovie => ({
      type: Constants.REMOVE_MOVIE,
      payload: id,
    });

    const [{ id }] = dummyData;

    const moviesReducerState: IinitialState = {
      movies: dummyData,
      isLoading: false,
      error: null,
    };

    const reducer = moviesReducer(
      moviesReducerState,
      removeMovie(id),
    );

    const moviesReducerStateWithRemovedMovie: IinitialState = {
      movies: dummyData.splice(1),
      isLoading: false,
      error: null,
    };

    expect(reducer).toEqual(moviesReducerStateWithRemovedMovie);
  });
});
