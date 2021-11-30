interface IMovie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
}

interface IChoseMovie {
  movies: IMovie[];
}

export type { IMovie, IChoseMovie };
