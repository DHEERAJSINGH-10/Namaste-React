import styles from './Hero.module.css';
import { MovieCards } from './MovieCards';
import { useEffect, useState } from 'react';
import { TOP_RATED } from "../utils/links";

export const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [allmovies, setAllMovies] = useState([]);

  useEffect(() => {
    const movieFetch = async () => {
      const response = await fetch(TOP_RATED);
      const data = await response.json();
      setMovies(data.results);
      setAllMovies(data.results);
     
    };
    movieFetch();
  }, []);

  const TopFilter = () => {
    const filtered = allmovies.filter((movie) => movie.vote_average > 8.5);
    setMovies(filtered); 
  };

  const ShowAll = () => {
    setMovies(allmovies); 
  };

  return (
    <div className={styles.Hero_Con}>
      <button className={styles.btn} onClick={TopFilter}>Top Rated</button>
      <button className={styles.btn} onClick={ShowAll}>Show All</button>
      <MovieCards movies={movies} />
    </div>
  );
};