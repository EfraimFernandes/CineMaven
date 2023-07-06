import Botao from '@/components/botao';
import styles from '../styles/poster.module.css'
import poster from  "../../public/Images/poster-1.jpeg"

interface FilmeModel {
    titulo?: string;
    sinopse?: String;
    ano?: number;
    nota?: number;
}

export default function PosterModel(props: FilmeModel) {

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