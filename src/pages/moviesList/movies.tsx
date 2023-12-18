import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import style from './movies.module.css';

interface Movie {
  id: number;
  title: string;
  genre: string;
  releaseYear: number;
  director: string;
  rating: number;
  description: string;
}

const MoviesList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: () => {
      return axios
        .get<Movie[]>('http://localhost:3000/movies')
        .then(({ data }) => {
          return data;
        });
    },
  });

  const { mutateAsync: deleteMovie, isPending } = useMutation({
    mutationFn: (id: number) => {
      return axios.delete(`http://localhost:3000/movies/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
  });

  console.log('query', movies);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movies: {error.message}</div>;
  }

  return (
    <div className={style.movieWrapper}>
      {movies!.map((movie) => (
        <div key={movie.id} className={style.moviecard}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <div className={style.buttonSplit}>
            <button className={style.button} onClick={() => deleteMovie(movie.id)} disabled={isPending}>
              Delete
            </button>
            <button className={style.button} onClick={() => navigate(`/movieslist/${movie.id}`)}>
              Learn more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
