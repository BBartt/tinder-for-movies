import { cleanup } from '@testing-library/react';
import { IMovie } from '../../../interfaces';
import {
  Constants,
  RejectMovie,
  AcceptMovie,
} from '../../../redux/actions/movies/types';
import moviesReducer, {
  IinitialState,
  initialState,
} from '../../../redux/reducers/recommendationsReducer';
import dummyData from '../../dummyData.json';

afterEach(cleanup);

const [movie] = dummyData;

describe('moviesReducer Reducer', () => {
  it('returns the "ACCEPT" state', () => {
    const acceptMovie = (item: IMovie): AcceptMovie => ({
      type: Constants.ACCEPT,
      payload: item,
    });

    const reducer = moviesReducer(initialState, acceptMovie(movie));

    const acceptState: IinitialState = {
      accepted: [movie],
      rejected: [],
    };

    expect(reducer).toEqual(acceptState);
  });

  it('returns the "FETCH_MOVIES_SUCCESS" state', () => {
    const rejectMovie = (item: IMovie): RejectMovie => ({
      type: Constants.REJECT,
      payload: item,
    });

    const reducer = moviesReducer(initialState, rejectMovie(movie));

    const rejectState: IinitialState = {
      accepted: [],
      rejected: [movie],
    };

    expect(reducer).toEqual(rejectState);
  });
});
