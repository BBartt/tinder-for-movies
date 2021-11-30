import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import moviesReducer from '../reducers/moviesReducer';
import recommendationsReducer from '../reducers/recommendationsReducer';

const reducers = combineReducers({
  movies: moviesReducer,
  acceptedRejected: recommendationsReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof reducers>;

export type AppDispatch = typeof store.dispatch;

export default store;
