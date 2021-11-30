import { IMovie } from '../../interfaces';
import {
  Constants,
  IActionMoviesReducer,
} from '../actions/movies/types';

export interface IinitialState {
  isLoading: boolean;
  error: string | null;
  movies: IMovie[];
}

export const initialState: IinitialState = {
  isLoading: false,
  error: null,
  movies: [],
};

const moviesReducer = (
  state: IinitialState = initialState,
  action: IActionMoviesReducer,
): IinitialState => {
  console.log(`action`, action);
  switch (action.type) {
    case Constants.FETCH_MOVIES_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case Constants.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    case Constants.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case Constants.REMOVE_MOVIE: {
      const newMovies: IMovie[] = state.movies.filter(
        (movie) => movie.id !== action.payload,
      );

      return {
        ...state,
        movies: [...newMovies],
      };
    }

    default:
      return state;
  }
};

export default moviesReducer;
