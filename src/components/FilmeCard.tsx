import styles from '../styles/catalogo.module.css'
import Image, { StaticImageData } from 'next/image'
import {FaChevronRight} from 'react-icons/fa'

interface FilmeCardProps{
    src: StaticImageData
    titulo: string
    nota: number
    corNota: string
}

export default function FilmeCard(props: FilmeCardProps) {
    return(
    <div className={styles.filme}>
        <Image className={styles.imagem} src={props.src} style={{objectFit:"cover", borderRadius:"5px"}} width= {350} height= {200} alt="Imagem" quality={100}/>
        <div className={styles.tituloNota}>
            <div>
                <span className={styles.titulo}>{props.titulo}</span>
            </div>
            <div>
                <p className={styles.nota} style={{ color:`${props.corNota}`, display: "flex", alignItems:"center"}}> <p style={{color: "#f3f3f3", marginRight:"10px", fontSize:"0.95rem"}}>Nota:</p> {props.nota}</p>
            </div>
        </div>
        <div>
            <button className={styles.botao}><p className={styles.textoBotao}>Mais Informações</p><FaChevronRight/></button>
        </div>
    </div>
    )
}