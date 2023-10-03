// components/Modal.tsx
import React from "react";
import Modal from "react-modal";
import styles from "../styles/modal.module.css"


interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children?: React.ReactNode; // Tornar 'children' opcional
}

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        // Personalize as propriedades CSS aqui
        width: "900px", // Largura do modal
        height: "800px",
        backgroundColor: "#151515", // Cor de fundo
        borderRadius: "8px", // Borda arredondada
        boxShadow: "0 4px 10px #000", // Sombra
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
      },
      // Você também pode personalizar o overlay (fundo do modal) aqui
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor de fundo do overlay
      },
};

const MyModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Exemplo de Modal"
      ariaHideApp={false}
      className={styles.modal}
    >
      {children}
    </Modal>
  );
};

export default MyModal;
