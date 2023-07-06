import { ReactNode } from 'react'
import styles from '../styles/poster.module.css'


interface botaoProps {
    valor?: ReactNode;
}

export default function Botao(props: botaoProps) {
    return <button className={styles.botao}>{props.valor}</button>
}