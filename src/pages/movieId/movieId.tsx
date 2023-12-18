import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import style from './movieid.module.css';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface Movie {
  id: number;
  title: string;
  genre: string;
  releaseYear: number;
  director: string;
  rating: number;
  description: string;
  comments: { author: string; text: string }[];
}

const emptyValues = {
  author: '',
  text: '',
};
type CommentType = typeof emptyValues;

const MovieId = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { id } = useParams();

  const [formValue, setFormValue] = useState<CommentType>(emptyValues);

  const {
    data: movieState,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['movie'],
    queryFn: () => {
      return axios
        .get<Movie>(`http://localhost:3000/movies/${id}`)
        .then(({ data }) => {
          return data;
        });
    },
  });

  const addCommentMutation = useMutation({
    mutationFn: () => {
      movieState!.comments.push(formValue);
      return axios.put(`http://localhost:3000/movies/${id}`, movieState);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
      setFormValue(emptyValues);
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error loading movie data: {error.message}</p>;
  }
  if (!movieState) {
    return null;
  }

  return (
    <div>
      <div className={style.grid}>
        <h1>movie name:</h1> <h1>{movieState.title}</h1>
      </div>
      <div className={style.grid}>
        <p>genre:</p>
        <p>{movieState.genre}</p>
      </div>
      <div className={style.grid}>
        <p>releaseYear:</p> <p>{movieState.releaseYear}</p>
      </div>
      <div className={style.grid}>
        <p>director:</p> <p> {movieState.director}</p>
      </div>
      <div className={style.grid}>
        <p>rating: </p> <p> {movieState.rating}</p>
      </div>
      <div className={style.grid}>
        <p>description: </p> <p> {movieState.description}</p>
      </div>
      <div className={style.grid}>
        <div>
          <h2 className={style.greenText}>comments:</h2>
          {movieState.comments.map((comment, index: number) => (
            <div className={style.displayComment} key={index}>
              <div>
                <span  className={style.commentAuthor}>{comment.author}</span>
                <span className={style.commented}> commented:</span>
              </div>{' '}
              <div className={style.authorsComment}>{comment.text}</div>
            </div>
          ))}
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addCommentMutation.mutate();
            }}
          >
            <div className={style.labelInputSplit}>
              <label htmlFor="commentAuthor">Your name:</label>
              <div className={style.inputOk}>
              <input
              className={style.authorsInput}
                type="text"
                id="commentAuthor"
                value={formValue.author}
                onChange={(e) =>
                  setFormValue({ ...formValue, author: e.target.value })
                }
              />
              <button className={style.button}>Leave a comment</button>
              <button className={style.button} onClick={() => navigate(-1)}>GO BACK</button>
              </div>
            </div>
            <div className={style.labelInputSplit}>
              <label htmlFor="yourComment">Your comment:</label>
              <textarea
              className={style.textBoxInput}
                id="yourComment"
                value={formValue.text}
                onChange={(e) =>
                  setFormValue({ ...formValue, text: e.target.value })
                }
              />
            </div>
            
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default MovieId;
