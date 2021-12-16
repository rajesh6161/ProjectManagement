import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import Modal from 'react-modal';

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

Modal.setAppElement(document.getElementById('root'));

function _Modal({ title, type, header, my_component }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        className={`btn btn-${type ? type : 'dark'} btn-md`}
        onClick={openModal}
      >
        {title}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{header}</h2>
          <a href="#" onClick={closeModal} style={{ padding: 0 }}>
            <FaTimesCircle style={{ fontSize: 24, color: 'black' }} />
          </a>
        </div>
        {my_component ? my_component : null}
      </Modal>
    </>
  );
}

export default _Modal;
