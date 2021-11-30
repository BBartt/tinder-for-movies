import React from 'react';
import { useDispatch } from 'react-redux';
import TinderCard from 'react-tinder-card';
import Button from '../Button';
import { IChoseMovie } from '../../interfaces';
import {
  rateMovie,
  removeMovie,
} from '../../redux/actions/movies/actions';
import { directionToParam } from '../../utils';

type SwipeDirection = 'left' | 'right';

const ChoseMovie: React.FC<IChoseMovie> = ({
  movies,
}): JSX.Element => {
  const dispatch = useDispatch();

  const handleRateMovie = (direction: SwipeDirection, id: number) => {
    const param = directionToParam(direction);
    dispatch(rateMovie(id, param));
    dispatch(removeMovie(id));
  };

  return (
    <div className="choose-movie">
      {movies.map((movie) => (
        <TinderCard
          key={movie.id}
          onSwipe={(direction: any) =>
            handleRateMovie(direction, movie.id)
          }
          className="tinder-card"
          preventSwipe={['up', 'down']}
        >
          <div className="movie">
            <div className="movie-head">
              <h4>{movie.id}</h4>

              <div className="movie-rating">
                <span>({movie.vote_average ?? '-'}</span>
                <span>/10)</span>
              </div>
            </div>

            <div
              className="movie-image"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              }}
            />
            <p className="movie-summary">{movie.overview}</p>
          </div>

          <div className="actions">
            <Button
              className="button-green"
              onClick={() => handleRateMovie('left', movie.id)}
            >
              Accept
            </Button>
            <Button
              className="button-red"
              onClick={() => handleRateMovie('right', movie.id)}
            >
              Reject
            </Button>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default ChoseMovie;
