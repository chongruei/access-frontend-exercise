import React from 'react';
import Modal from 'react-modal';
import { Container, Row } from './ModalComponents';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

const CustModal = ({ modalIsOpen, closeModal, children }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="User Modal">
        {children}
      </Modal>
    </div>
  );
};

export { CustModal };
