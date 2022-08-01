import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import CreateSpotForm from './CreateSpotForm';
import './CreateSpotFormModal.css';

function CreateSpotFormModal() {
  const [showModal, setShowModal] = useState(false);
  const currentUser = useSelector((state) => state.session.user);

  return (
    <div className="become-host-container">
      <div>
        {!currentUser && (
          <button
            className="become-host-button"
            onClick={() => setShowModal(true)}
          >
            Become a Host
          </button>
        )}
        {currentUser && (
          <button
            className="become-host-button"
            onClick={() => setShowModal(true)}
          >
            Switch to hosting
          </button>
        )}
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSpotForm setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}

export default CreateSpotFormModal;
