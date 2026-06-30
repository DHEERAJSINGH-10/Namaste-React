import { Video_URL } from "../utils/links"
import styles from './Banner.module.css'

export const Banner=()=>{
   
   return(
      <>
      <div className={styles.Banner_vid}>
     <video
        src={Video_URL}
        autoPlay
        loop
        muted
        playsInline
      />
       <div className={styles.scrim}></div>
      <div className={styles.explore}>
         <h1>Explore the vast Catalog of your favourite Movies..</h1>
         <button>Tap To Explore</button> 
      </div> 
    
      </div>
    
</>
   )
}