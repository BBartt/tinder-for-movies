import { IMovie } from '../../../interfaces';

export enum Constants {
  FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN',
  FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  ACCEPT = 'ACCEPT',
  REJECT = 'REJECT',
  REMOVE_MOVIE = 'REMOVE_MOVIE',
}

export type FetchMoviesBegin = {
  type: typeof Constants.FETCH_MOVIES_BEGIN;
  payload: null;
};

export type FetchMoviesSuccess = {
  type: typeof Constants.FETCH_MOVIES_SUCCESS;
  payload: IMovie[];
};

export type FetchMoviesFail = {
  type: typeof Constants.FETCH_MOVIES_FAILURE;
  payload: string;
};

export type IActionMoviesReducer =
  | FetchMoviesBegin
  | FetchMoviesSuccess
  | FetchMoviesFail
  | RemoveMovie;

export type AcceptMovie = {
  type: typeof Constants.ACCEPT;
  payload: IMovie;
};

export type RejectMovie = {
  type: typeof Constants.REJECT;
  payload: IMovie;
};

export type IActionRecommendationsReducer = AcceptMovie | RejectMovie;

export type RemoveMovie = {
  type: typeof Constants.REMOVE_MOVIE;
  payload: number;
};
