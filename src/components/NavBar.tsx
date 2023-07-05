import styles from "../styles/navbar.module.css"
import {FaFacebook} from 'react-icons/fa'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <h1>
                    CineMaven
                </h1>
            </div>
            <div>
                <ul className={styles.categoriesBar}>
                    <li className={styles.categorie}>Filmes</li>
                    <li className={styles.categorie}>Séries</li>
                    <li className={styles.categorie}>Populares</li>
                </ul>
            </div>
        </div>
    )
}