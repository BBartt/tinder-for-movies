import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ChoseMovie from '../../components/ChoseMovie';
import Loader from '../../components/Loader';
import useSelectorTyped from '../../hooks';
import { getMovies } from '../../redux/actions/movies/actions';

const ChoseMoviePage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const { movies, isLoading, error } = useSelectorTyped(
    (state) => state.movies,
  );

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (error) return <h1>{error}</h1>;

  return (
    <div className="choose-movie-page">
      <h2 className="swipe-info">
        Swipe left to like movie or swipe right to dislike the movie
      </h2>

      {isLoading ? <Loader /> : <ChoseMovie movies={movies} />}
    </div>
  );
};

export default ChoseMoviePage;
