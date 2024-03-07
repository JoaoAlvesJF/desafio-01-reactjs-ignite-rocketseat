import styles from './header.module.css'
import igniteTodoLogo from '../../assets/logo.png'

export function Header () {
  return(
    <header className={styles.header}>
      <img src={igniteTodoLogo} alt="logo ignite todo list" />
    </header> 
  )
}