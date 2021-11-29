import React from 'react';
import TinderCard from 'react-tinder-card';
import Button from '../Button';
import { IChoseMovie } from '../../interfaces';

const ChoseMovie: React.FC<IChoseMovie> = ({
  movies,
}): JSX.Element => {
  const handleSwipe = (direction: string, id: number) => {
    console.log(`You swiped: ${direction} item with id of: ${id}`);
  };

  return (
    <div className="choose-movie">
      {movies.map((movie) => (
        <TinderCard
          key={movie.id}
          onSwipe={(direction) => handleSwipe(direction, movie.id)}
          className="tinder-card"
          preventSwipe={['up', 'down']}
        >
          <div className="movie">
            <div className="movie-head">
              <h4>{movie.title}</h4>
              <div className="movie-rating">
                <span>({movie.rating ?? '-'}</span>
                <span>/10)</span>
              </div>
            </div>

            <div
              className="movie-image"
              style={{ backgroundImage: `url(${movie.imageURL})` }}
            />
            <p className="movie-summary">{movie.summary}</p>
          </div>

          <div className="actions">
            <Button
              className="button-green"
              onClick={() => handleSwipe('left', movie.id)}
            >
              Accept
            </Button>
            <Button
              className="button-red"
              onClick={() => handleSwipe('right', movie.id)}
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
