import {FaBookOpen} from 'react-icons/fa'
import styles from '../styles/poster.module.css'
import Image from 'next/image'
import { features } from 'process'

export default function Poster() {
    return(
        <div className={styles.feature}>
            <div>
            <div className={styles.featureDesc}>
                <h1 className={styles.featureTitle}>Nome do filme</h1>
                <h3 className={styles.featureSinopse}>Descrição do filme que está aqui representado pela imagem Descrição do filme que está aqui representado pela imagem Descrição do filme que está aqui representado pela imagem</h3>
                <button className={styles.botao}>Ler</button>
            </div>
            </div>
            
        </div>
    )
}