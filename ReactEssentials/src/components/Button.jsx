import styles from './Button.module.css'
export const Button=({name,onClick})=>{
    return(
        <button  className={styles.btn}onClick={onClick}>{name}</button>
    )

}