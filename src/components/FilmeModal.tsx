import Image from 'next/image'
import React from "react";
import MyModal from "./Modal";
import { Filme } from "./data/filmes";
import styles from "../styles/modal.module.css"; // Importe as classNamees CSS

interface FilmeModalProps {
  filme: Filme | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

const FilmeModal: React.FC<FilmeModalProps> = ({ filme, isOpen, onRequestClose }) => {
  return (
    <MyModal isOpen={isOpen} onRequestClose={onRequestClose}>
      {filme && (
        <div className={styles.customModal}>
          <div className={styles.imagem}>
            <Image 
              src={filme.imagemSRC}
              alt={filme.titulo}
              className={styles.img}
            />
          </div>
          <div>
          <div className={styles.desc1}>
            <div className={styles.titulo_generos}>
              <h1 className={styles.titulo}>{filme.titulo}</h1>
              <h4 className={styles.generos}>{filme.genero}</h4>
            </div>
            <div className={styles.nota} style={{display:"flex", alignItems:"center", justifyContent:"center", color:"aliceblue"}}>
              <h2>Nota: </h2><h2  style={{color:`${filme.corNota}`, marginLeft:"10px"}}>{filme.nota}</h2>
            </div>
          </div>
          <div className={styles.recomendacao}>
              <h1>Recomendação</h1>
              <h2>{filme.recomendacao}</h2>
          </div>
          </div>
        </div>
      )}
    </MyModal>
  );
};

export default FilmeModal;
