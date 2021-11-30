import { IMovie } from '../../interfaces';
import {
  Constants,
  IActionRecommendationsReducer,
} from '../actions/movies/types';

export interface IinitialState {
  accepted: IMovie[];
  rejected: IMovie[];
}

export const initialState: IinitialState = {
  accepted: [],
  rejected: [],
};

const recommendationsReducer = (
  state: IinitialState = initialState,
  action: IActionRecommendationsReducer,
): IinitialState => {
  switch (action.type) {
    case Constants.ACCEPT:
      return {
        ...state,
        accepted: [...state.accepted, action.payload],
      };
    case Constants.REJECT:
      return {
        ...state,
        rejected: [...state.rejected, action.payload],
      };
    default:
      return state;
  }
};

export default recommendationsReducer;
