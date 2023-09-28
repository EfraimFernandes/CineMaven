
import React from "react";
import MyModal from "./Modal";
import { Filme } from "./data/filmes";
import styles from "../styles/modal.module.css"; // Importe as classes CSS

interface FilmeModalProps {
  filme: Filme | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

const FilmeModal: React.FC<FilmeModalProps> = ({ filme, isOpen, onRequestClose }) => {
  return (
    <MyModal isOpen={isOpen} onRequestClose={onRequestClose}>
      {filme && (
        <div className={styles.customModal}> {/* Use a classe CSS personalizada */}
          <h2>{filme.titulo}</h2>
          <p>{filme.descricao}</p>
          <p>Nota: {filme.nota}</p>
          {/* Adicione outras informações relevantes sobre o filme aqui */}
          <button onClick={onRequestClose}>Fechar</button>
        </div>
      )}
    </MyModal>
  );
};

export default FilmeModal;
