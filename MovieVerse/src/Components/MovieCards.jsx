import { useEffect, useState } from "react";
import { IMG_URL } from "../utils/links"
import styles from './Movie.module.css'
import { Link, useParams } from 'react-router-dom';
export const MovieCards = ({movies}) => {
    return (
  <div className={styles.MovieTile}>
    {movies.map((movie)=>(
              <Link  to ={`/moviedetails/${movie.id}`} key={movie.id}>
              <div className={styles.card} key={movie.id}>
                    <div className ={styles.img} ><img src={IMG_URL+ movie.poster_path}/></div>
                   <div className={styles.info}>
                    <h2>{movie.title}</h2>
                    <p>Release : {movie.release_date}</p>
                     <p>Popularity : {movie.popularity}</p>
                    <p> Rating : {movie.vote_average}⭐</p>
                    </div>
                </div></Link>
    ))
}
            </div>



  )



}
