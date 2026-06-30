import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import { API_KEY, IMG_URL } from "../utils/links";
import  styles from './MovieDetails.module.css'     
export const MovieDetails = () => {
  const { moviesid } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const MovieDes = async () => {
      const response = await fetch( `https://api.themoviedb.org/3/movie/${moviesid}?api_key=${API_KEY}`  );
      const data = await response.json();
      setMovie(data);
      console.log(data); 
    };
    MovieDes();
  }, [moviesid]); 

  if (!movie) return <h1>Loading...</h1>;

  return (
    <div className={styles.container}>
        <div className="image"><img src={IMG_URL+ movie.poster_path}/></div>
     <div className={styles.des}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}
        
      </p>
      <p>⭐{movie.vote_average}</p>
      <p>📅{movie.release_date}</p>
      <p>🕐{movie.runtime}mins</p>
      </div>
    </div>
  );
};