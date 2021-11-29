interface IMovie {
  id: number;
  title: string;
  imageURL: string;
  summary: string;
  rating: number;
}

interface IChoseMovie {
  movies: IMovie[];
}

export type { IMovie, IChoseMovie };
