import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/catalogo.module.css'
import Image, { StaticImageData } from 'next/image';
import {FaChevronRight} from 'react-icons/fa'


interface CalogoProps {
    categoria: string
    src: StaticImageData
    titulo: string
    nota: number
    corNota: string
}

export default function CatalogoModel(props: CalogoProps) {
    return(
        <div className={styles.catalogo}>
            <h1 className={styles.categoria}>{props.categoria}</h1>
            <div className={styles.listaFilmes}>
                <div className={styles.filme}>
                    <div className={styles.card}>
                        <Image className={styles.imagem} src={props.src} style={{objectFit:"cover"}} width= {350} height= {200} alt="Imagem"/>
                        <div id='tituloNota' className={styles.tituloNota}>
                            <div>
                                <span className={styles.titulo}>{props.titulo}</span>
                            </div>
                            <div>
                                <p className={styles.nota} style={{ color:`${props.corNota}`, display: "flex"}}>{props.nota}</p>
                            </div>
                        </div>
                        <div>
                            <button className={styles.botao}><p className={styles.textoBotao}>Mais Informações</p><FaChevronRight/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}