import styles from './Header.module.css'
export const Header =()=>{
    return(
        <header>
            <div className={styles.logo}>MovieVerse</div>
            <div className={styles.nav_links}>
                <ul>
                    <li>About</li>
                     <li>Movies</li>
                      <li>Tv Shows</li>
                </ul>
            </div>
        </header> 
    )
}