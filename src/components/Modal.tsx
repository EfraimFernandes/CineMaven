// components/Modal.tsx
import React from "react";
import Modal from "react-modal";

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
        width: "80%", // Largura do modal
        maxHeight: "80vh", // Altura máxima
        backgroundColor: "white", // Cor de fundo
        borderRadius: "8px", // Borda arredondada
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra
        zIndex:"1",
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
    >
      {children}
    </Modal>
  );
};

export default MyModal;
