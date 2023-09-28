// components/ModalButton.tsx
import styles from '../styles/catalogo.module.css'
import { FaChevronRight } from 'react-icons/fa'
import React, { useState } from "react";
import { Filme } from "../components/data/filmes";

interface ModalButtonProps {
  filme: Filme;
  openModal: () => void; // Adicione esta propriedade
}

const ModalButton: React.FC<ModalButtonProps> = ({ filme, openModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button className={styles.botao} onClick={() => { openModal(); setModalIsOpen(true); }}>
        <p className={styles.textoBotao}>Mais Informações</p>
        <FaChevronRight />
      </button>

      {/* Remova a linha abaixo
      <FilmeModal filme={filme} isOpen={modalIsOpen} onRequestClose={closeModal} /> */}
    </div>
  );
};

export default ModalButton;
