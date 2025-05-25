import type { Movie } from '../../types/movie';
import css from './MovieGrid.module.css';

interface MovieGridProps {
  onSelect: (movie: Movie) => void;
  movies: Movie[];
}

const placeholderImg =
  "https://placeholder.com/300x450/0057B8/FFD700?text=Freedom+for+Ukraine";

export default function MovieGrid({ onSelect, movies }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <div onClick={() => onSelect(movie)} className={css.card}>
              <img
                className={css.image}
                src={
                  movie.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : placeholderImg
                }
                alt={movie.title}
                loading="lazy"
              />
              <h2 className={css.title}>{movie.title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
