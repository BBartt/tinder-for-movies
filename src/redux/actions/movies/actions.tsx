import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { IMovie } from '../../../interfaces';
import { RootState } from '../../store';
import { moviesApi } from '../../api/moviesApi';
import {
  FetchMoviesFail,
  FetchMoviesBegin,
  FetchMoviesSuccess,
  Constants,
  AcceptMovie,
  RejectMovie,
  RemoveMovie,
} from './types';

export const fetchMoviesBegin = (): FetchMoviesBegin => ({
  type: Constants.FETCH_MOVIES_BEGIN,
  payload: null,
});

export const fetchMoviesSuccess = (items: {
  results: IMovie[];
}): FetchMoviesSuccess => ({
  type: Constants.FETCH_MOVIES_SUCCESS,
  payload: items.results,
});

export const fetchMoviesFailure = (items: {
  message: string;
}): FetchMoviesFail => ({
  type: Constants.FETCH_MOVIES_FAILURE,
  payload: items.message,
});

export const getMovies =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch) => {
    dispatch(fetchMoviesBegin());
    moviesApi
      .get()
      .then((res) => {
        dispatch(fetchMoviesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchMoviesFailure(err));
      });
  };

export const acceptMovie = (item: IMovie): AcceptMovie => ({
  type: Constants.ACCEPT,
  payload: item,
});

export const rejectMovie = (item: IMovie): RejectMovie => ({
  type: Constants.REJECT,
  payload: item,
});

export const rateMovie =
  (
    id: number,
    param: 'accept' | 'reject',
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch) => {
    moviesApi
      .put(id, param)
      .then((res) => {
        dispatch(
          param === 'accept'
            ? acceptMovie(res.data)
            : rejectMovie(res.data),
        );
      })
      .catch((err) => dispatch(fetchMoviesFailure(err)));
  };

export const removeMovie = (id: number): RemoveMovie => ({
  type: Constants.REMOVE_MOVIE,
  payload: id,
});
