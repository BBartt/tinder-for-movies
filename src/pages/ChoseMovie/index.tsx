import React from 'react';
import ChoseMovie from '../../components/ChoseMovie';
import dummyData from '../../dummyData.json';

const ChoseMoviePage: React.FC = (): JSX.Element => {
  return (
    <div className="choose-movie-page">
      <h2 className="swipe-info">
        Swipe left to like movie or swipe right to dislike the movie
      </h2>
      <ChoseMovie movies={dummyData} />
    </div>
  );
};

export default ChoseMoviePage;
