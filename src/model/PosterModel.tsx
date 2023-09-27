import Botao from '@/components/botao';
import styles from '../styles/poster.module.css';

interface PosterModel {
    titulo?: string;
    sinopse?: String;
}

export default function PosterModel(props: PosterModel) {

    return(
        <div className={styles.poster}>
            <div>
            <div className={styles.posterDesc}>
                <h1 className={styles.posterTitle}>{props.titulo}</h1>
                <h3 className={styles.posterSinopse}>{props.sinopse}</h3>
                <Botao valor='Ler Sobre'/>
            </div>
            </div>
            
        </div>
    )
} 